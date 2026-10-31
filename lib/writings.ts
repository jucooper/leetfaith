import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type Writing = {
  slug: string;
  title: string;
  content: string;
  preview: string;
};

export function getWritings(): Writing[] {
  const directory = path.join(process.cwd(), "writings");

  return readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.md$/i.test(file.name))
    .map((file) => {
      const slug = file.name.replace(/\.md$/i, "");
      const markdown = readFileSync(path.join(directory, file.name), "utf8");
      const heading = markdown.match(/^\s*# ([^\r\n]+)\r?\n?/);
      const content = heading ? markdown.slice(heading[0].length) : markdown;
      const preview = content
        .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, "")
        .split(/\r?\n\s*\r?\n/)
        .map((paragraph) => paragraph.trim())
        .find((paragraph) => paragraph && !/^(#{1,6}\s|>|[-*+]\s|\d+[.)]\s|<)/.test(paragraph)) ?? "";

      return {
        slug,
        title: heading ? heading[1].trim() : slug.replace(/[-_]/g, " "),
        content,
        preview,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

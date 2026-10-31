import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { getWritings } from "@/lib/writings";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

function getWriting(slug: string) {
  const writing = getWritings().find((writing) => writing.slug === slug);
  if (!writing) notFound();
  return writing;
}

export function generateStaticParams() {
  return getWritings().map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: getWriting(slug).title };
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const writing = getWriting(slug);

  return (
    <article className="page-content">
      <h1 className="page-title">{writing.title}</h1>
      <div className="prose">
        <Markdown
          skipHtml
          components={{
            a: ({ href, children }) =>
              href && (/^\/writings\/[^/?#]+$/.test(href) || /^https:\/\//.test(href))
                ? <a href={href}>{children}</a>
                : <span>{children}</span>,
          }}
        >
          {writing.content}
        </Markdown>
      </div>
    </article>
  );
}

import Link from "next/link";
import Markdown from "react-markdown";
import SiteHeader from "@/components/SiteHeader";
import { getWritings } from "@/lib/writings";

export default function Home() {
  const writings = getWritings();

  return (
    <>
      <SiteHeader home />

      <section className="writings-section" aria-labelledby="writings-title">
        <h2 id="writings-title">Writings</h2>
        <ul className="entry-list">
          {writings.map((writing) => (
            <li key={writing.slug}>
              <h3>
                <Link className="entry-link" href={`/writings/${encodeURIComponent(writing.slug)}`}>
                  {writing.title}
                </Link>
              </h3>
              <div className="entry-preview">
                <Markdown
                  skipHtml
                  components={{
                    a: ({ children }) => <span>{children}</span>,
                    img: ({ alt }) => <span>{alt}</span>,
                  }}
                >
                  {writing.preview}
                </Markdown>
              </div>
              <Link
                className="read-more"
                href={`/writings/${encodeURIComponent(writing.slug)}`}
                aria-label={`Read more: ${writing.title}`}
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

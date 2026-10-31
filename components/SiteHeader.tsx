import Link from "next/link";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const Title = home ? "h1" : "p";

  return (
    <header>
      <div className="hero">
        <Title className="wordmark">
          <Link href="/" aria-label="leetfaith home">leet<span>faith</span></Link>
        </Title>
        <p className="byline">By <a href="https://jucooper.com">Justin Cooper</a></p>
      </div>
      <section className="verse" aria-label="Matthew 13:37">
        <blockquote>
          &ldquo;The one who sows the good seed is the Son of Man.&rdquo;
        </blockquote>
        <p className="eyebrow">Matthew 13:37</p>
      </section>
      <hr className="writing-divider" />
    </header>
  );
}

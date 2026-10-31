type ErrorPageProps = {
  status: 404 | 500;
  retry?: () => void;
};

export default function ErrorPage({ status, retry }: ErrorPageProps) {
  return (
    <section className="error-page" aria-labelledby="error-title">
      <p className="eyebrow">{status}</p>
      <h1 id="error-title" className="page-title">
        {status === 404 ? "Page not found." : "Something went wrong."}
      </h1>
      <p className="error-description">
        {status === 404
          ? "The page you requested does not exist."
          : "This page could not be loaded. Please try again."}
      </p>
      {retry && (
        <button className="error-action" type="button" onClick={retry}>
          Try again
        </button>
      )}
    </section>
  );
}

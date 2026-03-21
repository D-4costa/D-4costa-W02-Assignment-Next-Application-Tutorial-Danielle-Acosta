'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}

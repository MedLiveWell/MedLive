/**
 * Renders a JSON-LD <script> tag. Wrapping makes the call sites clean and
 * keeps the dangerouslySetInnerHTML quirk contained.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

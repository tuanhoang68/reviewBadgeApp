export default function ReviewBadgePage() {
  const iframeSrc = import.meta.env.VITE_HOST_FE
  // console.log("iframeSrc =", iframeSrc);

  return (
    <s-page heading="Review Badge">
      <s-section>
        <iframe
          src={iframeSrc}
          style={{ width: '100%', height: '800px', border: 'none' }}
        />
      </s-section>
    </s-page>
  );
}

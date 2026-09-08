// Inline calendar. A plain iframe of the booking page with theme and layout
// forced by query string, so it stays light regardless of the visitor's
// system setting. Works for Cal.com and Calendly links.
export default function BookingEmbed({ url }: { url: string }) {
  const isCal = /(^|\.)cal\.com\//.test(url);
  const sep = url.includes("?") ? "&" : "?";
  const src = isCal
    ? `${url}${sep}theme=light&layout=month_view&embed=true`
    : `${url}${sep}hide_gdpr_banner=1&background_color=ffffff&text_color=171717&primary_color=171717`;

  return (
    <iframe
      title="Book a call"
      src={src}
      loading="lazy"
      className="w-full rounded-3xl border border-neutral-200 bg-white"
      style={{ minHeight: 700 }}
    />
  );
}

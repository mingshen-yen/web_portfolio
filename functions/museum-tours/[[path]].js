// Serves the museum tour sign-up page (Cloudflare Pages project
// `museum-tours`, deployed straight from a local folder with wrangler and kept
// out of this repo) under mingslab.com/museum-tours/ by proxying to its
// pages.dev host. Same pattern as functions/pulse_database.
const ORIGIN = "https://museum-tours.pages.dev";
const PREFIX = "/museum-tours";

export async function onRequest({ request }) {
  const url = new URL(request.url);

  // The page is served from a folder, so keep the trailing slash.
  if (url.pathname === PREFIX) {
    return Response.redirect(`${url.origin}${PREFIX}/${url.search}`, 301);
  }

  const upstream = new URL(url.pathname.slice(PREFIX.length) + url.search, ORIGIN);
  const res = await fetch(new Request(upstream, request));

  // pages.dev redirects (e.g. /index.html -> /) point at its own host;
  // keep the visitor on mingslab.com.
  const location = res.headers.get("Location");
  if (location) {
    const target = new URL(location, upstream);
    if (target.origin === ORIGIN) {
      const headers = new Headers(res.headers);
      headers.set("Location", PREFIX + target.pathname + target.search);
      return new Response(res.body, { status: res.status, headers });
    }
  }
  return res;
}

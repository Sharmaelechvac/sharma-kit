// Serves the kit's static files. No data, no secrets. Anything not a file -> 404.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const h = new Headers(res.headers);
    h.set("Access-Control-Allow-Origin", "*");
    return new Response(res.body, { status: res.status, headers: h });
  },
};

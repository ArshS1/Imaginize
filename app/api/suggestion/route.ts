export async function GET(request: Request) {
  // hit azure endpoint w/ this response
  const response = await fetch("http://localhost:7071/api/imaginize-fetcher", {
    cache: "no-store",
  });

  const data = await response.text();

  return new Response(JSON.stringify(data.trim()), {
    status: 200,
  });
}

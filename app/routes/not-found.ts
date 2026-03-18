import type { Route } from "./+types/not-found";

export function loader(_: Route.LoaderArgs) {
  throw new Response(null, { status: 404 });
}

import { redirect } from "react-router";

export function loader() {
  throw redirect("https://www.etsy.com/shop/JSMerch?section_id=30639330", 302);
}

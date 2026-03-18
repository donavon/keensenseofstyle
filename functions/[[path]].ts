// oxlint-disable import/no-relative-parent-imports
import { createPagesFunctionHandler } from "@react-router/cloudflare";
// @ts-expect-error - generated at build time
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({ build });

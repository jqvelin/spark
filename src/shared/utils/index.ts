// hooks are exported from a dedicated index.ts file
// to avoid exporting server and client logic from the same file
export { getResolvedComponent } from "./getResolvedComponent";
export { cloneComponents } from "./cloneComponents";
export { areApproximatelyEqual } from "./areApproximatelyEqual";

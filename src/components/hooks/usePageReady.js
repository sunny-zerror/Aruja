import { useEffect } from "react";

export function usePageReady(callback, deps = []) {
  useEffect(() => {
    // Run once on mount (refresh case)
    callback();

    // Also run when custom pageReady event is dispatched (route transitions)
    const handle = () => callback();

    window.addEventListener("pageReady", handle);
    return () => window.removeEventListener("pageReady", handle);
  }, deps);
}

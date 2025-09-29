import { useEffect } from "react";

export function usePageReady(callback, deps = []) {
  useEffect(() => {
    callback();
    const handle = () => callback();
    window.addEventListener("pageReady", handle);
    return () => window.removeEventListener("pageReady", handle);
  }, deps);
}

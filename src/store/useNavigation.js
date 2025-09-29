// store/useNavigation.js
import { create } from "zustand";
import { createRef } from "react";

const useNavigation = create((set, get) => ({
  revealerRef: createRef(), 

  navigate: async (router, path) => {
    const { revealerRef } = get();
    if (!router || router.pathname === path) return;
    await revealerRef.current?.fadeIn();
    await router.push(path);
    await revealerRef.current?.fadeOut();
    window.dispatchEvent(new Event("pageReady"));
  },
}));

export default useNavigation;

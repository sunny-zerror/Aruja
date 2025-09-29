// store/useNavigation.js
import { create } from "zustand";
import { createRef } from "react";

const useNavigation = create((set, get) => ({
  revealerRef: createRef(), // store PageTransition ref globally

  navigate: async (router, path) => {
    const { revealerRef } = get();
    if (!router || router.pathname === path) return;

    // 1. Fade in
    await revealerRef.current?.fadeIn();

    // 2. Navigate
    await router.push(path);

    // 3. Fade out
    await revealerRef.current?.fadeOut();

    // 4. Dispatch pageReady event
    window.dispatchEvent(new Event("pageReady"));
  },
}));

export default useNavigation;

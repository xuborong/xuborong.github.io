import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Phase = "idle" | "enter" | "exit";
type TransitionState = {
  phase: Phase;
  key: number;
};

export default function P5TransitionLayer() {
  const shouldReduceMotion = useReducedMotion();
  const [state, setState] = useState<TransitionState>({ phase: "idle", key: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeoutId: number | undefined;

    function onBeforePreparation() {
      window.clearTimeout(timeoutId);
      setState((previous) => ({ phase: "enter", key: previous.key + 1 }));
    }

    function onAfterSwap() {
      setState((previous) => ({ ...previous, phase: "exit" }));
      timeoutId = window.setTimeout(() => {
        setState((previous) => ({ ...previous, phase: "idle" }));
      }, 620);
    }

    document.addEventListener("astro:before-preparation", onBeforePreparation as EventListener);
    document.addEventListener("astro:after-swap", onAfterSwap as EventListener);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("astro:before-preparation", onBeforePreparation as EventListener);
      document.removeEventListener("astro:after-swap", onAfterSwap as EventListener);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {state.phase !== "idle" && (
        <motion.div
          key={state.key}
          className="p5-route-transition"
          aria-hidden="true"
          initial={{ x: "-120%", skewX: -18 }}
          animate={state.phase === "enter" ? { x: "0%", skewX: -18 } : { x: "120%", skewX: -18 }}
          exit={{ x: "130%", opacity: 0 }}
          transition={{ duration: 0.48, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span className="p5-route-band p5-route-band-main"></span>
          <span className="p5-route-band p5-route-band-sub"></span>
          <span className="p5-route-band p5-route-band-accent"></span>
          <motion.span
            className="p5-route-corner-badge"
            initial={{ rotate: -26, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            <span className="p5-route-corner-ring"></span>
            <span className="p5-route-corner-core">切换</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

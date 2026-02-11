import { useMemo, useState } from "react";
import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import P5Panel from "@components/p5/P5Panel";

type Props = {
  title: string;
  excerpt?: string;
  image?: string;
  caption?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function P5Hero({ title, excerpt, image, caption, ctaLabel, ctaHref }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const parallax = useMemo(
    () => ({
      x: shouldReduceMotion ? 0 : pointer.x * 5,
      y: shouldReduceMotion ? 0 : pointer.y * 5
    }),
    [pointer, shouldReduceMotion]
  );

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setPointer({ x, y });
  }

  return (
    <P5Panel className="p5-hero comic-border p5-reveal" cut="both">
      <section className="p5-hero-stage" onPointerMove={onPointerMove}>
        {image && (
          <motion.div
            className="p5-hero-media"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={parallax}
          >
            <img src={image} alt={title} loading="eager" />
          </motion.div>
        )}

        <div className="p5-hero-body">
          <motion.p className="p5-hero-tag slant-x" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
            Phantom Chronicle
          </motion.p>

          <motion.h1 initial={{ x: -48, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.42, delay: 0.08 }}>
            {title}
          </motion.h1>

          {excerpt && (
            <motion.p className="p5-hero-lead" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.34, delay: 0.18 }}>
              {excerpt}
            </motion.p>
          )}

          <motion.div className="p5-hero-strip-row" initial={{ x: -26, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.28, delay: 0.2 }}>
            <span className="p5-hero-strip p5-hero-strip-ink">Archive Route</span>
            <span className="p5-hero-strip p5-hero-strip-alert">Live Update</span>
          </motion.div>

          {ctaLabel && ctaHref && (
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.36, delay: 0.22 }}>
              <a className="p5-cta slant-x" href={ctaHref}>
                <span>{ctaLabel}</span>
              </a>
            </motion.p>
          )}

          {caption && <p className="meta p5-hero-caption" dangerouslySetInnerHTML={{ __html: caption }}></p>}
        </div>
      </section>
    </P5Panel>
  );
}

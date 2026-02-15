import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  dateText: string;
  url: string;
  variant?: number;
};

export default function P5Card({ title, description, dateText, url, variant = 0 }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const variantClass = `p5-card-variant-${variant}`;

  return (
    <motion.article
      className={`p5-card ${variantClass} cut-top-left cut-bottom-right comic-border`}
      initial={{ opacity: 0, y: 26, rotate: -1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ amount: 0.25, once: true }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.5, skewX: -1.5 }}
      whileFocus={shouldReduceMotion ? undefined : { y: -6, rotate: -0.5, skewX: -1.5 }}
      transition={{ duration: 0.28 }}
    >
      <p className="p5-card-chip slant-x">条目</p>
      <h3 className="p5-card-title">
        <a href={url}>{title}</a>
      </h3>
      <p className="meta p5-card-date">{dateText}</p>
      <p>{description}</p>
      <span className="p5-card-sweep" aria-hidden="true"></span>
    </motion.article>
  );
}

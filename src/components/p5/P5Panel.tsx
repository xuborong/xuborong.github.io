import type { ReactNode } from "react";

type PanelVariant = "base" | "ink" | "alert";
type CutVariant = "both" | "top-left" | "bottom-right" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: PanelVariant;
  cut?: CutVariant;
  elevated?: boolean;
};

function getCutClass(cut: CutVariant) {
  if (cut === "top-left") return "cut-top-left";
  if (cut === "bottom-right") return "cut-bottom-right";
  if (cut === "none") return "";
  return "cut-top-left cut-bottom-right";
}

export default function P5Panel({ children, className = "", variant = "base", cut = "both", elevated = true }: Props) {
  const classes = [
    "p5-panel",
    `p5-panel-${variant}`,
    getCutClass(cut),
    elevated ? "impact-shadow" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <section className={classes}>{children}</section>;
}

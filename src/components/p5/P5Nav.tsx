import { useEffect, useState } from "react";
import type { NavItem } from "@data/navigation";

type Props = {
  items: NavItem[];
  currentPath: string;
  onToggle?: (open: boolean) => void;
};

export default function P5Nav({ items, currentPath, onToggle }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 881px)").matches) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeydown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function toggle() {
    setOpen((previous) => {
      const next = !previous;
      onToggle?.(next);
      return next;
    });
  }

  return (
    <div className="p5-nav-shell">
      <button className="p5-nav-toggle" type="button" aria-expanded={open} aria-controls="p5-site-nav" onClick={toggle}>
        <span className="sr-only">切换导航菜单</span>
        <span className="p5-nav-toggle-bar"></span>
        <span className="p5-nav-toggle-bar"></span>
        <span className="p5-nav-toggle-bar"></span>
      </button>

      <nav className="p5-nav" id="p5-site-nav" aria-label="主导航" data-open={open ? "true" : "false"}>
        <ul className="p5-nav-links">
          {items.map((item) => {
            const isActive = !item.external && currentPath === item.href;
            return (
              <li key={`${item.title}-${item.href}`}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="p5-nav-label">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

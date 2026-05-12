"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { NAV } from "@/lib/data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Logo size={128} />

        <nav className="nav-links" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={"nav-link " + (isActive(pathname, item.href) ? "active" : "")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/seja-revendedor" className="btn btn-accent btn-sm header-cta">
            Seja Revendedor
            <Icon.arrow />
          </Link>
          <button
            type="button"
            className="hamburger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={"mobile-panel " + (open ? "open" : "")}
        aria-label="Menu mobile"
        aria-hidden={!open}
      >
        {NAV.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={"nav-link " + (isActive(pathname, item.href) ? "active" : "")}
            tabIndex={open ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/seja-revendedor"
          className="btn btn-accent btn-sm mobile-cta"
          tabIndex={open ? 0 : -1}
        >
          Seja Revendedor
          <Icon.arrow />
        </Link>
      </nav>
    </header>
  );
}

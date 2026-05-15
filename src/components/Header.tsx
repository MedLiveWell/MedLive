"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import {
  NAV,
  CATEGORIES,
  getSubcategoriesForCategory,
  type Category,
} from "@/lib/data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function CaretDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      style={{ marginLeft: 4 }}
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMobileProductsOpen(false);
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

        <NavigationMenu.Root
          className="nav-links"
          aria-label="Navegação principal"
          delayDuration={100}
        >
          <NavigationMenu.List className="nav-links-list">
            {NAV.map((item) => {
              if (item.id === "produtos") {
                return (
                  <NavigationMenu.Item key={item.id}>
                    <NavigationMenu.Trigger asChild>
                      <Link
                        href={item.href}
                        className={
                          "nav-link nav-link--menu " +
                          (isActive(pathname, item.href) ? "active" : "")
                        }
                      >
                        {item.label}
                        <CaretDown />
                      </Link>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="nav-content">
                      <div className="mega-menu">
                        {CATEGORIES.map((c) => (
                          <MegaMenuColumn key={c.id} category={c} />
                        ))}
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                );
              }
              return (
                <NavigationMenu.Item key={item.id}>
                  <NavigationMenu.Link asChild active={isActive(pathname, item.href)}>
                    <Link
                      href={item.href}
                      className={
                        "nav-link " + (isActive(pathname, item.href) ? "active" : "")
                      }
                    >
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>

          <div className="nav-viewport-wrapper nav-viewport-wrapper--header">
            <NavigationMenu.Viewport className="nav-viewport nav-viewport--header" />
          </div>
        </NavigationMenu.Root>

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
        {NAV.map((item) => {
          if (item.id === "produtos") {
            return (
              <div key={item.id} className="mobile-products">
                <button
                  type="button"
                  className={
                    "nav-link mobile-products-toggle " +
                    (isActive(pathname, item.href) ? "active" : "")
                  }
                  aria-expanded={mobileProductsOpen}
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  tabIndex={open ? 0 : -1}
                >
                  <span>{item.label}</span>
                  <CaretDown />
                </button>
                {mobileProductsOpen && (
                  <div className="mobile-products-panel">
                    <Link
                      href={item.href}
                      className="nav-link mobile-products-all"
                      tabIndex={open ? 0 : -1}
                    >
                      Ver todos os produtos
                    </Link>
                    {CATEGORIES.map((c) => (
                      <MobileCategoryItem key={c.id} category={c} open={open} />
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.id}
              href={item.href}
              className={"nav-link " + (isActive(pathname, item.href) ? "active" : "")}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          );
        })}
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

function MegaMenuColumn({ category }: { category: Category }) {
  const subs = getSubcategoriesForCategory(category);
  return (
    <div className="mega-menu-col">
      <NavigationMenu.Link asChild>
        <Link href={`/produtos/${category.slug}`} className="mega-menu-cat">
          {category.label}
        </Link>
      </NavigationMenu.Link>
      {subs.length > 0 && (
        <ul className="mega-menu-subs">
          {subs.map((s) => (
            <li key={s.id}>
              <NavigationMenu.Link asChild>
                <Link
                  href={`/produtos/${category.slug}/${s.slug}`}
                  className="mega-menu-sub"
                >
                  {s.label}
                </Link>
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileCategoryItem({
  category,
  open,
}: {
  category: Category;
  open: boolean;
}) {
  const subs = getSubcategoriesForCategory(category);
  const [expanded, setExpanded] = useState(false);

  if (subs.length === 0) {
    return (
      <Link
        href={`/produtos/${category.slug}`}
        className="nav-link mobile-products-cat"
        tabIndex={open ? 0 : -1}
      >
        {category.label}
      </Link>
    );
  }

  return (
    <div className="mobile-products-cat-wrap">
      <button
        type="button"
        className="nav-link mobile-products-cat mobile-products-cat--expandable"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        tabIndex={open ? 0 : -1}
      >
        <span>{category.label}</span>
        <CaretDown />
      </button>
      {expanded && (
        <ul className="mobile-products-subs">
          <li>
            <Link
              href={`/produtos/${category.slug}`}
              className="mobile-products-sub"
              tabIndex={open ? 0 : -1}
            >
              Ver todos
            </Link>
          </li>
          {subs.map((s) => (
            <li key={s.id}>
              <Link
                href={`/produtos/${category.slug}/${s.slug}`}
                className="mobile-products-sub"
                tabIndex={open ? 0 : -1}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

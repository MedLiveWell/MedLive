"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { NAV } from "@/lib/data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container inner">
        <Logo size={96} />
        <nav className="nav-links">
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
        <Link href="/seja-revendedor" className="btn btn-accent btn-sm">
          Seja Revendedor
          <Icon.arrow />
        </Link>
      </div>
    </header>
  );
}

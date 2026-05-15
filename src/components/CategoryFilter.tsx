"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  CATEGORIES,
  getSubcategoriesForCategory,
  PRODUCTS,
  type Category,
} from "@/lib/data";

type ActiveSelection =
  | { kind: "all" }
  | { kind: "category"; slug: string }
  | { kind: "subcategory"; categorySlug: string; subSlug: string };

function getActiveSelection(pathname: string): ActiveSelection {
  // pathname patterns:
  // /produtos               → all
  // /produtos/[cat]         → category
  // /produtos/[cat]/[sub]   → subcategory
  if (!pathname.startsWith("/produtos")) return { kind: "all" };
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 1) return { kind: "all" };
  if (segs.length === 2) return { kind: "category", slug: segs[1] };
  if (segs.length === 3)
    return { kind: "subcategory", categorySlug: segs[1], subSlug: segs[2] };
  return { kind: "all" };
}

function CaretDown() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      style={{ marginLeft: 6, flexShrink: 0 }}
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

export function CategoryFilter() {
  const pathname = usePathname();
  const active = getActiveSelection(pathname);

  const isCategoryActive = (slug: string) =>
    (active.kind === "category" && active.slug === slug) ||
    (active.kind === "subcategory" && active.categorySlug === slug);

  return (
    <NavigationMenu.Root className="filters" aria-label="Categorias de produtos">
      <NavigationMenu.List className="filters-list">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild active={active.kind === "all"}>
            <Link
              href="/produtos"
              className={
                "filter-chip " + (active.kind === "all" ? "active" : "")
              }
            >
              Todos <span className="count">{PRODUCTS.length}</span>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {CATEGORIES.map((c) => {
          const subs = getSubcategoriesForCategory(c);
          if (subs.length === 0) {
            return (
              <NavigationMenu.Item key={c.id}>
                <NavigationMenu.Link asChild active={isCategoryActive(c.slug)}>
                  <Link
                    href={`/produtos/${c.slug}`}
                    className={
                      "filter-chip " + (isCategoryActive(c.slug) ? "active" : "")
                    }
                  >
                    {c.label} <span className="count">{c.count}</span>
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          return (
            <CategoryChipWithSubs
              key={c.id}
              category={c}
              isActive={isCategoryActive(c.slug)}
              active={active}
            />
          );
        })}
      </NavigationMenu.List>

      <div className="nav-viewport-wrapper">
        <NavigationMenu.Viewport className="nav-viewport" />
      </div>
    </NavigationMenu.Root>
  );
}

function CategoryChipWithSubs({
  category,
  isActive,
  active,
}: {
  category: Category;
  isActive: boolean;
  active: ActiveSelection;
}) {
  const subs = getSubcategoriesForCategory(category);
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger asChild>
        <Link
          href={`/produtos/${category.slug}`}
          className={"filter-chip " + (isActive ? "active" : "")}
        >
          {category.label} <span className="count">{category.count}</span>
          <CaretDown />
        </Link>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="nav-content">
        <ul className="subcat-panel">
          <li>
            <NavigationMenu.Link asChild>
              <Link
                href={`/produtos/${category.slug}`}
                className={
                  "subcat-item subcat-item--all " +
                  (active.kind === "category" && active.slug === category.slug
                    ? "active"
                    : "")
                }
              >
                Ver todos
              </Link>
            </NavigationMenu.Link>
          </li>
          {subs.map((s) => {
            const isSubActive =
              active.kind === "subcategory" &&
              active.categorySlug === category.slug &&
              active.subSlug === s.slug;
            return (
              <li key={s.id}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/produtos/${category.slug}/${s.slug}`}
                    className={"subcat-item " + (isSubActive ? "active" : "")}
                  >
                    {s.label}
                  </Link>
                </NavigationMenu.Link>
              </li>
            );
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

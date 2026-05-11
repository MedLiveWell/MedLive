import Link from "next/link";
import { Fragment } from "react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <div className="breadcrumb">
        {items.map((item, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="curr">{item.label}</span>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}

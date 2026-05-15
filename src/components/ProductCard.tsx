import Image from "next/image";
import Link from "next/link";
import { CategoryGlyph } from "./CategoryGlyph";
import { Icon } from "./Icon";
import { productSlug, type Product } from "@/lib/data";

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link href={`/produto/${productSlug(p.code)}`} className="prod-card">
      <div className="visual">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} — Med Live Well`}
            className="prod-thumb"
            width={400}
            height={300}
            style={p.imageTransforms?.[0] ? { transform: p.imageTransforms[0] } : undefined}
          />
        ) : (
          <CategoryGlyph id={p.cat} />
        )}
      </div>
      <span className="code" style={{ fontWeight: 700 }}>
        {p.code}
      </span>
      <h4>{p.name}</h4>
      <div className="specs">
        {p.specs.map((s, i) => (
          <span key={i} className="spec">
            {s}
          </span>
        ))}
      </div>
      <span className="cta">
        Ver produto
        <Icon.arrow />
      </span>
    </Link>
  );
}

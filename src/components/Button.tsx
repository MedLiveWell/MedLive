import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "accent" | "ghost" | "ghost-light";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: boolean;
  className?: string;
  style?: CSSProperties;
};

type AsLink = CommonProps & { href: string; onClick?: never; type?: never };
type AsButton = CommonProps & {
  href?: undefined;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", children, icon = true, className = "", style } = props;
  const cls = [
    "btn",
    `btn-${variant}`,
    size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && <Icon.arrow />}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type={(props as AsButton).type ?? "button"}
      className={cls}
      onClick={(props as AsButton).onClick}
      style={style}
    >
      {content}
    </button>
  );
}

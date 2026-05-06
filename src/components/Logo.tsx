import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  size?: number;
};

export function Logo({ light = false, size = 38 }: LogoProps) {
  return (
    <Link href="/" className={"logo logo-img-wrap " + (light ? "is-light" : "")}>
      <Image
        src="/images/medlive-logo.png"
        alt="Med Live"
        className={"logo-img " + (light ? "is-light" : "")}
        width={size * 4}
        height={size}
        style={{ height: size, width: "auto", display: "block" }}
        priority
      />
    </Link>
  );
}

export function LogoMark({ light = false, size = 32 }: LogoProps) {
  return (
    <Image
      src="/images/medlive-logo.png"
      alt="Med Live"
      className={"logo-img " + (light ? "is-light" : "")}
      width={size * 4}
      height={size}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );
}

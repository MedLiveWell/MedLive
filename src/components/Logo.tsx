import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  size?: number;
};

const LIGHT_SRC = "/images/LogoMedLive02Branco.png";
const DEFAULT_SRC = "/images/medlive-logo.png";
// medlive-logo.png is 500×500 (1:1); LogoMedLive02Branco.png is 1080×1350 (4:5)
const LIGHT_ASPECT = 1080 / 1350;

export function Logo({ light = false, size = 38 }: LogoProps) {
  const src = light ? LIGHT_SRC : DEFAULT_SRC;
  const aspect = light ? LIGHT_ASPECT : 1;
  return (
    <Link href="/" className={"logo logo-img-wrap " + (light ? "is-light" : "")}>
      <Image
        src={src}
        alt="Logo Med Live Well"
        className={"logo-img " + (light ? "is-light" : "")}
        width={Math.round(size * aspect)}
        height={size}
        style={{ height: size, width: "auto", display: "block" }}
        priority
      />
    </Link>
  );
}

export function LogoMark({ light = false, size = 32 }: LogoProps) {
  const src = light ? LIGHT_SRC : DEFAULT_SRC;
  const aspect = light ? LIGHT_ASPECT : 1;
  return (
    <Image
      src={src}
      alt="Logo Med Live Well"
      className={"logo-img " + (light ? "is-light" : "")}
      width={Math.round(size * aspect)}
      height={size}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );
}

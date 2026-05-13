import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const sized = ({ size, width, height, ...rest }: IconProps, def: number) => ({
  width: width ?? size ?? def,
  height: height ?? size ?? def,
  ...rest,
});

export const Icon = {
  arrow: (p: IconProps = {}) => (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" {...sized(p, 16)}>
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowUp: (p: IconProps = {}) => (
    <svg viewBox="0 0 20 20" fill="none" {...sized(p, 18)}>
      <path
        d="M6 14L14 6M14 6H7M14 6V13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (p: IconProps = {}) => (
    <svg viewBox="0 0 16 16" fill="none" {...sized(p, 16)}>
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  truck: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M3 17V6a1 1 0 011-1h11v12M14 17h6v-5l-3-3h-3M6 20a2 2 0 100-4 2 2 0 000 4zM18 20a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chat: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tag: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  store: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M3 9l1-5h16l1 5M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M9 13h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cart: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M9 20a1 1 0 100 2 1 1 0 000-2zM20 20a1 1 0 100 2 1 1 0 000-2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  target: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 22)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  telescope: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 22)}>
      <path
        d="M2 14l7-2 3 7-8 2-2-7zM9 12l8-3 3 7-8 3M14 4l6 2-1 3-6-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  whatsapp: (p: IconProps & { fill?: string } = {}) => {
    const { fill, ...rest } = p;
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...sized(rest, 20)}>
        <path
          fill={fill ?? "currentColor"}
          d="M16.003 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.355.615 4.566 1.69 6.48L2.667 29.333l7.05-1.843a13.27 13.27 0 0 0 6.285 1.6h.006c7.363 0 13.333-5.97 13.333-13.334 0-3.563-1.388-6.912-3.906-9.432a13.244 13.244 0 0 0-9.432-3.657Zm0 24.41h-.005a11.08 11.08 0 0 1-5.65-1.548l-.405-.24-4.184 1.094 1.117-4.08-.263-.418a11.087 11.087 0 0 1-1.697-5.885c0-6.124 4.984-11.108 11.112-11.108 2.967 0 5.755 1.156 7.854 3.256a11.02 11.02 0 0 1 3.254 7.858c-.002 6.124-4.986 11.071-11.133 11.071Zm6.093-8.3c-.334-.167-1.975-.975-2.282-1.086-.307-.112-.53-.167-.753.168-.223.334-.864 1.086-1.06 1.309-.196.223-.39.25-.724.083-.334-.167-1.41-.52-2.687-1.657-.993-.885-1.663-1.98-1.858-2.314-.195-.334-.02-.514.147-.68.15-.15.334-.39.5-.585.168-.195.223-.334.335-.558.112-.223.056-.418-.028-.585-.083-.167-.752-1.814-1.03-2.484-.27-.651-.545-.563-.753-.574l-.641-.01c-.223 0-.585.083-.892.418-.307.334-1.17 1.143-1.17 2.79 0 1.645 1.197 3.237 1.364 3.461.167.223 2.357 3.601 5.711 5.05.797.344 1.42.55 1.904.705.8.254 1.528.218 2.103.132.641-.096 1.975-.807 2.253-1.588.278-.78.278-1.449.195-1.588-.084-.14-.307-.223-.641-.39Z"
        />
      </svg>
    );
  },
  phone: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 16)}>
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  users: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sparkle: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  instagram: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 18)}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  linkedin: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 18)}>
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  youtube: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 18)}>
      <path
        d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.25z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 15l5-3-5-3v6z" fill="currentColor" />
    </svg>
  ),
  hospital: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M3 6l2-3h14l2 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="6"
        width="18"
        height="15"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 11v6M9 14h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  homecare: (p: IconProps = {}) => (
    <svg viewBox="0 0 24 24" fill="none" {...sized(p, 20)}>
      <path
        d="M3 11l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17l-2.5-2.5a1.5 1.5 0 012.5-1.5 1.5 1.5 0 012.5 1.5L12 17z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export type IconKey = keyof typeof Icon;

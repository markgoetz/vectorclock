import type { CSSProperties } from "react";

function getColors(idle: boolean, hue: number): CSSProperties {
  return (
    idle
      ? {
          "--bg-color": `oklch(0.1 0.04 ${hue})`,
          "--fg-color": `oklch(0.62 0.04 ${hue})`,
        }
      : {
          "--bg-color": `oklch(0.3027 0.0494 ${hue})`,
          "--fg-color": `oklch(0.7537 0.1252 ${hue})`,
        }
  ) as CSSProperties;
}

export default getColors;

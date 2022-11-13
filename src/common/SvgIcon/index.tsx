import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height}: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={"imágen publicitaria"} aria-label={"imágen publicitaria"} width={width} height={height} />
);

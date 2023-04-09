import type { Component } from "solid-js";

type IconProps<P = {}> = P & {
  name: string;
  width?: number | string;
  height?: number | string;
  viewBox?: string | [number, number, number, number];
  class?: string;
  fill?: string;
  stroke?: string;
};
type IconComponent<P = {}> = Component<IconProps<P>>;

export const IconComponent: IconComponent = (props) => {
  let viewBox = undefined,
    width = props.width || 24,
    height = props.height || 24;

  if (props.viewBox) {
    viewBox =
      typeof props.viewBox === "string"
        ? props.viewBox
        : props.viewBox.join(" ");
  } else {
    viewBox = "0 0 24 24";
  }

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      class={props.class}
      fill={props.fill}
      stroke={props.stroke}
    >
      <use href={`#${props.name}`} />
    </svg>
  );
};

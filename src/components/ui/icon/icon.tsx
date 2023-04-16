import type { Component } from 'solid-js'

type IconProps = {
  name: string
  width?: number | string
  height?: number | string
  viewBox?: string | [number, number, number, number]
  class?: string
  fill?: string
  stroke?: string
}
type IconComponent = Component<IconProps>

export const IconComponent: IconComponent = props => {
  const width = () => props.width || 24
  const height = () => props.height || 24
  const viewBox = () =>
    props.viewBox
      ? typeof props.viewBox === 'string'
        ? props.viewBox
        : props.viewBox.join(' ')
      : '0 0 24 24'

  return (
    <svg
      viewBox={viewBox()}
      width={width()}
      height={height()}
      class={props.class}
      fill={props.fill}
      stroke={props.stroke}
    >
      <use href={`#${props.name}`} />
    </svg>
  )
}

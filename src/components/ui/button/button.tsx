import type { Component } from 'solid-js'
import './button.css'

type ButtonProps = {
  content: string
  onClick?: (
    event: MouseEvent & {
      currentTarget: HTMLButtonElement
      target: Element
    },
  ) => void
}
type ButtonComponent = Component<ButtonProps>

export const ButtonComponent: ButtonComponent = props => {
  return (
    <button class="main-button" onClick={event => props.onClick?.(event)}>
      {props.content}
    </button>
  )
}

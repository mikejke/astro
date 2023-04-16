import type { Component } from 'solid-js'
import './button.css'

type ButtonProps = {
  content: string
}
type ButtonComponent = Component<ButtonProps>

export const ButtonComponent: ButtonComponent = props => {
  return <button class="main-button"> {props.content}</button>
}

import type { Component } from "solid-js";
import "./button.css";

type ButtonProps<P = {}> = P & {
  content: string;
};
type ButtonComponent<P = {}> = Component<ButtonProps<P>>;

export const ButtonComponent: ButtonComponent = (props) => {
  return <button class="main-button"> {props.content}</button>;
};

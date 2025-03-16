import { JSX } from "react";

export interface ThemeAttributes {
  icon: JSX.Element
}

/**
 * Used to define a single item in a selection list
 */
export interface SelectionItem {
  label: string,
  key: string
}

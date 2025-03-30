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

export interface LogFilterCriteria {
  environmentName: string | undefined
  applicationName: string | undefined
  hostName: string | undefined
  traceId: string | undefined
  spanId: string | undefined
  offset: number | undefined
  limit: number | undefined
}

export interface ReadableLog {
  id: number
  host?: string
  timestamp: string,
  level: LogLevel,
  levelText?: string,
  message: string,
  scope: string,
}

export enum LogLevel {
  TRACE = "TRACE",
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  FATAL = "FATAL"
}

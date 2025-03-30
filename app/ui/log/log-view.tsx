'use client'
import { LogLevel, ReadableLog } from "@/app/lib/types";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { useCallback } from "react";
import SingleLogView from "./single-log-view";

const columns = ["logs"];
const rows: ReadableLog[] = [
  {
    id: 1,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.INFO,
    levelText: "Informational",
    message: "This is an info message.",
    host: "localhost"
  },
  {
    id: 2,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.ERROR,
    message: "Retrying validate operation due to error: HTTP 500 : An internal error has occurred.",
    host: "localhost"
  },
  {
    id: 3,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.WARN,
    message: "This is a warning message.",
    host: "localhost"
  },
  {
    id: 4,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.DEBUG,
    message: "This is a debug message.",
    host: "localhost"
  },
  {
    id: 5,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.TRACE,
    message: "This is a trace message.",
    host: "localhost"
  },
  {
    id: 6,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.INFO,
    message: "This is an info message.",
    host: "localhost"
  },
  {
    id: 7,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.ERROR,
    message: "This is an error message.",
    host: "localhost"
  },
  {
    id: 8,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.WARN,
    message: "This is a warning message.",
    host: "localhost"
  },
  {
    id: 9,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.DEBUG,
    message: "Retrying validate operation due to error: HTTP 500 : An internal error has occurred. Retrying validate operation due to error: HTTP 500 : An internal error has occurred.",
    host: "localhost"
  },
  {
    id: 10,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: LogLevel.TRACE,
    message: "This is a debug message.",
    host: "localhost"
  }
]

export default function LogView() {

  const readableLogRenderer = useCallback((readableLog: ReadableLog) => {
    return (
      <SingleLogView readableLog={readableLog}></SingleLogView>
    )
  }, []);

  return (
    <div>
      <Table
        removeWrapper
        hideHeader
        selectionMode="single"
        aria-label="logs">
        <TableHeader>
          {columns.map((column) =>
            <TableColumn key={column}>{column}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} emptyContent={"No logs to display."}>
          {(readableLog) => (
            <TableRow key={readableLog.id}>
              {() => <TableCell
                className="p-1">{readableLogRenderer(readableLog)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

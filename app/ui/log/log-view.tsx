'use client'
import { ReadableLog } from "@/app/lib/types";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";

const columns = ["host", "timestamp", "level", "scope", "message"];
const rows: ReadableLog[] = [
  {
    id: 1,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "INFO",
    message: "This is an info message.",
    host: "localhost"
  },
  {
    id: 2,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "ERROR",
    message: "This is an error message.",
    host: "localhost"
  },
  {
    id: 3,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "WARN",
    message: "This is a warning message.",
    host: "localhost"
  },
  {
    id: 4,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "DEBUG",
    message: "This is a debug message.",
    host: "localhost"
  },
  {
    id: 5,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "TRACE",
    message: "This is a trace message.",
    host: "localhost"
  },
  {
    id: 6,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "INFO",
    message: "This is an info message.",
    host: "localhost"
  },
  {
    id: 7,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "ERROR",
    message: "This is an error message.",
    host: "localhost"
  },
  {
    id: 8,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "WARN",
    message: "This is a warning message.",
    host: "localhost"
  },
  {
    id: 9,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "DEBUG",
    message: "This is a debug message.",
    host: "localhost"
  },
  {
    id: 10,
    scope: "org.springframework.web.servlet.DispatcherServlet",
    timestamp: "2021-01-01T00:00:00Z",
    level: "TRACE",
    message: "This is a trace message.",
    host: "localhost"
  }
]

export default function LogView() {
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
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

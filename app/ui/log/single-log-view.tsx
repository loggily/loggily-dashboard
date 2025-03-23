import { ReadableLog } from "@/app/lib/types";

export default function SingleLogView({ readableLog }: Readonly<{ readableLog: ReadableLog }>) {

  return (
    <div className="flex flex-row gap-2 text-xs">
      <div className="shrink-0">
        {readableLog.host}
      </div>
      <div className="shrink-0">
        {readableLog.timestamp}
      </div>
      <div className="shrink-0">
        {readableLog.level}
      </div>
      <div className="shrink-0">
        {readableLog.scope}
      </div>
      <div className="grow">
        {readableLog.message}
      </div>
    </div>
  )
}

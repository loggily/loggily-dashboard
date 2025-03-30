import { LogLevel, ReadableLog } from "@/app/lib/types";

function findLogLevelColor(logLevel: LogLevel): string {
  if (logLevel === LogLevel.ERROR || logLevel === LogLevel.FATAL) {
    return "text-red-400";
  }

  if (logLevel === LogLevel.WARN) {
    return "text-yellow-600";
  }

  if (logLevel === LogLevel.INFO) {
    return "text-cyan-500";
  }
  if (logLevel === LogLevel.TRACE) {
    return "text-gray-400";
  }
  if (logLevel === LogLevel.DEBUG) {
    return "text-fuchsia-500";
  }
  return "";
}

export default function SingleLogView({ readableLog }: Readonly<{ readableLog: ReadableLog }>) {

  const logLevel = readableLog.level;
  const logLevelText = readableLog.levelText ? `${logLevel} (${readableLog.levelText})` : logLevel;
  const logLevelColor = findLogLevelColor(logLevel);

  return (
    <div className={`flex flex-row gap-2 text-xs`}>
      <div className="shrink-0">
        {readableLog.host}
      </div>
      <div className="shrink-0">
        {readableLog.timestamp}
      </div>
      <div className={`shrink-0 ${logLevelColor}`}>
        {logLevelText}
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

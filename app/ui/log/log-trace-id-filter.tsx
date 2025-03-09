import { Input } from "@heroui/input";

export default function LogTraceIdFilter({ onTraceIdChange }: Readonly<{ onTraceIdChange: (traceId: string) => void }>) {

  return (
    <Input
      label="Trace id"
      variant="bordered"
      size="sm"
      radius="sm"
      onValueChange={onTraceIdChange}
    ></Input>
  );
}

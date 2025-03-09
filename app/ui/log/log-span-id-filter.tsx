import { Input } from "@heroui/input";

export default function LogSpanIdFilter({ onSpanIdChange }: Readonly<{ onSpanIdChange: (spanId: string) => void }>) {
  return (
    <div>
      <Input
        label="Span id"
        variant="bordered"
        size="sm"
        radius="sm"
        onValueChange={onSpanIdChange}
      ></Input>
    </div>
  );
}

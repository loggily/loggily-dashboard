"use client"

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key } from "react";

const environments = [
  { label: "Production", key: "production" },
  { label: "Staging", key: "staging" }
];

export default function LogEnvironmentFilter({ onEnvironmentChange }: Readonly<{ onEnvironmentChange: (environment: { label: string, key: Key } | undefined) => void }>) {

  const onSelectionChange = (selected: Key | null) => {
    const selectedEnvironment = environments.find((env) => env.key === selected)
    onEnvironmentChange(selectedEnvironment)
  }

  return (
    <div>
      <Autocomplete
        label="Search an environment"
        defaultItems={environments}
        size="sm"
        variant="bordered"
        onSelectionChange={onSelectionChange}
      >
        {(animal) => <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}

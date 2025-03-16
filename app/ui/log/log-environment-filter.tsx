"use client"

import { searchEnvironmentsByName } from "@/app/lib/log-api";
import { SelectionItem } from "@/app/lib/types";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useState } from "react";

export default function LogEnvironmentFilter({ onEnvironmentChange }: Readonly<{ onEnvironmentChange: (environment: SelectionItem | undefined) => void }>) {
  const [environments, setEnvironments] = useState<SelectionItem[]>([]);

  const onInputChange = (value: string) => {
    if (value === "") {
      setEnvironments([]);
    } else {
      searchEnvironmentsByName(value)
        .then((payload) => setEnvironments(payload))
    }
  }

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
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
      >
        {(animal) => <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}

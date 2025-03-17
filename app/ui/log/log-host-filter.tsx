import { findHostsByEnvironmentAndApplication } from "@/app/lib/log-api";
import { SelectionItem } from "@/app/lib/types";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useEffect, useState } from "react";

export default function LogHostFilter({ environmentName, applicationName, onHostChange }: Readonly<{ environmentName: { label: string, key: Key } | undefined, applicationName: { label: string, key: Key } | undefined, onHostChange: (host: { label: string, key: Key } | undefined) => void }>) {

  const [hosts, setHosts] = useState<SelectionItem[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (environmentName && applicationName) {
      findHostsByEnvironmentAndApplication(environmentName.label, applicationName.label, signal)
        .then((hosts) => setHosts(hosts));
    } else {
      setHosts([]);
    }

    return () => {
      controller.abort();
    }
  }, [environmentName, applicationName]);

  const onSelectionChange = (selected: Key | null) => {
    const selectedHost = hosts.find((host) => host.key === selected)
    onHostChange(selectedHost)
  }

  return (
    <div>
      <div>
        <Autocomplete
          label="Select a host"
          defaultItems={hosts}
          size='sm'
          variant='bordered'
          isDisabled={hosts.length === 0}
          description={hosts.length === 0 ? 'Choose an application' : undefined}
          onSelectionChange={onSelectionChange}
        >
          {(host) => <AutocompleteItem key={host.key}>{host.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </div>
  );
}

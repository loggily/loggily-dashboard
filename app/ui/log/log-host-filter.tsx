import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key } from "react";

interface Host {
  label: string;
  key: string;
}

const app1Hosts = new Map<string, Host[]>();
app1Hosts.set('app1', [{ label: "host1", key: "host1" }]);

const app2Hosts = new Map<string, Host[]>();
app2Hosts.set('app2', [{ label: "host2", key: "host2" }]);

const hosts = new Map<string, Map<string, Host[]>>();
hosts.set('production', app1Hosts);
hosts.set('staging', app2Hosts);

export default function LogHostFilter({ environmentName, applicationName, onHostChange }: Readonly<{ environmentName: { label: string, key: Key } | undefined, applicationName: { label: string, key: Key } | undefined, onHostChange: (host: { label: string, key: Key } | undefined) => void }>) {

  let allHosts: Host[] = [];
  if (environmentName && applicationName) {
    allHosts = hosts.get(environmentName.key as string)?.get(applicationName.key as string) || [];
  }

  const onSelectionChange = (selected: Key | null) => {
    const selectedHost = allHosts.find((host) => host.key === selected)
    onHostChange(selectedHost)
  }

  return (
    <div>
      <div>
        <Autocomplete
          label="Select a host"
          defaultItems={allHosts}
          size='sm'
          variant='bordered'
          isDisabled={allHosts.length === 0}
          description={allHosts.length === 0 ? 'Choose an application' : undefined}
          onSelectionChange={onSelectionChange}
        >
          {(host) => <AutocompleteItem key={host.key}>{host.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </div>
  );
}

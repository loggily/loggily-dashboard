"use client";

import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import React, { Key } from 'react';

interface Application {
  label: string;
  key: string;
}

const applications = new Map<string, Application[]>();
applications.set('production', [{ label: "app1", key: "app1" }]);
applications.set('staging', [{ label: "app2", key: "app2" }]);

// interface LogApplicationFilterProps {
//   environmentName: { label: string, key: Key } | undefined;
// }

export default function LogApplicationFilter({ environmentName, onApplicationChange }: Readonly<{ environmentName: { label: string, key: Key } | undefined, onApplicationChange: (application: { label: string, key: Key } | undefined) => void }>) {

  let allApplications: Application[] = [];
  if (environmentName) {
    allApplications = applications.get(environmentName.key as string) || [];
  }

  const onSelectionChange = (selected: Key | null) => {
    const selectedApplication = allApplications.find((app) => app.key === selected)
    onApplicationChange(selectedApplication)
  }

  return (
    <div>
      <Autocomplete
        label="Select an application"
        defaultItems={allApplications}
        size='sm'
        variant='bordered'
        isDisabled={allApplications.length === 0}
        description={allApplications.length === 0 ? 'Choose an environment' : undefined}
        onSelectionChange={onSelectionChange}
      >
        {(app) => <AutocompleteItem key={app.key}>{app.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
};

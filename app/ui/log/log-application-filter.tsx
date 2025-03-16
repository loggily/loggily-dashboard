"use client";

import { findApplicationsByEnvironment } from '@/app/lib/log-api';
import { SelectionItem } from '@/app/lib/types';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import React, { Key, useState } from 'react';

export default function LogApplicationFilter({ environmentName, onApplicationChange }: Readonly<{ environmentName: { label: string, key: Key } | undefined, onApplicationChange: (application: { label: string, key: Key } | undefined) => void }>) {

  const [applications, setApplications] = useState<SelectionItem[]>([]);

  if (environmentName) {
    findApplicationsByEnvironment(environmentName.label)
      .then((applications) => setApplications(applications))
  }

  if (environmentName === undefined && applications.length > 0) {
    // Clear applications when environment is not selected
    setApplications([])
  }

  const onSelectionChange = (selected: Key | null) => {
    const selectedApplication = applications.find((app) => app.key === selected)
    onApplicationChange(selectedApplication);
  }

  return (
    <div>
      <Autocomplete
        label="Select an application"
        defaultItems={applications}
        size='sm'
        variant='bordered'
        isDisabled={applications.length === 0}
        description={applications.length === 0 ? 'Choose an environment' : undefined}
        onSelectionChange={onSelectionChange}
      >
        {(app) => <AutocompleteItem key={app.key}>{app.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
};

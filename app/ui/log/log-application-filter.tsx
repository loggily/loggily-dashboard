"use client";

import { findApplicationsByEnvironment } from '@/app/lib/log-api';
import { SelectionItem } from '@/app/lib/types';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import React, { Key, useEffect, useState } from 'react';

export default function LogApplicationFilter({ environmentName, onApplicationChange }: Readonly<{ environmentName: { label: string, key: Key } | undefined, onApplicationChange: (application: { label: string, key: Key } | undefined) => void }>) {

  const [applications, setApplications] = useState<SelectionItem[]>([]);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    if (environmentName) {
      findApplicationsByEnvironment(environmentName.label, signal)
        .then((applications) => setApplications(applications));
    } else {
      setApplications([]);
    }

    return () => {
      controller.abort();
    }
  }, [environmentName]);

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

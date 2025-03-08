"use client";

import LogApplicationFilter from "./log-application-filter";
import LogEnvironmentFilter from "./log-environment-filter";
import { Key, useState } from "react";
import LogHostFilter from "./log-host-filter";

export default function LogFilter() {

  const [selectedEnvironment, setSelectedEnvironment] = useState<{ label: string, key: Key } | undefined>(undefined);
  const [selectedApplication, setSelectedApplication] = useState<{ label: string, key: Key } | undefined>(undefined);
  const [selectedHost, setSelectedHost] = useState<{ label: string, key: Key } | undefined>(undefined);

  const onEnvironmentChange = (selectedEnvironment: { label: string, key: Key } | undefined) => {
    setSelectedEnvironment(selectedEnvironment);
  }

  const onApplicationChange = (selectedApplication: { label: string, key: Key } | undefined) => {
    setSelectedApplication(selectedApplication);
  }

  const onHostChange = (selectedHost: { label: string, key: Key } | undefined) => {
    setSelectedHost(selectedHost);
  }

  return (
    <div className="flex flex-row m-2 gap-2">
      <div>
        <LogEnvironmentFilter onEnvironmentChange={onEnvironmentChange}></LogEnvironmentFilter>
      </div>
      <div>
        <LogApplicationFilter environmentName={selectedEnvironment} onApplicationChange={onApplicationChange}></LogApplicationFilter>
      </div>
      <div>
        <LogHostFilter environmentName={selectedEnvironment} applicationName={selectedApplication} onHostChange={onHostChange}></LogHostFilter>
      </div>
      <p>{`${selectedEnvironment?.label} ${selectedApplication?.label} ${selectedHost?.label}`}</p>
    </div>
  );
}

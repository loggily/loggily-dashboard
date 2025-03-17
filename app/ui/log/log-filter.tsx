"use client";

import LogApplicationFilter from "./log-application-filter";
import LogEnvironmentFilter from "./log-environment-filter";
import { Key, useState } from "react";
import LogHostFilter from "./log-host-filter";
import LogTraceIdFilter from "./log-trace-id-filter";
import LogSpanIdFilter from "./log-span-id-filter";
import { SelectionItem } from "@/app/lib/types";

export default function LogFilter() {

  const [selectedEnvironment, setSelectedEnvironment] = useState<SelectionItem | undefined>(undefined);
  const [selectedApplication, setSelectedApplication] = useState<{ label: string, key: Key } | undefined>(undefined);
  const [selectedHost, setSelectedHost] = useState<{ label: string, key: Key } | undefined>(undefined);

  const [selectedTraceId, setSelectedTraceId] = useState<string | undefined>(undefined);
  const [selectedSpanId, setSelectedSpanId] = useState<string | undefined>(undefined);

  const onEnvironmentChange = (selectedEnvironment: SelectionItem | undefined) => {
    setSelectedEnvironment(selectedEnvironment);
  }

  const onApplicationChange = (selectedApplication: { label: string, key: Key } | undefined) => {
    setSelectedApplication(selectedApplication);
  }

  const onHostChange = (selectedHost: { label: string, key: Key } | undefined) => {
    setSelectedHost(selectedHost);
  }

  const onTraceIdChange = (traceId: string) => {
    setSelectedTraceId(traceId);
  }

  const onSpanIdChange = (spanId: string) => {
    setSelectedSpanId(spanId);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row m-2 gap-2 justify-center">
        <div>
          <LogEnvironmentFilter onEnvironmentChange={onEnvironmentChange}></LogEnvironmentFilter>
        </div>
        <div>
          <LogApplicationFilter environmentName={selectedEnvironment} onApplicationChange={onApplicationChange}></LogApplicationFilter>
        </div>
        <div>
          <LogHostFilter environmentName={selectedEnvironment} applicationName={selectedApplication} onHostChange={onHostChange}></LogHostFilter>
        </div>
      </div>
      <div className="flex flex-row m-2 gap-2 justify-center">
        <div className="w-1/3">
          <LogTraceIdFilter onTraceIdChange={onTraceIdChange}></LogTraceIdFilter>
        </div>
        <div className="w-1/3">
          <LogSpanIdFilter onSpanIdChange={onSpanIdChange}></LogSpanIdFilter>
        </div>
      </div>
    </div>
  );
}

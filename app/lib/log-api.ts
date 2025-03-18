import { LogFilterCriteria, SelectionItem } from "./types";

const loggilyBaseUrl = process.env.NEXT_PUBLIC_LOGGILY_API_BASE_URL;
const loggilyEnvironmentUrl = `${loggilyBaseUrl}/environments`;
const loggilyApplicationUrl = `${loggilyBaseUrl}/applications`;
const loggilyHostUrl = `${loggilyBaseUrl}/hosts`;
const loggilyLogUrl = `${loggilyBaseUrl}/logs`;
const asSelectionItems = (values: string[]): SelectionItem[] => values.map((value: string) => ({ label: value, key: value }));

export function searchEnvironmentsByName(environmentNameLike: string) {
  return fetch(`${loggilyEnvironmentUrl}/name?contains=${environmentNameLike}`)
  .then((result) => result.json())
  .then(payload => asSelectionItems(payload))
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

export function findApplicationsByEnvironment(environment: string, signal: AbortSignal) {
  return fetch(`${loggilyApplicationUrl}/name?environmentName=${environment}`, { signal })
  .then((result) => result.json())
  .then(payload => asSelectionItems(payload))
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

export function findHostsByEnvironmentAndApplication(environment: string, application: string, signal: AbortSignal) {
  return fetch(`${loggilyHostUrl}/name?environmentName=${environment}&applicationName=${application}`, { signal })
  .then((result) => result.json())
  .then(payload => asSelectionItems(payload))
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

export function loadLogs(criteria: LogFilterCriteria) {

  const params = new URLSearchParams();

  Object.entries(criteria).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, value.toString());
    }
  });

  const queryString = params.toString();
  console.log(queryString);

  return fetch(`${loggilyLogUrl}?${queryString}`)
  .then((result) => result.json())
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

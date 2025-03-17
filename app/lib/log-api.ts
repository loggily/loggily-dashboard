import { SelectionItem } from "./types";

const loggilyBaseUrl = process.env.NEXT_PUBLIC_LOGGILY_API_BASE_URL;
const loggilyEnvironmentUrl = `${loggilyBaseUrl}/environments`;
const loggilyApplicationUrl = `${loggilyBaseUrl}/applications`;
const loggilyHostUrl = `${loggilyBaseUrl}/hosts`;
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

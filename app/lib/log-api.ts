import { SelectionItem } from "./types";

const loggilyBaseUrl = process.env.NEXT_PUBLIC_LOGGILY_API_BASE_URL;
const loggilyEnvironmentUrl = `${loggilyBaseUrl}/environments`;
const loggilyApplicationUrl = `${loggilyBaseUrl}/applications`;
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

export function findApplicationsByEnvironment(environment: string) {
  return fetch(`${loggilyApplicationUrl}/name?environmentName=${environment}`)
  .then((result) => result.json())
  .then(payload => asSelectionItems(payload))
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

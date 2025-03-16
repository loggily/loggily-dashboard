import { SelectionItem } from "./types";

const loggilyBaseUrl = process.env.NEXT_PUBLIC_LOGGILY_API_BASE_URL;
const loggilyEnvironmentUrl = `${loggilyBaseUrl}/environments`;

export function searchEnvironmentsByName(environmentNameLike: string) {
  return fetch(`${loggilyEnvironmentUrl}/name?contains=${environmentNameLike}`)
  .then((result) => result.json())
  .then((payload: string[]): SelectionItem[] => payload.map((environment: string) => ({ label: environment, key: environment })))
  .catch((error) => {
    console.error(error);
    return Promise.resolve([]);
  });
}

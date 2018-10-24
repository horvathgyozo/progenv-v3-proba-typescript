export function createResponse<T>(responseObject: T): Promise<T> {
  const json = JSON.stringify(responseObject);
  const response: T = JSON.parse(json);
  return Promise.resolve(response);
}

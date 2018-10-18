interface IEvaluateResponse {
  output: string;
}

function createResponse<T>(responseObject: T): Promise<T> {
  const json = JSON.stringify(responseObject);
  const response: T = JSON.parse(json);
  return Promise.resolve(response);
}

export class ExampleMockApi {

    public evaluate = (input: string): Promise<IEvaluateResponse> => 
      createResponse<IEvaluateResponse>(
        { 'output': `Evaluated ${input}` }
      );

}

export const exampleApi = new ExampleMockApi();

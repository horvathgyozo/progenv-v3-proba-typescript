import { createResponse } from 'src/utils/create-response';
import { IEvaluateResponse, IExampleApi } from './example-api.interfaces';

export class ExampleMockApi implements IExampleApi {

  public evaluate = (input: string): Promise<IEvaluateResponse> =>
    createResponse<IEvaluateResponse>(
      { output: `Evaluated ${input}` }
    )

}

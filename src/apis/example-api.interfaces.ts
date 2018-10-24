export interface IEvaluateResponse {
    output: string;
}

export interface IExampleApi {
    evaluate(input: string): Promise<IEvaluateResponse>;
}

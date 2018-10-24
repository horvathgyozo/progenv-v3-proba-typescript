import { computed, observable } from 'mobx';
import { IExampleApi } from 'src/apis/example-api.interfaces';

export class ExampleStore {

  @observable private _input: string = 'something';
  @observable private _output: string = '';
  private exampleApi: IExampleApi;

  constructor(exampleApi: IExampleApi) {
    this.exampleApi = exampleApi;
  }

  @computed get fakeOutput(): string {
    return `fake output is a simply the input: ${this._input}`;
  }

  @computed get input(): string {
    return this._input;
  }
  
  set input(value: string) {
    this._input = value;
  }

  @computed get output(): string {
    return this._output;
  }
  
  set output(value: string) {
    this._output = value;
  }
  
  public evaluate() {
    // tslint:disable-next-line:no-console
    console.log(this);
    this.exampleApi.evaluate(this.input)
      .then(response => response.output)
      .then(output => this.output = output)
  }

}
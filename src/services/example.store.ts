import { computed, observable } from 'mobx';
import { exampleApi } from 'src/apis/example.api';

export class ExampleStore {

  @observable private _input: string = '';
  @observable private _output: string = '';

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
    exampleApi.evaluate(this.input)
      .then(response => response.output)
      .then(output => this.output = output)
  }

}
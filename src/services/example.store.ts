import { computed, observable } from 'mobx';

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
  
}
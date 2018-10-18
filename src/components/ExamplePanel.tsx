import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ExampleStore } from 'src/services/example.store';
import { myInject } from 'src/utils/inject';

interface IProps { 
  title: string; 
}

@myInject('exampleStore')
@observer
export class ExamplePanel extends React.Component<IProps & {exampleStore?: ExampleStore}> {

  @observable private showInput: boolean = true;

  public render() {
    return (
      <header>
        <h1>Example panel ({this.props.title})</h1>
        <p>
          <input type="text" onInput={this.handleInput} />
          <button onClick={this.handleEvaluateClick}>Evaluate</button>
        </p>
        <p onClick={this.handleInputClick}>
          Input: 
          <span hidden={!this.showInput}>{this.props.exampleStore!.input}</span>
        </p>
        <p>FakeOutput: {this.props.exampleStore!.fakeOutput}</p>
        <p>Output: {this.props.exampleStore!.output}</p>
      </header>
    );
  }

  @action 
  private handleInput = (e: React.FormEvent) => this.props.exampleStore!.input = (e.target as HTMLInputElement).value;

  // @action 
  // public handleInput = (e: any) => this.text = e.target.value;

  @action
  private handleInputClick = () => this.showInput = !this.showInput;

  @action
  private handleEvaluateClick = () => this.props.exampleStore!.evaluate();
}
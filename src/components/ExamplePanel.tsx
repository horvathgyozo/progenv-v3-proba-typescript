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
        </p>
        <p onClick={this.handleClick}>
          Input: 
          <span hidden={!this.showInput}>{this.props.exampleStore!.input}</span>
        </p>
        <p>Output: {this.props.exampleStore!.fakeOutput}</p>
      </header>
    );
  }

  @action 
  private handleInput = (e: React.FormEvent) => this.props.exampleStore!.input = (e.target as HTMLInputElement).value;
  
  @action
  private handleClick = () => this.showInput = !this.showInput;

  // @action 
  // public handleInput = (e: any) => this.text = e.target.value;
}
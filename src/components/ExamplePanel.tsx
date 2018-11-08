import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ExampleStore } from '../services/example.store';
import { myInject } from '../utils/inject';

interface IProps {
  title: string;
}

interface IStore {
  exampleStore: ExampleStore;
}


@myInject('exampleStore')
@observer
export class ExamplePanel extends React.Component<IProps & Partial<IStore>> {

  public static defaultProps = {
    title: 'alma'
  }

  @observable private showInput: boolean = true;

  public render() {
    const {title, exampleStore} = this.props as IProps & IStore;
    const {showInput} = this;

    return (
      <div>
        <h1>Example panel ({title})</h1>
        <p>
          <input type="text" onChange={this.handleInput} value={exampleStore.input} />
          <button onClick={this.handleEvaluateClick}>Evaluate</button>
        </p>
        <p>
          <input type="checkbox" onChange={this.handleInputClick} checked={showInput} />
          Show input (state variable)
          <br/>
          <span hidden={!this.showInput}>Input (store variable): {exampleStore.input}</span>
        </p>
        <p>FakeOutput (store computed): {exampleStore.fakeOutput}</p>
        <p>Output (store variable): {exampleStore.output}</p>
      </div>
    );
  }

  @action
  private handleInputClick = () => this.showInput = !this.showInput;

  private handleEvaluateClick = () => this.props.exampleStore!.evaluate();

  private handleInput = (e: React.FormEvent) => this.props.exampleStore!.input = (e.target as HTMLInputElement).value;
}

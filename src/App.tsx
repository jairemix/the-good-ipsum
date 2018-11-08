import * as React from 'react';
import 'bootstrap-css';
import './App.css';

// import logo from './logo.svg';
import { map } from 'lodash/fp';
import { ipsumContentArray, IIpsumContent, IIpsumTag } from './ipsum/ipsum-content';
import { generate } from './ipsum/ipsum-generate';

class IpsumTagButton extends React.PureComponent {

  onClick = () => {
    this.props.onClick(this.props.tag);
  }

  props: {
    tag: IIpsumTag;
    onClick: (tag: IIpsumTag) => void;
    isSelected: boolean;
  };

  render() {
    let className = 'btn btn-lg btn-block';
    if (this.props.isSelected) {
      className += ' btn-success';
    } else {
      className += ' btn-outline-secondary';
    }
    return (
      <button className={className} onClick={this.onClick}>
        {this.props.tag.text}
      </button>
    )
  }
}

class App extends React.PureComponent {

  state: {
    currentTagID?: string,
    generatedText?: string
  };

  constructor(props: {}) {
    super(props);
    const tag = ipsumContentArray[0].tag;
    this.state = {
      generatedText: generate(tag.id),
      currentTagID: tag.id,
    };
  }

  changeTag = (tag: IIpsumTag) => {
    this.setState({
      ...this.state,
      generatedText: generate(tag.id),
      currentTagID: tag.id,
    });
  }

  private _renderTagButtons(): JSX.Element[] {
    return map((ipsumContent: IIpsumContent) => {
      const tag = ipsumContent.tag;
      return <IpsumTagButton tag={tag} key={tag.id} onClick={this.changeTag} isSelected={tag.id === this.state.currentTagID} />;
    })(ipsumContentArray);
  }

  // <img src={logo} className="App-logo" alt="logo" />

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <p>Welcome!</p>
            <p>Everything is Fine.</p>
          </h1>
        </header>
        <div className="px-4 my-3">
          {this.state.generatedText && <div className="f-generated-text">{this.state.generatedText}</div>}
          <div className="my-4">
            {this._renderTagButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" initValue={10} />
        <Counter caption="Third" initValue={20} />
      </div>
    );
  }
}

export default ControlPanel;

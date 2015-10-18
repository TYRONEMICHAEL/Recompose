import test from 'tape';
import sinon from 'sinon';
import jsdom from 'jsdom';
import dom from '../utils/dom';
import React from 'react/addons';
import counterFactory from '../../src/components/counter';

const { TestUtils } = React.addons;

function setup() {
  let { window } = dom(jsdom);

  const actions = {
    increment: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    incrementAsync: sinon.spy(),
    decrement: sinon.spy()
  };

  const Counter = counterFactory(React);
  const container = window.document.createElement('div');

  React.render(<Counter counter={1} {...actions} />, container);

  return {
    actions: actions,
    container: container
  };
};

test('<Counter />', (t) => {


  t.test('<Counter counter={1} />', (t) => {
    const { actions, container } = setup();
    let btn = container.getElementsByClassName('counter__increment');
    React.addons.TestUtils.Simulate.click(btn[0]);

    t.equal(actions.increment.calledOnce, true);
    t.end();
  });

  t.end();
});

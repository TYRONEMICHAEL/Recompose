import test from 'tape';
import sinon from 'sinon';
import jsdom from 'jsdom';
import dom from '../utils/dom';
import React from 'react';
import counterFactory from '../../src/components/counter';

let document;
let window;

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
  const component = React.render(<Counter counter={1} {...actions} />, container);

  return {
    component: component,
    actions: actions,
    container: container
  };
};

test('<Counter />', (t) => {
  const { component, actions, container } = setup();
  console.log(container.innerHTML);

  // t.test('<Counter counter={1} />', (t) => {
  //   const { component } = setup();
  //
  //   const counterValue = TestUtils.findRenderedDOMComponentWithClass(
  //       component,
  //       'counter__value'
  //     ).getDOMNode();
  //
  //
  //   t.equal(counterValue.textContent, '1');
  //   t.end();
  // });

  // t.test('<Counter counter={1} />', (t) => {
  //   const { $, actions } = setup();
  //   const btn = $('.counter__increment')[0];
  //   TestUtils.Simulate.click(btn);
  //   t.equal(actions.increment.calledOnce, true);
  //   t.end();
  // });

  t.end();
});

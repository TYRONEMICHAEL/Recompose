import test from 'tape';
import sinon from 'sinon';
import jsdom from 'jsdom';
import React from 'react';
import counterFactory from '../../src/components/counter';

let document;
let window;

function setup() {

  global.document = document = jsdom.jsdom();
  global.window = window = global.document.defaultView;
  global.navigator = global.window.navigator;

  const actions = {
    increment: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    incrementAsync: sinon.spy(),
    decrement: sinon.spy()
  };

  const Counter = counterFactory(React);
  const container = window.document.createElement('div');
  const component = React.render(<Counter counter={1} {...actions} />, container);

  window.document.body.appendChild(container);

  return {
    component: component,
    actions: actions
  };
};

test('<Counter />', (t) => {
  const { component, actions } = setup();


  console.log(global.document.documentElement.outerHTML);

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

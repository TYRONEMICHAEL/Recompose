import test from 'tape';
import sinon from 'sinon';
import createDocument from '../utils/createDocument';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import counterFactory from '../../src/components/counter';

function setup() {
  const document = createDocument();
  const Counter = counterFactory(React);
  const container = document.createElement('div');

  const actions = {
    increment: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    incrementAsync: sinon.spy(),
    decrement: sinon.spy()
  };

  ReactDOM.render(<Counter counter={1} {...actions} />, container);

  return {
    actions: actions,
    container: container
  };
};

test('Counter component', (t) => {
  t.test('should display count', (t) => {
    const { container } = setup();
    const count = container.getElementsByClassName('counter__value')[0];
    t.equal(count.innerHTML, '1');
    t.end();
  });

  t.test('increment button should call increment action', (t) => {
    const { actions, container } = setup();
    const btn = container.getElementsByClassName('counter__increment')[0];
    ReactTestUtils.Simulate.click(btn);
    t.equal(actions.increment.calledOnce, true, );
    t.end();
  });

  t.test('decrement button should call decrement action', (t) => {
    const { actions, container } = setup();
    const btn = container.getElementsByClassName('counter__decrement')[0];
    ReactTestUtils.Simulate.click(btn);
    t.equal(actions.decrement.calledOnce, true, );
    t.end();
  });

  t.test('odd button should call incrementIfOdd action', (t) => {
    const { actions, container } = setup();
    const btn = container.getElementsByClassName('counter__odd')[0];
    ReactTestUtils.Simulate.click(btn);
    t.equal(actions.incrementIfOdd.calledOnce, true, );
    t.end();
  });

  t.end();
});

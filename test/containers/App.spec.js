import test from 'tape';
import sinon from 'sinon';
import createDocument from '../utils/createDocument';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore';
import appFactory from '../../src/containers/app';
import counterFactory from '../../src/components/counter';
import * as actions from '../../src/actions/counter';

function setup(initialState) {
  const document = createDocument();
  const Counter = counterFactory(React);
  const App = appFactory(Counter, actions);
  const store = configureStore(initialState);

  const container = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    container
  );

  return {
    container: container
  };
}

test('Counter component', (t) => {
  t.test('should display count', (t) => {
    const { container } = setup();
    const count = container.getElementsByClassName('counter__value')[0];
    t.equal(count.innerHTML, '0');
    t.end();
  });

  t.test('increment button should increment count', (t) => {
    const { actions, container } = setup();
    const btn = container.getElementsByClassName('counter__increment')[0];
    const count = container.getElementsByClassName('counter__value')[0];
    ReactTestUtils.Simulate.click(btn);
    ReactTestUtils.Simulate.click(btn);
    t.equal(count.innerHTML, '2');
    t.end();
  });

  t.test('decrement button should decrement count', (t) => {
    const { actions, container } = setup();
    const btn = container.getElementsByClassName('counter__decrement')[0];
    const count = container.getElementsByClassName('counter__value')[0];
    ReactTestUtils.Simulate.click(btn);
    ReactTestUtils.Simulate.click(btn);
    t.equal(count.innerHTML, '-2');
    t.end();
  });

  t.test('increment button should call increment action', (t) => {
    const { actions, container } = setup();
    const odd = container.getElementsByClassName('counter__odd')[0];
    const increment = container.getElementsByClassName('counter__increment')[0];
    const count = container.getElementsByClassName('counter__value')[0];
    ReactTestUtils.Simulate.click(increment);
    ReactTestUtils.Simulate.click(odd);
    t.equal(count.innerHTML, '2');
    ReactTestUtils.Simulate.click(odd);
    t.equal(count.innerHTML, '2');
    t.end();
  });

  t.end();
});

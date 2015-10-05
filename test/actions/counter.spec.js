import test from 'tape';
import * as actions from '../../src/actions/counter';

test('increment()', (t) => {
  t.deepEqual(actions.increment(), { type: actions.INCREMENT_COUNTER },
    'increment should create increment action');
  t.end();
});

test('decrement()', (t) => {
  t.deepEqual(actions.decrement(), { type: actions.DECREMENT_COUNTER },
    'decrement should create decrement action');
  t.end();
});

test('incrementIfOdd()', (t) => {
  const fn = actions.incrementIfOdd();
  const dispatch = (fn) => fn;

  t.test('incrementIfOdd()', (t) => {
    const getState = () => ({ counter: 1 });

    t.deepEqual(fn(dispatch, getState), actions.increment(),
      'should create increment counter if counter is odd');
    t.end();
  });

  t.test('incrementIfOdd()', (t) => {
    const getState = () => ({ counter: 2 });

    t.notEqual(fn(dispatch, getState), actions.increment(),
      'should not create increment counter if counter is even');
    t.end();
  });

  t.end();
});

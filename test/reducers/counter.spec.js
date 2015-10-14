import test from 'tape';
import counter from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter';

test('counter()', (t) => {
  t.test('counter(undefined, {})', (t) => {
    t.equal(counter(undefined, {}), 0,
      'handles initial state');
    t.end();
  });

  t.test('counter(1, { type: INCREMENT_COUNTER })', (t) => {
    t.equal(counter(1, { type: INCREMENT_COUNTER }), 2,
      'increments state');
    t.end();
  });

  t.test('counter(2, { type: DECREMENT_COUNTER })', (t) => {
    t.equal(counter(2, { type: DECREMENT_COUNTER }), 1,
      'increments state');
    t.end();
  });

  t.end();
});

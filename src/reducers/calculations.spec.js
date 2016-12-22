import { expect } from 'chai';

import { calculations } from './calculations';

describe('[Reducer] - calculations', () => {
  describe('[Type] - CLEAR_PRESS', () => {
    it('should clear history', () => {
      const initialState = { value: ['1'], history: ['1', 2], eval: true };

      const newState = calculations(initialState, { type: 'CLEAR_PRESS' });

      expect(newState.history).to.eql([]);
    });
    it('should clear value', () => {
      const initialState = { value: ['1'], history: ['1', 2], eval: true };

      const newState = calculations(initialState, { type: 'CLEAR_PRESS' });

      expect(newState.value).to.eql([]);
    });
    it('should clear eval flag', () => {
      const initialState = { value: ['1'], history: ['1', 2], eval: true };

      const newState = calculations(initialState, { type: 'CLEAR_PRESS' });

      expect(newState.eval).to.eql(false);
    });
  });
  describe('[Type] - EVAL_PRESS', () => {
    it('should update value', () => {
      const initialState = { value: ['1', '+', '1'], history: [], eval: false };

      const newState = calculations(initialState, { type: 'EVAL_PRESS' });

      expect(newState.value).to.eql([2]);
    });
    it('should set eval flag', () => {
      const initialState = { value: ['1', '+', '1'], history: [], eval: false };

      const newState = calculations(initialState, { type: 'EVAL_PRESS' });

      expect(newState.eval).to.eql(true);
    });
    it('should add prevous value to history', () => {
      const initialState = { value: ['1', '+', '1'], history: [], eval: false };
      const expectedHistory = ['1 + 1'];

      const newState = calculations(initialState, { type: 'EVAL_PRESS' });

      expect(newState.history).to.eql(expectedHistory);
    });
  });
});

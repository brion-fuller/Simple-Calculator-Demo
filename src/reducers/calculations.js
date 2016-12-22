const initialState = {
  value: ['1', '+', '1'],
  eval: false,
  history: [],
  errors: [],
};

const operations = {
  '+': true,
  '-': true,
  '/': true,
  '*': true,
};

// TODO: immutable
export function calculations(state = initialState, action) {
  switch (action.type) {
    case 'NUMBER_PRESS': return numberPress(state, action);
    case 'OPERATION_PRESS': return operationPress(state, action);
    case 'EVAL_PRESS': return evalPress(state, action);
    case 'CLEAR_PRESS': return clearPress(state, action);
    default: return state;
  }
}

function clearPress(state) {
  const newState = {
    value: [],
    history: [],
    eval: false,
  };

  return { ...state, ...newState };
}

function evalPress(state) {
  let newState = {};
  try {
    const newText = state.value.join(' ');
    newState = {
      value: [eval(newText)], // eslint-disable-line no-eval
      eval: true,
      history: [...state.history, newText],
    };
  } catch (e) {
    newState = {
      errors: [...state.errors, 'Invalid equation, please try again'],
    };
  }
  return { ...state, ...newState };
}

function numberPress(state, action) {
  const i = state.value.length - 1;
  let value = state.value[i];
  if (i >= 0 && !isNaN(value)) {
    if (action.value !== '.' || !value.toString().match(/\./)) {
      value = `${value}${action.value}`;
    }
  } else {
    value.push(action.value);
  }
  const newState = {
    value,
    eval: state.eval ? false : state.eval,
  };
  return { ...state, ...newState };
}

function operationPress(state, action) {
  const i = state.value.length - 1;
  const errors = [...state.errors];
  let value = [...state.value[i]];

  if (i >= 0 && operations[value.toString()]) {
    value = action.value;
  } else if (i >= 0 && !isNaN(value)) {
    value.push(action.value);
  } else {
    errors.push('Invalid operation input');
  }

  const newState = {
    value,
    errors,
    eval: state.eval ? false : state.eval,
  };
  return { ...state, ...newState };
}

export default {
  calculations,
};

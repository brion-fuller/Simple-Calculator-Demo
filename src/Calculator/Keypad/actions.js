export const numberPress = value => ({
  type: 'NUMBER_PRESS',
  value,
});

export const operationPress = value => ({
  type: 'OPERATION_PRESS',
  value,
});

export const evalPress = value => ({
  type: 'EVAL_PRESS',
  value,
});

export const clearPress = value => ({
  type: 'CLEAR_PRESS',
  value,
});

export default {
  clearPress,
  evalPress,
  operationPress,
  numberPress,
};

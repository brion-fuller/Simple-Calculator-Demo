const initialState = {
    value: ['1','+','1'],
    eval: false,
    history: [],
    errors: []
};

const operations = {
    '+': true,
    '-': true,
    '/': true,
    '*':true
};

//TODO: immutable
export function calculations (state = initialState, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'NUMBER_PRESS': return numberPress(newState,action);
        case 'OPERATION_PRESS': return operationPress(newState,action);
        case 'EVAL_PRESS': return evalPress(newState,action);
        case 'CLEAR_PRESS': return clearPress(newState,action);
        default: return newState;
    }
}

const clearPress = (state, action) => {
    state.value = [];
    state.history = [];
    state.eval = false;
    return state;
}

const evalPress = (state,action) => {
    try{
        var answer = eval(state.value.join(' '));
        state.history.push(state.value.join(' '));
        state.value = [answer];
        state.eval = true;
    }catch(e){
        state.errors.push('Invalid equation, please try again');
    }
    return state;
}

const numberPress = (state,action) => {
    if(state.eval){
        state.value = [];
        state.eval = false;
    }
    var i = state.value.length-1;
    if(i >= 0 && !isNaN(state.value[i])){
        if(action.value !== '.' || !state.value[i].toString().match(/\./)){
            state.value[i] = state.value[i] + '' + action.value;
        }
    }else{
        state.value.push(action.value);
    }
    return state;
}

const operationPress = (state,action) => {
    if(state.eval){
        state.eval = false;
    }
    var i = state.value.length-1;
    if(i >= 0 && operations[state.value[i].toString()]){
        state.value[i] = action.value;
    } else if (i >= 0 && !isNaN(state.value[i])){
        state.value.push(action.value);
    }else{
        state.errors.push(`Invalid operation input`);
    }
    return state;
}
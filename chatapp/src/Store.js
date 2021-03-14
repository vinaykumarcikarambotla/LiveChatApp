import React from 'react';
export const CTX = React.createContext();

const initState={
    general : [
        {from: 'vinay',msg:'hello'},
        {from: 'vinay1',msg:'hello'},
        {from: 'vinay2',msg:'hello'}
    ],
    topic2 : [
        {from: 'xxxx',msg:'hello'},
        {from: 'xxxx',msg:'hello'},
        {from: 'xxxx',msg:'hello'}
    ],
}

function reducer(state,action){
    // const {from , msg, topic} = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [action.payload.topic]:[
                    ...state[action.payload.topic],
                    {
                        from:action.payload.from,
                        msg:action.payload.msg
                    }
                ]
            }
        default:
            return state;
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, initState);
    return(<CTX.Provider value={reducerHook}>
        {props.children}
    </CTX.Provider>);
}
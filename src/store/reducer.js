import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({
                    id: Math.random() * 40,
                    name: action.payload.name,
                    age: action.payload.age
                })
            };
        case actionTypes.REMOVE_PERSON:
            const updateArray = state.persons.filter(person => person.id !== action.id);
            return {
                ...state,
                persons: updateArray
            };
        default:
            return state;
    }
};

export default reducer;
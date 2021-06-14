function listReducer(state=[],action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,action.payload]    
        break;
    
        default:
            return state;
            break;
    }
}

module.exports = {listReducer};
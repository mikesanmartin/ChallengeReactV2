import menuState from './initialState'

function menuReducer(state = menuState, action){
    switch(action.type){
        case 'ADD_FOOD': 
            return{
                ...state, 
                menu: [...state.menu, action.payload]
            }
        case 'REMOVE_FOOD':
            return {
                ...state,
                menu: state.menu.filter((menu) => menu.id !==action.payload.id)
            }
            
        default: 
            return state
    }
}

export default menuReducer
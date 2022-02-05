export const addToMenu = (data) => ({
    type: 'ADD_FOOD',
    payload: data
})

export const removeFromMenu = (data) => ({
    type: 'REMOVE_FOOD',
    payload: data
})
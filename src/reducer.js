export const initialState = {
    user: null,
    basket: []
}


// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id)

            if(index >= 0){
                newBasket.splice(index, 1)
            } else{

            }
            return {
                ...state,
                basket: newBasket
            }
            // return {...state, basket: state.basket.filter(item => item.id !== action.id)}
            // this removes all the products with same id
        default:
            return state
    }
}

export default reducer;


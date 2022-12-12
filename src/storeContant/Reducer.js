// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";
import { DRINK_REQUEST, DRINK_RESPONSE } from "./Constants";




const initialState = {
    drinkCard_Data :[],
    drinkCard: {

        isLoading: false,


    },

};


export const drinkCardReducers =(state = initialState, { type, payload }) => {
        switch (type) {

            case DRINK_REQUEST: {

                return {
                    ...state,
                    drinkCard_Data: [],
                    drinkCard: {

                        isLoading: true,


                    },


                };

            }
            case DRINK_RESPONSE: {

                return {
                    ...state,
                    drinkCard_Data: payload,
                    drinkCard: {

                        isLoading: false,


                    },


                };
            }
            default:
                return state;
        }
    
    }
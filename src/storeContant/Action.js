import { DRINK_SAGA } from "./Constants";



const drinkCardAction = {};

drinkCardAction.getCardAction = (card_id) => (
    {
   
    type: DRINK_SAGA,
    card_id: card_id,
});


export { drinkCardAction };
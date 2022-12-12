import { call, put, takeLatest } from "@redux-saga/core/effects";
import drinkCardApi from "./Api";
import { DRINK_REQUEST, DRINK_RESPONSE, DRINK_SAGA } from "./Constants";
import { drinkCardParsers } from "./Parser";



function* getDrinkCardData(id) {
    let { card_id } = id;
    try {
        yield put({ type: DRINK_REQUEST });

        const res = yield call(drinkCardApi.showCardApi(card_id) );

        const payload = (drinkCardParsers.getDrinkCardParsers(res));
        console.log("payloa", payload);
      
        yield put({
            type:DRINK_RESPONSE,
            payload: payload,
        });
    } catch (e) {
        yield put({
            type:DRINK_RESPONSE,
            payload: [],
        });
    }
}



  
export function* registerDrinkSaga() {
    yield takeLatest(DRINK_SAGA, getDrinkCardData);
}

import { all } from "redux-saga/effects";
import { registerDrinkSaga } from "../storeContant/Saga";



function* rootSaga() {
  yield all([
    registerDrinkSaga(),
  ]);
}

export default rootSaga;

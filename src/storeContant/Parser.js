// import _get from "lodash";

const drinkCardParsers = {};

drinkCardParsers.getDrinkCardParsers= (res) => {

  if (!res) {
    return {};
  }
  return res.data;

}



export { drinkCardParsers };

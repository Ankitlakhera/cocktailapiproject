import axios from 'axios';
import { CALL_DRINK_API, GET_DRINK_API } from './Constants';

const drinkCardApi ={}

drinkCardApi.showCardApi = () => {
    axios
        .get(GET_DRINK_API)
        .then((response) => {
            console.log(response);
            return (response.data['drinks'])
            //   this.setState({ Data: response.data['drinks'] });
        })
        .catch((error) => {
            console.log(error);
        });
}


drinkCardApi.getDrinkCardApi = async (id) => {
    var a = await axios
        .get(`${CALL_DRINK_API}${id}`)
        .then((response) => {
            console.log(id);
            let C_data = response.data;
            // console.log(response.data.id)

            return ({ C_data, id });
        })

        .catch((error) => {
            console.log(error);
        });
    // console.log(a)

    return a;
}

export default drinkCardApi;
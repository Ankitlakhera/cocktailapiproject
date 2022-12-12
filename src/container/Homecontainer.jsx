import React from 'react'
import Home from "../compoment/Home";
import axios from 'axios';
import Homepopup from '../compoment/Homepopup';
import { drinkCardAction } from '../storeContant/Action';
class Homeprofile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      cardData:'',
      c_Id :null
    };
  }

  componentDidMount() {
      axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => {
        this.setState({ Data: response.data['drinks'] });
        console.log(this.state.Data)
      })
      .catch((error) => {
        console.log(error);
      });
    this.getAllData();

  }
  getAllData =async(id) => {

   var a = await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(id);
        let C_data = response.data;
        // console.log(response.data.id)

        return ({C_data,id});
      })
      
      .catch((error) => {
        console.log(error);
      });
      // console.log(a)

      return a;
    }
  onClickOpenCard = async(id, index) => {
        // console.log(id);
        // console.log('onClick CAlled', index, id);
    var b = await this.getAllData(id)
    this.setState({cardData: b.C_data})
    this.setState({c_Id: b.id})
    console.log(b)
    // this.props.history.push("Homepopup",{"id":id});
  }
  render() {

    console.log('getCardData', this.props.getCardAction(this.state.c_Id));

    const popData = drinkCardAction.getCardAction;
    console.log(popData)
    return (
      <>

        {
          this.state.c_Id !== null ? <Homepopup props={this.state.cardData} /> :

            <Home
              props={this.props}
              strDrink={this.state.Data}
              onClickOpenCard={(val1,val2)=>this.onClickOpenCard(val1, val2)}

            />

        }
      </>
    )
  }
}

export default Homeprofile
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { drinkCardAction } from "../storeContant/Action";
import drinkCardApi from "../storeContant/Api";


const mapStateToProps = (state) => {
    console.log('state',state );
    return {
        drinkCardAction : state.drinkCardAction,
        getCardData: drinkCardApi.showCardApi(),

    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCardAction:drinkCardAction.getCardAction ,

  
}, dispatch);

const HomeStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default HomeStore;
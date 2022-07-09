
import {
  sendMessActionCreator,
  tempMessActionCreator,
} from "../../redux/actionCreators";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";


const mapStateToProps = (state) => ({ temp: state.dialogsPage.temp, chats:state.dialogsPage.chatsData, messages:state.dialogsPage.messeages})
let mapDispatchToProps = (dispatch) =>{
    return({
        onChange:(text) => {dispatch(tempMessActionCreator(text))},
        sendMess:() => {dispatch(sendMessActionCreator())}
    })

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)













export default DialogsContainer;

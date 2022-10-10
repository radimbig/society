import { sendMessActionCreator } from "../../redux/actionCreators";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";

import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
  temp: state.dialogsPage.temp,
  chats: state.dialogsPage.chatsData,
  isLogin: state.authReduser.isLogin,
  messages: state.dialogsPage.messeages,
  user: state.authReduser.user,
});
let mapDispatchToProps = (dispatch) => {
  return {
    sendMess: (text, to) => {
      dispatch(sendMessActionCreator(text, to));
    },
  };
};
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));

export default DialogsContainer;

import { message } from "antd";
import React from "react";
import { connect } from "react-redux";

class Loader extends React.Component {
  key = "updatablee";
  componentWillUnmount() {
    message.success({
      key: this.key,
      content: " ",
      duration: 1,
    });
  }
  componentDidMount() {
    message.loading({
      key: this.key,
      content: "Loading...",
      duration: 10,
    });
  }

  render() {
    return;
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.authReduser.user.theme,
  };
};

export default connect(mapStateToProps)(Loader);

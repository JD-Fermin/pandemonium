import React from "react";
import DirectMessagesIndexContainer from "./direct_messages_index";
import DirectMessageFormContainer from "./direct_message_form";
import ServerList from "../servers/server_list";
import ConversationIndexContainer from "./conversation_index";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import UserBarContainer from "../users/user_bar"
class DmBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <ServerList />
        <div className="channel-bar">
          <ConversationIndexContainer />
          <UserBarContainer />
        </div>

        {this.props.match.params.conversationId ? (
          <div className="chatbox">
            <DirectMessagesIndexContainer />
            <DirectMessageFormContainer />
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(DmBox);

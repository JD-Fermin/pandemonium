import React from "react";
import DirectMessagesIndexContainer from "./direct_messages_index";
import DirectMessageFormContainer from "./direct_message_form";
import ServerList from "../servers/server_list";
import ConversationIndexContainer from './conversation_index'
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class DmBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ServerList />
        <ConversationIndexContainer />
        {this.props.match.params.conversationId ? (
          <>
            <DirectMessagesIndexContainer />
            <DirectMessageFormContainer />
          </>
        ) : null}
      </div>
    );
  }
}

export default withRouter(DmBox);

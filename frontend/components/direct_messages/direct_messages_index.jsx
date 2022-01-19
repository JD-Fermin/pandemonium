import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchDirectMessages } from "../../actions/direct_message_actions";
import DirectMessagesIndexItem from "./direct_messages_index_item";
class DirectMessagesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.conversationId !==
      this.props.match.params.conversationId
    ) {
      this.props.fetchMessages();
    }
  }

  render() {
    if (!this.props.messages) return null
    return (
      <div className="messages-list-container">
        <ul className="messages-list">
          {/* <h3>Messages</h3> */}
          {Object.values(this.props.messages).map((message) => (
            <DirectMessagesIndexItem
              key={message.id}
              message={message}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mSTP = (state) => ({
  messages: state.entities.directMessages,
});

const mDTP = (dispatch, ownProps) => ({
  fetchMessages: () =>
    dispatch(fetchDirectMessages(ownProps.match.params.conversationId)),
});

export default withRouter(connect(mSTP, mDTP)(DirectMessagesIndex));

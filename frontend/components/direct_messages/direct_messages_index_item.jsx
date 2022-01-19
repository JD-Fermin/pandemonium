import React from "react";


class DirectMessagesIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <li>{this.props.message.content}</li>
    }
}

export default DirectMessagesIndexItem
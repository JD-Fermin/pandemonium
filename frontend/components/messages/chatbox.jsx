import React from "react";
import MessagesIndexContainer from "./messages_index_container"
import CreateMessageContainer from "./create_message_container"

class Chatbox extends React.Component {
    constructor(props) {
        super(props)
       
    }
    
    render() {
        console.log(this.state)
        return(
            <div className="chatbox">
                <MessagesIndexContainer />
                <CreateMessageContainer />
            </div>
        )
        
    }
}

export default Chatbox
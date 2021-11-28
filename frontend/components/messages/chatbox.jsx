import React from "react";
import MessagesIndexContainer from "./messages_index_container"
import CreateMessageContainer from "./create_message_container"

class Chatbox extends React.Component {
    constructor(props) {
        super(props)
    //    this.state = {isCreate: true}
    //    this.toggleCreate = this.toggleCreate.bind(this)
    }

    // toggleCreate() {
    //     this.setState({isCreate: this.state.isCreate ? false : true})
    // }
    
    render() {

        return(
            <div className="chatbox">
                
                
                    <MessagesIndexContainer />
                    <CreateMessageContainer />
    
                
            </div>
        )
        
    }
}

export default Chatbox
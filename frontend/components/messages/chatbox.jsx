import React from "react";
import MessagesIndexContainer from "./messages_index_container"
import CreateMessageContainer from "./create_message_container"

class Chatbox extends React.Component {
    constructor(props) {
        super(props)
       this.state = {isCreate: true}
       this.toggleCreate = this.toggleCreate.bind(this)
    }

    toggleCreate() {
        this.setState({isCreate: this.state.isCreate ? false : true})
    }
    
    render() {

        return(
            <div className="chatbox">
                <nav>
                    <div className="channel-header">
                        <span>#</span>
                        <h2>general</h2>
                    </div>
                </nav>
                <MessagesIndexContainer toggleCreate={this.toggleCreate}/>
                { this.state.isCreate ? <CreateMessageContainer /> : null}
            </div>
        )
        
    }
}

export default Chatbox
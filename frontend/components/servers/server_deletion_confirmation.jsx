import React from "react";

class ServerDeletionConfirmation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            
                <div className="delete-channel-modal">
                    Do you reaaally want to delete this server?
                    <button className="delete-server" onClick={this.props.delete}>Yes</button>
                    <button onClick={this.props.toggleDelete}>No</button>
                </div>
        
        )
    }
}

export default ServerDeletionConfirmation
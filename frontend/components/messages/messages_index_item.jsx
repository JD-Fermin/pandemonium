import React from "react";

const MessagesIndexItem = (props) => {
    let modifyButtons = <><button>Edit</button><button>Delete</button></>;
    return (
        <li>
            {`${props.message.content}`} 
            <br />
            {`===> ${props.author.username}`}
            {props.author.id === props.currentUser.id ? modifyButtons : null}
        </li>
    )
}

export default MessagesIndexItem



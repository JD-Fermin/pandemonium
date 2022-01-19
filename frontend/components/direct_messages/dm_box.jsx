import React from "react";
import DirectMessageFormContainer from "./direct_message_form"
class DmBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <DirectMessageFormContainer />
        </div>
    )
  }
}
export default DmBox;

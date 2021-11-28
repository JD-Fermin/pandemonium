import React from "react";
import { ChannelApi } from "../../util/channel_api_util";
const ChannelItem = (props) => {
   return  <li>{props.name}</li>
}

class ChannelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            channelList: []
        }
    }

    componentDidMount() {
        ChannelApi.list().then(res => {
            console.log('channels: ', res)
            this.setState({channelList: Object.values(res)})
        })
    }

    render() {
        const channelList = this.state.channelList
        return channelList.map(channel =>
            <ChannelItem key={channel.id} name={channel.name} />
        )
    }
}

export default ChannelList
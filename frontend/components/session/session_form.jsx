import React from "react";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", email: "", password: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogIn = this.demoLogIn.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state)
    }

    handleChange(field) {
        return e => this.setState({[field]: e.target.value})
    }

    demoLogIn() {
        this.props.submitForm(this.props.demoUser)
    }


    render() {
        let username = <><label htmlFor="username">Username</label><input type="text" id="username" onChange={this.handleChange("username")} value={this.state.username}/></>;
        let demo = <><button onClick={this.demoLogIn}>Demo User</button></>;
        let errors = <><ul>{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}</ul></>;
        
        return (
            <div className='sessionForm'>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === "Register" ?  username: null}
                    

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={this.handleChange("email")} value={this.state.email}/>

                    <label htmlFor="Password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange("password")} value={this.state.password}/>

                    <input type="submit" value={this.props.formType} />
                </form>
                {this.props.formType === "Log In" ?  demo : null}
                {this.props.errors.length === 0 ? null : errors}
            </div>
        )
    }
}

export default SessionForm
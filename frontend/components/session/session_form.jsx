import React from "react";
import { Link } from "react-router-dom";


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

    componentWillMount() {
        this.props.removeSessionErrors();
    }
    
    render() {
        let altLink = <><Link to={this.props.formType === "Log In" ? "/register" : "/login"} className="alt-link">{this.props.formType === "Log In" ? "Register Instead?" : "Have an Account Already?"}</Link></>;
        let username = <><label htmlFor="username">Username</label><br /><input type="text" id="username" onChange={this.handleChange("username")} value={this.state.username}/></>;
        let demo = <><button className="button" onClick={this.demoLogIn}>Demo User</button></>;
        let errors = <><ul>{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}</ul></>;
        return (
            <div className='sessionForm'>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === "Register" ?  username: null}
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" id="email" onChange={this.handleChange("email")} value={this.state.email}/>
                    </div>
                   
                    <div>
                        <label htmlFor="Password">Password</label>
                        <br />
                        <input type="password" id="password" onChange={this.handleChange("password")} value={this.state.password}/>
                    </div>
                    

                    <input className="button" type="submit" value={this.props.formType} />
                </form>
                {this.props.formType === "Log In" ?  demo : null}
                <br />
                <br />
                {altLink}
                <br />
                <button className="button back" onClick={() => (this.props.history.push('/'))}>Back</button>  
                {this.props.errors.length === 0 ? null : errors}
                
            </div>
        )
    }
}

export default SessionForm
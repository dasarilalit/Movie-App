import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'; /*for creating the form*/
import InputLabel from '@material-ui/core/InputLabel'; /*under form creating  input labels*/
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types'; /*checking whthwer tab container are having inputs are not*/
import FormHelperText from '@material-ui/core/FormHelperText'; /*checking required fields*/


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


/*for typography*/
const TabContainer = function (props) {
    return (
        /*inline css we had used at down */
        <Typography component="div"
            style={
                { padding: 0, textAlign: 'center' }} > { props.children}
        </Typography>
    )
}

/*for checking vaild inputs in login if not there error will shown in console*/
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {

    /*creting syntax for modal to open new thng when press login we have npm install react-modal for this*/
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            /*for tabs login inside*/
            value: 0,
            usernameRequired: "dispNone",
            /*for hidden the required for login*/
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            firstnameRequired: "dispNone",
            /* for hidden the required for register we are calling the proptypes*/
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactRequired: "dispNone",
            contact: "",
            registrationSuccess: false,
        }
    }

    /*calling handler created at login button before*/
    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactRequired: "dispNone",
            contact: ""
        });
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }
    /*calling tab change handler for switiching tabs inside login like login  and register down*/


    tabChangeHandler = (_event, value) => { /*the 0 and 1 will stor in value and switching*/
        this.setState({ value });
    }


    /*for login*/

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    /*for login*/


    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }
    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.registerPassword === "" ? this.setState({ registerPasswordRequired: "dispBlock" }) : this.setState({ registerPasswordRequired: "dispNone" });
        this.state.contact === "" ? this.setState({ contactRequired: "dispBlock" }) : this.setState({ contactRequired: "dispNone" });

        let dataSignup = JSON.stringify({
            "email_address": this.state.email,
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "mobile_number": this.state.contact,
            "password": this.state.registerPassword
        });

        let xhrSignup = new XMLHttpRequest();
        let that = this;
        xhrSignup.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    registrationSuccess: true
                });
            }
        });

        xhrSignup.open("POST", this.props.baseUrl + "signup");
        xhrSignup.setRequestHeader("Content-Type", "application/json");
        xhrSignup.setRequestHeader("Cache-Control", "no-cache");
        xhrSignup.send(dataSignup);
    }
    inputFirstNameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }
    inputLastNameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }
    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }
    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({ registerPassword: e.target.value });
    }
    inputContactChangeHandler = (e) => {
        this.setState({ contact: e.target.value });
    }
    searchChangeHandler = (e) => {
        this.setState({ searchitem: e.target.value })


    }


    render() {
        return (
            <div>
                <header className="app-header" >

                    < img src={logo}
                        className="app-logo"
                        alt="Movies App Logo" />

                    < a href="https://www.google.co.in/webhp"
                        className="buttons" > Home &nbsp;
            <i class="fa fa-home" aria-hidden="true" > </i></a >

                    < a href="https://www.google.co.in/webhp "
                        className="buttons" > < i class="fa fa-cogs"
                            aria-hidden="true" > </i>&nbsp;Seetings</a>

                    < a href="https://www.google.co.in/webhp "
                        className="buttons" > < i class="fa fa-user"
                            aria-hidden="true" > </i>&nbsp;About Us</a >
                    <a href="https://www.google.co.in/webhp"
                        className="buttons" > Downloads &nbsp; < i class="fa fa-download"
                            aria-hidden="true" > </i></a >

                    <span className="buttons" > &nbsp; < i class="fa fa-search"
                        aria-hidden="true" > </i>&nbsp;&nbsp;
             <Input type="text"
                            placeholder="Search.."
                            style={
                                { "color": "white" }}
                            onChange={this.searchChangeHandler} > </Input> &nbsp; &nbsp; &nbsp;
             < Button aria-label="delete"
                            variant="contained"
                            color="secondary"
                            onClick={this.testHandler} > Enter </Button>
                    </span>

                    < div className="login-button" >
                        < Button variant="contained"
                            color="default"
                            onClick={this.openModalHandler} >
                            Login
                                     </Button>

                    </div> </header> <Modal ariaHideApp={false}
                        isOpen={this.state.modalIsOpen}
                        contentLabel="Login"
                        onRequestClose={this.closeModalHandler}

                        /*making custom style for modal look small starting also there code*/
                        style={customStyles} >
                    <Tabs className="tabs"
                        value={this.state.value} /* for changing the tab like bwt login and register we are writing fun*/
                        onChange={this.tabChangeHandler} >
                        < Tab label="Login" />
                        < Tab label="Register" />
                    </Tabs>


                    {
                        this.state.value === 0 && /* 0 is login and 1 is register it id for showing the login from and register form seperately */
                        <TabContainer >
                            <FormControl required >
                                < InputLabel htmlFor="username" > Username </InputLabel> <
                                    Input id="username"
                                    type="text"
                                    username={this.state.username}
                                    onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired} >
                                    <span className="red" > required </span> </FormHelperText> </FormControl> <br /> < br />
                            <FormControl required >
                                <InputLabel htmlFor="loginPassword" > Password </InputLabel> <Input id="loginPassword"
                                    type="password"
                                    loginpassword={this.state.loginPassword}
                                    onChange={this.inputLoginPasswordChangeHandler} />

                                <FormHelperText className={this.state.loginPasswordRequired} >
                                    <span className="red" > required </span>
                                </FormHelperText>
                            </FormControl>
                            <br /> < br />
                            <Button variant="contained"
                                color="primary"
                                onClick={this.loginClickHandler} > LOGIN </Button>
                        </TabContainer>
                    } {
                        this.state.value === 1 && /* 0 is login and 1 is register it id for showing the login from and register form seperately */
                        <TabContainer >
                            <FormControl required >
                                <InputLabel htmlFor="firstname" > First Name </InputLabel>
                                <Input id="firstname"
                                    type="text"
                                    firstname={this.state.firstname}
                                    onChange={this.inputFirstNameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired} >
                                    < span className="red" > required </span> </FormHelperText> </FormControl>
                            < br />
                            < br />

                            <FormControl required >
                                <InputLabel htmlFor="lastname" > Last Name </InputLabel> <
                                    Input id="lastname"
                                    type="text"
                                    lastname={this.state.lastname}
                                    onChange={this.inputLastNameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired} >
                                    <span className="red" > required </span> </FormHelperText> </FormControl>
                            < br /> < br />
                            <FormControl required >
                                <InputLabel htmlFor="email" > Email </InputLabel> <
                                    Input id="email"
                                    type="text"
                                    email={this.state.email}
                                    onChange={this.inputEmailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired} >

                                    <span className="red" > required </span> </FormHelperText> </FormControl> < br /> < br />
                                    <FormControl required >
                                        <InputLabel htmlFor="registerPassword" > Password </InputLabel> <
                                                Input id="registerPassword"
                                                type="password"
                                                registerpassword={this.state.registerPassword}
                                                onChange={this.inputRegisterPasswordChangeHandler}
                                            /> <FormHelperText className={this.state.registerPasswordRequired} >
                                                <span className="red" > required </span> </FormHelperText> </FormControl> 
                                                        <br /> < br />
                                                    < FormControl required >
                                                        <InputLabel htmlFor="contact" > Contact No. </InputLabel> <
                                                                Input id="contact"
                                                                type="text"
                                                                contact={this.state.contact}
                                                                onChange={this.inputContactChangeHandler}
                                                            /> <FormHelperText className={this.state.contactRequired} >
                                                                <
                                                                    span className="red" > required </span> </FormHelperText> </FormControl> 
                                                                       < br /> < br />



                                                                    {
                                                                        this.state.registrationSuccess === true &&
                                                                        <
                                                                            FormControl >
                                                                            <
                                                                                span className="successText" >
                                                                                Registration Successful.Please Login!
                        
                        </span> 
                        </FormControl>
                    } <br /> < br />
                                                                                <Button variant="contained"
                                                                                    color="primary"
                                                                                    onClick={this.registerClickHandler} > REGISTER </Button> 
                    </TabContainer>
            } 
            </Modal> 
            </div>
        )
    }
}

export default Header;
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS, Image } from "react-native"
import { connect } from "react-redux";
import UserActions from "../../redux/actions/UserActions";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            mail: "",
            password: "",
            photo: ""
        }
    }
    changefirstName(firstName) {
        this.setState(firstName)
    }
    changelastName(lastName) {
        this.setState(lastName)
    }
    changeMail(mail) {
        this.setState(mail)
    }
    changePassword(password) {
        this.setState(password)
    }
    changePhoto(photo) {
        this.setState(photo)
    }
    buttonPressed() {
        if (this.state.mail && this.state.password) {
            AlertIOS.alert(this.state.mail + "" + this.state.password + "" + this.state.firstName + "" + this.state.lastName + "" + this.state.photo)
        } else {
            AlertIOS.alert("ERROR!!")
        }

    const signup = (event) => {
        event.preventDefault(event)

        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            image: event.target[4].value,
            from: "signup",
        }
        props.userSignUp(data)
        console.log(data)
    }

}
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Sign Up</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.changefirstName(firstName)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.changelastName(lastName)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mail"
                        value={this.state.mail}
                        onChangeText={(mail) => this.changeMail(mail)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(password) => this.changePassword(password)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="URL Profile Picture"
                        value={this.state.photo}
                        onChangeText={(photo) => this.changePhoto(photo)}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.buttonPressed}
                    >
                        <Text style={styles.textButton}>Register</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require("../../../assets/signUp.png")} style={styles.imageSignUp} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3BAAFF",


    },
    button: {
        backgroundColor: "#f2c94c",
        paddingTop: 15,
        paddingBottom: 15,
        width: 300,
        marginLeft: 50,
        borderRadius: 10,
        marginTop: 20,
    },
    textButton: {
        textAlign: "center",
        color: "#ffff",
        fontWeight: "bold",
        fontSize: 15,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 30,
        marginTop: 30,
        fontWeight: "bold",
        color: "white",
    },
    input: {
        height: 40,
        borderColor: "#E9E5E5",
        borderWidth: 2,
        marginBottom: 20,
        padding: 10,
        color: "white",
        borderRadius: 10,
        width: "90%",
        marginLeft: 20,
    },
    imageSignUp: {
        display: "flex",
        width: "100%",
        height: 240,
    }
})
AppRegistry.registerComponent("SignUp", () => SignUp);

const mapDispatchToProps = {
    userSignUp: UserActions.userSignUp,
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS, Image } from "react-native"

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            mail: "",
            password: ""
        }
    }
    changeMail(mail) {
        this.setState({ mail })
    }
    changePassword(password) {
        this.setState({ password })
    }
    buttonPressed() {
        if (this.state.mail && this.state.password) {
            AlertIOS.alert(this.state.mail + "" + this.state.password)
        } else {
            AlertIOS.alert("ERROR!!")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Welcome Back!</Text>
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
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.buttonPressed}
                    >
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require("../../../assets/signIn3.png")} style={styles.imageSignIn} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#3BAAFF",
        justifyContent: "center",
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
        fontSize: 15,
        fontWeight: "bold",

    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 30,
        marginTop: 300,
        color: "white",
        fontWeight: "bold",
    },
    input: {
        height: 40,
        width: "90%",
        borderColor: "#E9E5E5",
        borderWidth: 2,
        marginBottom: 20,
        marginLeft: 20,
        borderRadius: 10,
        padding: 10,
    },
    imageSignIn: {
        width: "100%",
        height: 350,
        marginBottom: 600,

    }
})
AppRegistry.registerComponent("SignIn", () => SignIn);
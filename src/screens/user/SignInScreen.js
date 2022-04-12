import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS } from "react-native"
// import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3BAAFF",
        /* marginTop: 30, */
        paddingLeft: 15,
        paddingRight: 15,
        /* marginRight: 15, */
    },
    button: {
        backgroundColor: "#3BAAFF",
        paddingTop: 15,
        paddingBottom: 15,
    },
    textButton: {
        textAlign: "center",
        color: "#ffff",

    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: "#E9E5E5",
        borderWidth: 2,
        marginBottom: 20,
    },
})
AppRegistry.registerComponent("SignIn", () => SignIn);
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS } from "react-native"
// import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            mail: "",
            password: "",
            photo: ""
        }
    }
    changefirstName(firstName) {
        this.setState({ firstName })
    }
    changelastName(lastName) {
        this.setState({ lastName })
    }
    changeMail(mail) {
        this.setState({ mail })
    }
    changePassword(password) {
        this.setState({ password })
    }
    changePhoto(photo) {
        this.setState({ photo })
    }
    buttonPressed() {
        if (this.state.mail && this.state.password) {
            AlertIOS.alert(this.state.mail + "" + this.state.password + "" + this.state.firstName + "" + this.state.lastName + "" + this.state.photo)
        } else {
            AlertIOS.alert("ERROR!!")
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3BAAFF",
        paddingLeft: 15,
        paddingRight: 15,
    },
    button: {
        backgroundColor: "#f2c94c",
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
AppRegistry.registerComponent("SignUp", () => SignUp);
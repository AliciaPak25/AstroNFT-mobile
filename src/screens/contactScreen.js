import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS, Image } from "react-native"

import Picker from "../components/Picker";

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            message: "",
            picker: ""
        }
    }
    changefirstName(firstName) {
        this.setState({ firstName })
    }
    changelastName(lastName) {
        this.setState({ lastName })
    }

    changePhone(phone) {
        this.setState({ phone })
    }
    changeMessage(message) {
        this.setState({ message })
    }


    buttonPressed() {
        if (this.state.firstName && this.state.lastName && this.state.phone && this.state.message && this.state.picker) {
            AlertIOS.alert(this.state.firstName + "" + this.state.lastName + "" + this.state.phone + "" + this.state.message + "" + this.state.picker)
        } else {
            AlertIOS.alert("ERROR!!")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Contact</Text>
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
                        placeholder="phone"
                        value={this.state.phone}
                        onChangeText={(phone) => this.changePhone(phone)}
                    />

                    <Picker />

                    <TextInput
                        multiline={true}
                        style={[styles.input, styles.txtArea]}
                        placeholder="message"
                        value={this.state.message}
                        onChangeText={(message) => this.changeMessage(message)}
                    />

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.buttonPressed}
                    >
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require("../../assets/contact.png")} style={styles.imageContact} />
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
        borderRadius: 20,
        width: 300,
        marginLeft: 40,
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
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        color: "white",
    },
    input: {
        height: 40,
        borderColor: "#E9E5E5",
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        color: "white",
    },
    imageContact: {
        width: "100%",
        height: 300,
        marginTop: 55,
    },
    txtArea: {
        height: 100,
    },

})
AppRegistry.registerComponent("Contact", () => Contact);
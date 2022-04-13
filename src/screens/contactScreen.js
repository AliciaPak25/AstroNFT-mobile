import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS } from "react-native"
import RNPickerSelect from "react-native-picker-select"
// import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            message: "",

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
        if (this.state.mail && this.state.password) {
            AlertIOS.alert(this.state.firstName + "" + this.state.lastName + "" + this.state.phone)
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

                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        style={styles.select}
                        items={[
                            /* {label: "Select an option", value: "Select an option" }, */
                            { label: "Inquiry", value: "Inquiry", color: "black" },
                            { label: "Claims", value: "Claims" },
                            { label: "Suggestions", value: "Suggestions" },

                        ]}
                    />
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
    select: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
    }
})
AppRegistry.registerComponent("Contact", () => Contact);
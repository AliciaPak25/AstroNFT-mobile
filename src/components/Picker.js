import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, Item } from "react-native"
import { PickerStyle } from "../styles/Picker"


class PickerComponent extends Component {

    state = {
        select: "seleccione una opcion"
    }

    render() {
        return (
            <View>
                <Picker
                    style={PickerStyle.component}
                    selectedValue={this.state.select}
                    onValueChange={(itemValue, itemIndex) => this.setState({ select: itemValue })}
                >
                    <Picker.Item label="Inquiry" value="inquiry" />
                    <Picker.Item label="Claims" value="claims" />
                    <Picker.Item label="Suggestions" value="suggestions" />
                </Picker>
            </View>
        )
    }
}

// const style = StyleSheet.create({});
export default PickerComponent
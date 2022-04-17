import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, AlertIOS, Image, Button } from "react-native"
import { connect } from 'react-redux';
import UserActions from '../../redux/actions/UserActions';
import { Formik } from 'formik';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "",
            password: ""
        }

        function signin(event){
            event.preventDefault()
    
            const data = {
                email: event.target[0].value,
                password: event.target[1].value,
                from: "signin"
            }
            console.log(data)
            props.userLoging(data);
        }
        console.log(signin)
   /*  changeMail(mail) {
        this.setState(mail)
    }
    changePassword(password) {
        this.setState(password.value)
    }
    buttonPressed() {
        if (this.state.mail && this.state.password) {
            AlertIOS.alert(this.state.mail + "" + this.state.password)
        } else {
            AlertIOS.alert("ERROR!!")
        } */

    
}

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Welcome Back!</Text>

                    <Formik
                        initialValues={{ email: '', password: '', from: 'signin' }}
                        onSubmit={(data => this.props.userLoging(data))}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.input}
                            placeholder="Email"
                            />
                            <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={styles.input}
                            placeholder="Password"
                            />
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                        )}
                    </Formik>

                   {/*  <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={this.state.mail}
                        onChangeText={(mail) => this.changeMail(mail)}
                    /> */}
                   {/*  <TextInput
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
                    </TouchableHighlight> */}
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

const mapDispatchToProps = {
    userLoging: UserActions.userLoging,
}

export default connect(null, mapDispatchToProps)(SignIn);
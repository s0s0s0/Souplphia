// @flow
import * as React from "react";

import { StyleSheet } from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpNameProps = NavigationProps<>;

type SignUpNameState = {
    firstName: string,
    lastName: string,
    email: string,
};

export default class SignUpName extends React.PureComponent<SignUpNameProps, SignUpNameState> {

    // $FlowFixMe
    lastName = React.createRef();

    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    setFirstName = (firstName: string) => this.setState({ firstName });

    setLastName = (lastName: string) => this.setState({ lastName });

    setEmail = (email: string) => this.setState({ email });

    goToLastName = () => this.lastName.current.focus();

    signUp = () => {
        const {navigation} = this.props;
        const {firstName, lastName} = this.state;
        // eslint-disable-next-line no-console
        console.log({firstName, lastName});
        navigation.navigate("Welcome");
    };

    next = () => {
        const {navigation} = this.props;
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);

        if(this.state.firstName == ""){
            console.log("vazio");
        }
        navigation.navigate("SignUpEmail", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        });

    }

    back = () => {
        const {navigation} = this.props;
        navigation.navigate("Login");
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Quem é você"
                subtitle="Seu nome"
            >
                <TextField
                    color={"#fff"}
                    placeholder="Nome"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setFirstName}
                    onSubmitEditing={this.goToLastName}
                    style={styles.text}
                />
                <TextField
                color={"#fff"}
                    placeholder="Sobrenome"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    ref={this.lastName}
                    onSubmitEditing={this.next}
                    onChangeText={this.setLastName}
                    style={styles.text}
                />
                <TextField
                    color={"#fff"}
                    placeholder="E-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setEmail}
                    onSubmitEditing={this.goToPassword}
                    style={styles.text}
                />
                <Button style={styles.btnLogin} label="Próximo" onPress={this.next} full primary />
                <Button label="Voltar" onPress={this.back} full primary transparent />
            </LoginContainer>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "rgba(255,255,255, 0.0)",
        height: 45,
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
        paddingLeft: 20
    },
    btnLogin: {
        backgroundColor: "#ff4d4d",
        borderRadius: 25,
    },
    btnFacebook: {
        fontSize: 9,
        backgroundColor: "#0066cc",
        borderRadius: 25,
    },
    bottomOption: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

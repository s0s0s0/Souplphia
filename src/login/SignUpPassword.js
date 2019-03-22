// @flow
import * as React from "react";

import {StyleSheet, View} from "react-native";
import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpPasswordProps = NavigationProps<>;

type SignUpPasswordState = {
    password: string
};

export default class SignUpPassword extends React.PureComponent<SignUpPasswordProps, SignUpPasswordState> {

    state = {
        password: ""
    };

    setPassword = (password: string) => this.setState({ password });

    signUp = () => {
        const {navigation} = this.props;
        const {password} = this.state;
        // eslint-disable-next-line no-console
        console.log({password});

        const _firstName = navigation.getParam('firstName','nome vazio');
        const _lastName = navigation.getParam('lastName','sobrenome vazio');
        const _email = navigation.getParam('email','email vazio');

        const _phone = navigation.getParam('phone','email vazio');
        const _country = navigation.getParam('country','email vazio');


        console.log(_firstName);
        console.log(_lastName);
        console.log(_email);
        console.log(_phone);
        console.log(_country);
        console.log(password);


        navigation.navigate("Question");
    };

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Fique seguro"
                subtitle="Sua senha"
            >
                <TextField
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    onChangeText={this.setPassword}
                    onSubmitEditing={this.signUp}
                    secureTextEntry
                    style={styles.text}
                />
                <TextField
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    onChangeText={this.setPassword}
                    onSubmitEditing={this.signUp}
                    secureTextEntry
                    style={styles.text}
                />
                <Button style={styles.btnLogin} label="Cadastrar" onPress={this.signUp} full primary />
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


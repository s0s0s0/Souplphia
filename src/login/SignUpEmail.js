// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, TextField, Switch, Text, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpEmailProps = NavigationProps<>;

type SignUpEmailState = {
    phone: string,
    country: string
};

export default class SignUpEmail extends React.PureComponent<SignUpEmailProps, SignUpEmailState> {

    state = {
        phone: "",
        country: ""
    };

    setPhone = (phone: string) => this.setState({ phone });
    setCountry = (country: string) => this.setState({ country });

    signUp = () => {
        const {navigation} = this.props;
        const {email, newsletter} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, newsletter});
        navigation.navigate("SingUpPassword");
    };

    next = () => {
        const {navigation} = this.props;
        const _firstName = navigation.getParam('firstName','nome vazio');
        const _lastName = navigation.getParam('lastName','sobrenome vazio');
        const _email = navigation.getParam('email','email vazio');

        console.log(this.state.phone);
        console.log(this.state.country);
        console.log(_firstName);
        console.log(_lastName);
        console.log(_email);

        navigation.navigate("SignUpPassword", {
            firstName: _firstName,
            lastName: _lastName,
            email: _email,
            phone: this.state.phone,
            country: this.state.country
        });
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onToggle = (newsletter: string) => this.setState({ newsletter });

    render(): React.Node {
        const {onToggle} = this;
        return (
            <LoginContainer
                title="Vamos nos conectar"
                subtitle="Seu telefone"
            >
                <TextField
                    placeholder="Telefone"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setPhone}
                    onSubmitEditing={this.next}
                    style={styles.textField}
                />

                <TextField
                    placeholder="País"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setCountry}
                    onSubmitEditing={this.next}
                    style={styles.textField}
                />
                {/*
                <View style={styles.newsletter}>
                    <Switch {...{onToggle}} />
                    <Text style={styles.text}>
                    Sign up for the newsletter
                    </Text>
                </View>
                */}
                <Button style={styles.btnLogin} label="Próximo" onPress={this.next} full primary />
                <Button label="Voltar" onPress={this.back} full primary transparent />
            </LoginContainer>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: StyleGuide.palette.white
    },
    textField: {
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
    newsletter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: StyleGuide.spacing.small
    }
});

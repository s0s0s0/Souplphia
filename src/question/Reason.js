// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, ButtonDone, Content, List, TextField, Switch, Text, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";

import QuestionContainer from "./QuestionContainer";


import {Track, Question, PlaylistHeader, PlayerActionSheet} from "../components/music";
import MusicAPI from "../music/api";

type ReasonProps = NavigationProps<>;

type ReasonState = {
    email: string,
    newsletter: boolean
};

export default class Reason extends React.PureComponent<ReasonProps, ReasonState> {

    state = {
        email: "",
        newsletter: false
    };

    setEmail = (email: string) => this.setState({ email });

    signUp = () => {
        const {navigation} = this.props;
        const {email, newsletter} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, newsletter});
        navigation.navigate("SingUpPassword");
    };

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("Level");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onToggle = (newsletter: boolean) => this.setState({ newsletter });

    render(): React.Node {
        const {onToggle} = this;
        const tracks = MusicAPI.tracks("brother");
        const playlist = MusicAPI.transformAlbumToPlaylist(MusicAPI.albums[0]);
        return (
            <QuestionContainer
            title="Por que você quer aprender inglês?"   
            >
                <Content style={styles.gutter}>
                    <List
                        rows={tracks}
                        renderRow={(track, i) => <Track index={i + 1} onPress={this.toggle} {...{playlist, track}} />}
                    />
                </Content>
                <Button style={styles.btnLogin} label="Próximo" onPress={this.next} full secondary />
                <Button label="Voltar" onPress={this.back} full primary transparent />
            </QuestionContainer>
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
        backgroundColor: StyleGuide.palette.white,
        //backgroundColor: "#ff4d4d",
        borderRadius: 25,
        color: "#000",
        right:-100,
        marginTop:15
    },
    newsletter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: StyleGuide.spacing.small
    },
    gutter: {
        //padding: StyleGuide.spacing.small,
        //paddingBottom: StyleGuide.spacing.small + 64
    }
});

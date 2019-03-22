// @flow
import * as React from "react";

import { StyleSheet } from "react-native";
import {Button,  Content, List,StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";

import QuestionContainer from "./QuestionContainer";


import {Track, Question, PlaylistHeader, PlayerActionSheet} from "../components/music";
import MusicAPI from "../music/api";

type LevelProps = NavigationProps<>;

type LevelState = {
    firstName: string,
    lastName: string
};

export default class Level extends React.PureComponent<LevelProps, LevelState> {

    // $FlowFixMe
    lastName = React.createRef();

    state = {
        firstName: "",
        lastName: ""
    };

    setFirstName = (firstName: string) => this.setState({ firstName });

    setLastName = (lastName: string) => this.setState({ lastName });

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
        navigation.navigate("Topics");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.navigate("Reason");
    }

    render(): React.Node {
        const {onToggle} = this;
        const tracks = MusicAPI.tracks("brother");
        const playlist = MusicAPI.transformAlbumToPlaylist(MusicAPI.albums[0]);
        return (
            <QuestionContainer
                title="Em que nível você está?"
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
        marginTop:15,
        right: -100
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

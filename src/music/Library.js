// @flow
import * as React from "react";
import {StyleSheet, View, Text, ActivityIndicator} from "react-native";

import {StyleGuide, type NavigationProps} from "../components";

import MusicAPI from "./api";
import type {Album as AlbumModel} from "../components/music/Model";
import type {Pathway as PathwayModel} from "../components/music/Model";
import {PlayerProvider, Album, withPlayer, type PlayerProps} from "../components/music";
import FeedLibrary from "../components/FeedLibrary";

type LibraryState = {
    isLoading: boolean,
    dataSource: object,
    url: string
};

class Library extends React.Component<PlayerProps & NavigationProps<>, LibraryState> {

    state = {
        isLoading: true,
        dataSource: null,
        url: 'http://apiapp.soulphia.com/api/pathways/method'
    };

    componentDidMount () {
        
        console.log(this.state.url);

        return fetch(this.state.url)
            .then( (response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            })

            .catch( (error) => {
                console.log(error)
            });       
    }

    renderItem = (album: AlbumModel): React.Node => {
        const {navigation} = this.props;
        return <Album {...{album, navigation}} />;
    }

    onPress = async (): Promise<void> => {
        const playerProvider = PlayerProvider.getInstance();
        const {navigation} = this.props;
        if (playerProvider.sound) {
            await playerProvider.sound.unloadAsync();
        }
        navigation.navigate("Welcome");
    }

    render(): React.Node {
        const {renderItem, onPress} = this;
        const {navigation} = this.props;
        const data = MusicAPI.albums;
        //const data = this.state.dataSource
        const title = "Home";
        const rightAction = {
            icon: "search",
            onPress
        };

        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return (
                
                    <FeedLibrary {...{data, renderItem, title, navigation, rightAction}} style={styles.content} numColumns={1} />
                
                
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        top:50,
        flex:1,
        justifyContent: 'center'
    },
    content: {
        marginTop:10,
        paddingBottom: StyleGuide.spacing.small 
    }
});

export default (Library);

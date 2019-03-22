// @flow
import * as React from "react";
import {StyleSheet, View, Text, TouchableHighlight, Image} from "react-native";

import {StyleGuide, Image as ImageComponent, Button} from "../components";

//import console = require("console");

type KitProps = {
    title: string,
    description: string,
    onPress: () => void,
    uri: string,
    preview: string
};

export default class Kit extends React.PureComponent<KitProps> {

    render(): React.Node {
        const {title, description, uri, preview, onPress} = this.props;
        return (
            
                <View style={styles.container}>
                    <ImageComponent style={styles.image} {...{uri, preview}} />
                    <View style={styles.conteinerDesc}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.subtext}>Lorem ipsum dolor sit ammet, cons scectur discipline elit.</Text>
                        <TouchableHighlight style={styles.btnUpgrade} onPress={onPress}>
                            <Text color="white" style={styles.subtextBtn}>Agendar</Text>
                        </TouchableHighlight>
                    </View>
                    
                        
                        
                        
                    {/* 
                        <Text style={styles.desc}>{description}</Text>
                    */}

                    
                </View>
            
        );
                    }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: StyleGuide.spacing.small,
        marginHorizontal: StyleGuide.spacing.small,
        height: 110,
        padding: 10,
        backgroundColor: StyleGuide.palette.white,
        //justifyContent: "flex-end"
    },
    image: {
        //...StyleSheet.absoluteFillObject,
        //position: 'absolute',
        width: 100,
        height: 70,
        borderRadius: 5,
        //overflow: "hidden"
    },
    conteinerDesc:{
        marginLeft: 5,
        paddingRight: 30,
        width: 230
    },

    btnUpgrade:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:'#404040',
        height:20,
        width: 100
    },

    subtext: {
        color:StyleGuide.palette.gray,
        fontSize: 10,
        marginTop: 2,
        marginBottom: StyleGuide.spacing.tiny
    },
    subtextBtn: {
        color:StyleGuide.palette.white,
        fontSize: 10,
        marginTop: 2,
        marginBottom: StyleGuide.spacing.tiny
    },

    text: {
        color: StyleGuide.palette.red,
        fontSize: 15,
        fontFamily: 'SFProText-Semibold'
    },

});

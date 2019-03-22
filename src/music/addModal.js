import React, {Component} from "react"

import {View,StyleSheet, Dimensions, Platform, Alert} from "react-native";
import Modal from "react-native-modalbox";


var screen = Dimensions.get('window');

import {
    NavigationBar, Text, StyleGuide
    
} from "../components";

export default class AddModal extends Component {
    constructor(props){
        super(props);
    }

    showModal = () => {
        this.refs.myModal.open();
    }

    render(): React.Node {
        //const {onPress, onChange} = this;
        const {navigation} = this.props;
        

       
        return(
            //rightAction={{ icon: "sign-out", onPress }}


            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'flex-start',
                    borderRadius: Platform.OS === 'ios' ? 20 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert('modal closed');
                }}
            >

                <View style={styles.top}>
                    <Text style={styles.title}> Terça, 22 de Janeiro de 2019</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.columnContent}>
                        <Text style={styles.miniTitle}> Pathway</Text>
                        <Text style={styles.text}> American Idol</Text>
                        <Text style={styles.miniTitle}> Tutora</Text>
                        <Text style={styles.text}> Renee Brooks</Text>
                    </View>

                    <View style={styles.columnContent}>
                        <Text style={styles.miniTitle}> Aula 01</Text>
                        <Text style={styles.text}> Beyonce</Text>
                        <Text style={styles.miniTitle}> Horário</Text>
                        <Text style={styles.text}> 19h</Text>
                    </View>

                    

                </View>

            </Modal>
            
        );
       
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: StyleGuide.palette.red,
        height:60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 18,
        color: StyleGuide.palette.white,
        fontFamily: 'SFProText-Semibold'
    },
    column:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    miniTitle:{
        fontSize: 15,
        color: StyleGuide.palette.red,
        fontFamily: 'SFProText-Semibold',
        marginBottom: 5
    },
    text:{
        fontSize: 15,
        color: StyleGuide.palette.gray,
        marginBottom: 10
        
    },
    columnContent:{
        justifyContent: 'center',
        //alignItems: 'center'
    }

});

//https://www.youtube.com/embed/7Z3_CsXA_-E
import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, SafeAreaView, Image, StatusBar, Platform, TouchableOpacity, Linking } from "react-native";


import AppTitle from "../components/appTitle";

export default class Credits extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'Credits'} />
                <View style={styles.mainContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>Ângelo Augusto Huguenin Veloso Monteiro</Text>
                    </View>
                    <View style={styles.bioContainer}>
                        <Text style={styles.bioText}> Comecei a estudar programação há um ano e meio, e estou progredindo constantemente. Gosto de esportes, matemática, leitura e jogos. Pretendo trabalhar na área de exatas, futuramente.</Text>
                    </View>
                    <TouchableOpacity style={styles.mediaContainer} onPress={()=>{Linking.openURL('https://instagram.com/angeloaugusto06?igshid=NzZhOTFlYzFmZQ==')}}>
                        <Ionicons name={'logo-instagram'} size={RFValue(30)}/>
                        <Text style={styles.mediaText}>@angeloaugusto06</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex:0.6,
        alignItems: 'center',
        backgroundColor: '#1b98e0',
        justifyContent: 'space-evenly',
        margin: 5,
        borderRadius: 15,
    },

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    nameText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bioText:{
        fontSize: 20,
        fontWeight: '200',
        textAlign:'justify'
    },
    mediaText:{
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center'
    },
    nameContainer  : {
        
    },
    bioContainer: {

    },
    mediaContainer: {
        flexDirection: 'row'
    }
})

//<ion-icon name="logo-instagram"></ion-icon>
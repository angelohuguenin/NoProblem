import React,{Component} from "react";
import {Text, View, StyleSheet,StatusBar, Platform, SafeAreaView} from "react-native";

import AppTitle from "../components/appTitle";

export default class Routine extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'My Routine'}/>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
}) 
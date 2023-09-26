import React,{Component} from "react";
import {Text, View, StyleSheet,StatusBar, Platform, SafeAreaView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppTitle from "../components/appTitle";

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'Home'}/>
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
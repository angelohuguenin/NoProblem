import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View, StyleSheet, SafeAreaView, Image,StatusBar,Platform, } from "react-native";

import AppTitle from "../components/appTitle";

export default class Credits extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'Credits'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      }
}) 
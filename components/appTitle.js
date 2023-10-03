import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View, StyleSheet, SafeAreaView, Image,StatusBar,Platform } from "react-native";


export default class AppTitle extends Component {
    render() {
        return (
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/noProblem.jpg")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>{this.props.title}</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
      appTitle: {
        flex: 0.2,
        flexDirection: "column",
    },
    appIcon: {
        flex:0.7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#5CB9FF'
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: 'center'
      },
      appTitleText: {
        color: "black",
        fontSize: RFValue(25),
      },
}) 
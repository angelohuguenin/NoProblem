import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, VirtualizedList } from "react-native";

import AppTitle from "../components/appTitle";
import { TextInput } from "react-native-gesture-handler";

export default class Routine extends Component {

    getItem = (_data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`,
    });

    getItemCount = _data => 50;

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'My Routine'} />
                <SafeAreaView style={styles.container}>
                    <VirtualizedList
                        initialNumToRender={4}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        getItemCount={this.getItemCount}
                        getItem={this.getItem}
                        horizontal={true}
                    />
                    <VirtualizedList
                        initialNumToRender={4}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        getItemCount={this.getItemCount}
                        getItem={this.getItem}
                        horizontal={true}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const Item = ({ title }) => (
    <View style={styles.item}>
        <TextInput 
            style={styles.title}>{title}
            pla
        </TextInput>
        <TextInput style={styles.title}>{title}</TextInput>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

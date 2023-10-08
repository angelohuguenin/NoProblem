import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, TextInput, TouchableOpacity, Switch } from "react-native";

import AppTitle from "../components/appTitle";

export default class Reminders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            hour: '',
            date: '',
            isEnabled: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'My Reminders'} />
                <View style={styles.containers}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.subtitleText}>LEMBRETES SALVOS</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <Text  style={styles.subtitleText}>ADICIONAR LEMBRETE</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}
                                placeholder={"Nome do Lembrete"}
                                style={styles.inputText}
                            />
                            <View  style={styles.subInputContainer}>
                                <TextInput
                                    value={this.state.date}
                                    onChangeText={(text) => this.setState({ date: text })}
                                    placeholder={"Data"}
                                    style={styles.inputText}
                                />
                                <TextInput
                                    value={this.state.hour}
                                    onChangeText={(text) => this.setState({ hour: text })}
                                    placeholder={"Hora"}
                                    style={styles.inputText}
                                />
                            </View>
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch
                                style={{
                                    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                                }}
                                trackColor={{ false: "#767577", true: "#000" }}
                                thumbColor={this.state.isEnabled ? "#ee8249" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => this.toggleSwitch()}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MyDrawer')}>
                            <Text style={styles.buttonText} >SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    },
    upperContainer: {
        flex: 0.4,
        backgroundColor: '#006494',
        borderRadius:20,
        borderWidth:3,
        alignItems:'center'
        
        
    },
    lowerContainer: {
        flex: 0.4,
        backgroundColor: '#247ba0',
        borderRadius:20,
        borderColor:'black',
        borderWidth:3,
        alignItems:'center'
        
    },
    containers: {
        flex: 0.75,
        justifyContent: 'space-evenly'

    },
    switchContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: RFValue(20)
    },
    inputContainer:{
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:5,
        flex:0.6
    },
    subInputContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    inputText:{
        backgroundColor:'#E8F1F2',
        borderWidth:1,
        width:150,
        borderRadius:10,
        padding:2 
    },
    subtitleText:{
        fontSize:18,
        fontWeight:'500'

    },
    button: {
        backgroundColor: '#13293d',
        borderColor: '#E8F1F2',
        borderWidth: 2,
        borderRadius: 20,
        height: 50,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
    buttonText: {
        color: '#e8f1f2',
        fontWeight: 'bold'
    }
}) 
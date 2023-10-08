import React,{Component} from "react";
import {Text, View, StyleSheet,StatusBar, Platform, SafeAreaView, Image, TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppTitle from "../components/appTitle";

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/noProblem.jpg')} style={styles.logo}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('MyDrawer')}>
                    <Text style={styles.buttonText} >INICIAR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#5CB9FF'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
    logoContainer:{
        flex: 0.8,
        alignItems: 'stretch',
        justifyContent:'center',
        
        
    },
    logo:{
        //resizeMode: 'stretch',
        //height: RFValue(200),
        width: '100%'
    },
    button:{
        backgroundColor:'#13293d',
        borderColor:'#E8F1F2',
        borderWidth: 2,
        borderRadius: 20,
        height: 50,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        color: '#e8f1f2',
        fontWeight:'bold'
    }
}) 
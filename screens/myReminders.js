import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, TextInput, TouchableOpacity, Switch, FlatList } from "react-native";
import firebase from "firebase";

import AppTitle from "../components/appTitle";
import { TextInputMask } from "react-native-masked-text";
import *as Notifications from "expo-notifications";

export default class Reminders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            hour: '',
            date: '',
            isEnabled: false,
            reminders: [],
            notification: false
        }
    }
    toggleSwitch() {
        const previous_state = this.state.isEnabled;
        this.setState({ isEnabled: !previous_state });
    }
    async addReminder() {
        if (
            this.state.name &&
            this.state.hour &&
            this.state.date
        ) {
            let reminderData = {
                name: this.state.name,
                hour: this.state.hour,
                date: this.state.date,
                notification: this.state.isEnabled,
            };
            await firebase
                .database()
                .ref(
                    "/reminders/" +
                    Math.random()
                        .toString(36)
                        .slice(2)
                )
                .set(reminderData)
                .then(
                    this.setState({
                        name: '',
                        hour: '',
                        date: '',
                        isEnabled: false
                    })
                );
        } else {
            Alert.alert(
                "Error",
                "Todos os campos são obrigatórios!",
                [{ text: "OK", onPress: () => console.log("OK Pressionado") }],
                { cancelable: false }
            );
        }
    }

    componentDidMount() {
        this.fetchReminder();
    }

    fetchReminder = () => {
        firebase
            .database()
            .ref("/reminders/")
            .on(
                "value",
                snapshot => {
                    let reminders = [];
                    if (snapshot.val()) {
                        Object.keys(snapshot.val()).forEach(function (key) {
                            reminders.push({
                                key: key,
                                value: snapshot.val()[key]
                            });
                        });
                        // console.log(reminders)
                    }
                    this.setState({ reminders: reminders });
                },
                function (errorObject) {
                    console.log("A leitura falhou: " + errorObject.code);
                }
            );
    };

    renderItem = ({ item }) => {
        var reminder = item.value;
        return (
            <View style={styles.reminderContainer}>
                <Text style={styles.reminderText}>{reminder.name}</Text>
                <Text style={styles.reminderText}>{reminder.hour}</Text>
                <Text style={styles.reminderText}>{reminder.date}</Text>
                <Text style={styles.reminderText}>{reminder.notification}</Text>
            </View>
        );
    };

    keyExtractor = (item, index) => index.toString();

    handleNotifications = () => {
        if (this.state.isEnabled) {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySound: false,
                    shouldSetBadge: false,
                }),
            });
            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Look at that notification',
                    body: "I'm so proud of myself!",
                },
                trigger: null,
            });
        }
    }

    registerForPushNotificationsAsync = async () => {
        let token;

        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        // if (Device.isDevice) {
        //   const { status: existingStatus } = await Notifications.getPermissionsAsync();
        //   let finalStatus = existingStatus;
        //   if (existingStatus !== 'granted') {
        //     const { status } = await Notifications.requestPermissionsAsync();
        //     finalStatus = status;
        //   }
        //   if (finalStatus !== 'granted') {
        //     alert('Failed to get push token for push notification!');
        //     return;
        //   }
        //   token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
        //   console.log(token);
        // } else {
        //   alert('Must use physical device for Push Notifications');
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle title={'My Reminders'} />
                <View style={styles.containers}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.subtitleText}>LEMBRETES SALVOS</Text>
                        <View style={styles.reminderContainer}>
                            <Text style={styles.reminderText}>NAME</Text>
                            <Text style={styles.reminderText}>HOUR</Text>
                            <Text style={styles.reminderText}>DATE</Text>
                            <Text style={styles.reminderText}>NOTIFICATION</Text>
                        </View>
                        <FlatList
                            data={this.state.reminders}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                        />
                    </View>
                    <View style={styles.lowerContainer}>
                        <Text style={styles.subtitleText}>ADICIONAR LEMBRETE</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}
                                placeholder={"Nome do Lembrete"}
                                style={[styles.inputText, { width: 300 }]}
                            />
                            <View style={styles.subInputContainer}>
                                <TextInputMask
                                    value={this.state.date}
                                    onChangeText={(text) => this.setState({ date: text })}
                                    placeholder={"Data"}
                                    style={styles.inputText}
                                    keyboardType="numeric"
                                    type={'custom'}
                                    options={{
                                        mask: '99/99/99'
                                    }}

                                />
                                <TextInputMask
                                    value={this.state.hour}
                                    onChangeText={(text) => this.setState({ hour: text })}
                                    placeholder={"Hora"}
                                    style={styles.inputText}
                                    keyboardType="numeric"
                                    type={'custom'}
                                    options={{
                                        mask: '99:99'
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchText}> ATIVAR NOTIFICAÇÃO</Text>
                            <Switch
                                style={{
                                    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                                }}
                                trackColor={{ false: "#767577", true: "#000" }}
                                thumbColor={this.state.isEnabled ? "#1b98e0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => this.toggleSwitch()}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.addReminder()
                            this.handleNotifications()
                        }}>
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
        borderRadius: 20,
        borderWidth: 3,
        alignItems: 'center'


    },
    lowerContainer: {
        flex: 0.4,
        backgroundColor: '#247ba0',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center'

    },
    containers: {
        flex: 0.75,
        justifyContent: 'space-evenly'

    },
    switchContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: RFValue(10),
        marginBottom: RFValue(10)
    },
    switchText: {
        fontWeight: '500',
        marginRight: RFValue(10)
    },
    inputContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
        flex: 0.6
    },
    subInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    inputText: {
        backgroundColor: '#E8F1F2',
        borderWidth: 1,
        width: 150,
        borderRadius: 10,
        padding: 2
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: '500'

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
        marginTop: 5
    },
    buttonText: {
        color: '#e8f1f2',
        fontWeight: 'bold'
    },
    reminderContainer: {
        flexDirection: 'row',

    },
    reminderText: {
        marginLeft: RFValue(5),
        marginRight: RFValue(5)
    }

}) 
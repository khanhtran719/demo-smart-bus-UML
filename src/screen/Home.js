import React from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { busStop } from "../data/data";
import ListItem from "../components/ListItem";
import { useSelector } from 'react-redux';
import { windowWidth } from '../utils/Dimensions';
const Home = ({ navigation }) => {
    const appData = useSelector(state => state.User);
    return (
        <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: StatusBar.currentHeight }}>
            <ScrollView style={{ padding: 16 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold' }}>
                        Hello {appData.isLogged ? appData.username : "Smart Bus"}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../images/Smart.png')}
                            style={{ width: 40, height: 40 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        alignItems: 'center'
                    }}>
                    <MaterialIcons name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }} />
                    <TextInput placeholder="Search" />
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', paddingVertical: 16 }}>
                    Upcoming Bus Stop
                </Text>
                <View style={{ flex: 1, marginBottom: 15 }}>
                    <ImageBackground
                        source={require('../images/home-screen.png')}
                        style={{ width: windowWidth - 32, height: 150 }}
                        imageStyle={{ borderRadius: 10 }}
                    />
                </View>
                {busStop.map(item => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        distance={item.distance}
                        address={item.address}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity
                style={{
                    backgroundColor: '#8200d6',
                    paddingVertical: 14,
                    // borderRadius: 10,
                }}
                onPress={() => navigation.navigate("BookCar")}

            >
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: "bold"
                }}>
                    Book a Bus
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;
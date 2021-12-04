import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ItemBus from "../components/ItemBus";
import { options } from "../data/data";

const BookCar = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState("351 Đường Lạc Long Quân, Phường 5, Quận 11");
    const [destination, setDestination] = useState("280 An Dương Vương, Phường 4, Quận 5")
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
            <View style={{ backgroundColor: "#fff", paddingVertical: 5, paddingHorizontal: 16 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        alignItems: 'center',
                        marginBottom: 8
                    }}>
                    <Text
                        style={{
                            width: 50,
                            fontFamily: "Roboto",
                            fontSize: 14,
                            fontWeight: "bold",
                            // padding: 5
                            textAlign: "center"
                        }}
                    >
                        From
                    </Text>
                    <MaterialIcons name="location-searching"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }} />
                    <TextInput
                        // numberOfLines={1}
                        style={{ flex: 1 }}
                        placeholder="My current location"
                        onChange={(e) => setCurrentLocation(e.target.value)}
                        value={currentLocation}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            width: 50,
                            fontFamily: "Roboto",
                            fontSize: 14,
                            fontWeight: "bold",
                            // padding: 5
                            textAlign: "center"
                        }}
                    >
                        To
                    </Text>
                    <MaterialIcons name="location-on"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Input your destination"
                        onChange={(e) => setDestination(e.target.value)}
                        value={destination}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                        // backgroundColor: "#fff",
                        backgroundColor: '#8200d6',
                        borderRadius: 20,
                        paddingVertical: 4,
                        marginTop: 20,
                        marginBottom: 8
                    }}
                    onPress={() => navigation.navigate("BookingSuccess")}
                >
                    <Text
                        style={{
                            color: "#fff",
                            textAlign: "center",
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            fontSize: 25
                        }}
                    >
                        Direction
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ padding: 16, backgroundColor: "#F8F8FF" }}>
                {options.map(item => {
                    return(
                        <ItemBus item={item} key={item.id}/>
                    );
                })}
            </ScrollView>
        </View>
    );
}
export default BookCar;
import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const ItemBus = ({ item }) => {
    const navigation = useNavigation();
    const formatDistance = (distance) => {
        if (distance >= 1000){
            var a = distance / 1000;
            return a + " km";
        }
        else {
            return distance + " m";
        }
    }

    return (
        <View style={{ padding: 5, backgroundColor: '#fff', borderRadius: 5, marginBottom: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            paddingVertical: 5
                        }}
                    >
                        Number Line: {item.bus}
                    </Text>
                </View>
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                    }}
                >
                    {item.time} min
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", marginRight: 20 }}>
                            <MaterialIcons name="directions-walk" size={18} />
                            <Text
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    paddingHorizontal: 3
                                }}
                            >
                                {formatDistance(item.walk)}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialIcons name="edit-road" size={18} />
                            <Text
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    paddingHorizontal: 3
                                }}
                            >
                                {formatDistance(item.distance)}
                            </Text>
                        </View>
                    </View>
                    <Text
                        numberOfLines={1}
                        style={{
                            width: 230,
                            fontFamily: 'Roboto',
                            padding: 3,
                        }}
                    >
                        Start at Station: {item.start}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#8200d6',
                        width: 70,
                        padding: 5,
                        borderRadius: 4
                    }}
                    onPress={() => navigation.navigate("BookingSuccess")}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            padding: 3,
                            color: '#fff',
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        View
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ItemBus;
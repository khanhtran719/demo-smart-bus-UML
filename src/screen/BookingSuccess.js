import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { windowWidth } from "../utils/Dimensions";

const BookCar = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
            <View style={{ backgroundColor: "#fff", paddingVertical: 5, paddingHorizontal: 16 }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <View style={{ width: windowWidth - 160 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Roboto',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}>
                                        Number: 24
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            color: 'gray',
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            marginLeft: 5

                                        }}>
                                        15.000đ
                                    </Text>
                                </View>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: '#333',
                                        fontFamily: 'Roboto',
                                        fontSize: 12,
                                    }}>
                                    Bus arrive in 22 min at station Phạm Ngọc Thạch
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#8200d6',
                                    paddingVertical: 10,
                                    width: 60,
                                    borderRadius: 10,
                                }}
                                onPress={() => Alert.alert("Change Successfully!")}
                            >
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}>
                                    Change
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#0aada8',
                                    paddingVertical: 10,
                                    width: 60,
                                    borderRadius: 10,
                                    marginLeft: 5
                                }}
                                onPress={() => Alert.alert("Booking Successfully!")}
                            >
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}>
                                    Book
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <View style={{ width: windowWidth - 160 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            color: '#333',
                                            fontFamily: 'Roboto',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}>
                                        Number: 145
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            color: 'gray',
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            marginLeft: 5

                                        }}>
                                        10.000đ
                                    </Text>
                                </View>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: '#333',
                                        fontFamily: 'Roboto',
                                        fontSize: 12,
                                    }}>
                                    Bus arrive in 22 min at station Trạm Đăng Kiểm
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#8200d6',
                                    paddingVertical: 10,
                                    width: 60,
                                    borderRadius: 10,
                                }}
                                onPress={() => Alert.alert("Change Successfully!")}
                            >
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}>
                                    Change
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#0aada8',
                                    paddingVertical: 10,
                                    width: 60,
                                    borderRadius: 10,
                                    marginLeft: 5
                                }}
                                onPress={() => Alert.alert("Booking Successfully!")}
                            >
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}>
                                    Book
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView
                style={{
                    padding: 16,
                    backgroundColor: "#F8F8FF"
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff',
                        padding: 5,
                        borderRadius: 8,
                        textAlign: 'center',
                        marginBottom: 10
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        width: windowWidth - 120
                    }}
                    >
                        <MaterialIcons name="directions-walk" size={30} style={{
                            paddingHorizontal: 5,
                            paddingVertical: 10
                        }} />
                        <View>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: '#333',
                                    fontFamily: 'Roboto',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Walk to station Trường Phạm Ngọc Thạch
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'gray',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}
                            >
                                Start from Đường Lạc Long Quân 351
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: '#333',
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            5
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            min
                        </Text>
                        <Text
                            style={{
                                color: 'gray',
                                fontFamily: 'Roboto',
                                fontSize: 12,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            492m
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff',
                        padding: 5,
                        borderRadius: 8,
                        textAlign: 'center',
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        width: windowWidth - 120
                    }}
                    >
                        <MaterialIcons name="bus-alert" size={30} style={{
                            paddingHorizontal: 5,
                            paddingVertical: 10
                        }} />
                        <View>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: '#333',
                                    fontFamily: 'Roboto',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Take route 27: Bến Xe Buýt Sài Gòn - Âu Cơ - Bến Xe An Sương
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'gray',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}
                            >
                                Trường Phạm Ngọc Thạch - Ngã Sáu Cộng Hòa
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'gray',
                                    fontFamily: 'Roboto',
                                    fontSize: 14,
                                }}
                            >
                                Bus arrive in 14 min
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: '#333',
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            12
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            min
                        </Text>
                        <Text
                            style={{
                                color: 'gray',
                                fontFamily: 'Roboto',
                                fontSize: 12,
                                fontWeight: 'bold',
                                width: 40,
                                textAlign: 'center'
                            }}
                        >
                            4.4 km
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default BookCar;
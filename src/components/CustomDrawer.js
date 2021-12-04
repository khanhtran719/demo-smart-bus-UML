import React from "react";
// import { NativeBaseProvider, Box } from "native-base";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { actLogout } from "../actions";

const CustomDrawer = (props) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actLogout());
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}
            >
                <ImageBackground
                    source={require('../images/menu-bg.jpeg')}
                    style={{ padding: 20 }}
                >
                    <Image
                        source={require('../images/Smart.png')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto', marginBottom: 5, fontWeight: "500" }}>Smart Bus</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Roboto', marginRight: 5, fontWeight: "400" }}>69,000 VND</Text>
                        <MaterialIcons name='money' size={20} color="white" />
                    </View>
                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderColor: '#ccc'}}>
                <TouchableOpacity onPress={handleLogout} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="logout" size={22} />
                        <Text
                            style={{ 
                                fontSize: 15,
                                fontFamily: 'Roboto',
                                marginLeft: 5,
                                fontWeight: "bold"
                            }}
                        >
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CustomDrawer;
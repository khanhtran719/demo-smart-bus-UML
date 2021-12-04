import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/stores';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import HomeStack from './src/navigation/HomeStack';
import Account from './src/screen/Account';
import Region from './src/screen/Region';
import CustomDrawer from "./src/components/CustomDrawer";
import History from "./src/screen/History";

import { MaterialIcons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawer {...props} />}
                    screenOptions={{
                        headerShown: false,
                        drawerActiveBackgroundColor: "#aa18ea",
                        drawerActiveTintColor: "#fff",
                        drawerInactiveTintColor: "#333",
                        drawerLabelStyle: {
                            marginLeft: -25,
                            fontFamily: 'Roboto',
                            fontSize: 15,
                            fontWeight: "bold"
                        }
                    }}
                >
                    <Drawer.Screen name="HomeStack" component={HomeStack}
                        options={{
                            drawerIcon: ({ color }) => (
                                <MaterialIcons name="home" size={22} color={color} />
                            ),
                            drawerLabel: 'Home'       
                        }}
                    />
                    <Drawer.Screen name="Account" component={Account}
                        options={{
                            drawerIcon: ({ color }) => (
                                <MaterialIcons name="person-outline" size={22} color={color} />
                            )
                        }}
                    />
                    <Drawer.Screen name="History" component={History}
                        options={{
                            drawerIcon: ({ color }) => (
                                <MaterialIcons name="history" size={22} color={color} />
                            )
                        }}
                    />
                    <Drawer.Screen name="Region" component={Region}
                        options={{
                            drawerIcon: ({ color }) => (
                                <MaterialIcons name="my-location" size={22} color={color} />
                            )
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
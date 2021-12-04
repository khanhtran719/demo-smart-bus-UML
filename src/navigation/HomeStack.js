import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "../screen/Home";
import BookCar from "../screen/BookCar";
import BookingSuccess from "../screen/BookingSuccess";

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="BookCar" component={BookCar}
                options={{
                    headerTitle: "",
                }}
            />
            <Stack.Screen name="BookingSuccess" component={BookingSuccess} 
                options={{
                    headerTitle: "",
                }}
            />
        </Stack.Navigator>
    );
}
export default HomeStack;
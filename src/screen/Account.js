import React, { useState } from 'react';
import { View, Button, StatusBar } from "react-native";
import { useDispatch } from 'react-redux';
import { actLoginSuccess } from "../actions/index";
const Account = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("Nguyên Khánh");

    const handleLogin = () => {
        dispatch(actLoginSuccess(username));
        // navigation.navigate("HomeStack");
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            padding: StatusBar.currentHeight
        }}>
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
}

export default Account;
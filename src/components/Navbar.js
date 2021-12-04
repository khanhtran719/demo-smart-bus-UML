import React, { useState } from 'react';
import {
    HStack,
    IconButton,
    Icon,
    Text,
    NativeBaseProvider,
    Box,
    StatusBar,
    Select,
    VStack,
    CheckIcon,
    Center,
} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

const Navbar = () => {
    const [service, setService] = useState("")

    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
            <Box safeAreaTop backgroundColor="#6200ee" />
            <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Chọn khu vực"
                        placeholder="Chọn khu vực"
                        mt={1} ml={2}
                        onValueChange={(itemValue) => setService(itemValue)}
                    >
                        <Select.Item label="TP Hồ Chí Minh" value="sg" />
                        <Select.Item label="Hà Nội" value="hn" />
                    </Select>
            </HStack>
            <HStack space="2">
                <IconButton icon={<Icon as={<MaterialIcons name='qr-code' />} size='sm' color="white" />} />
            </HStack>
        </HStack>
        </NativeBaseProvider >
    );
}

export default Navbar;
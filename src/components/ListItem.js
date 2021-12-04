import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

const ListItem = ({ title, distance, address }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={require('../images/bus-stop.png')}
                    style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
                />
                <View style={{ width: windowWidth - 180 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: '#333',
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                            {title}
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
                            {distance + "m"}
                        </Text>
                    </View>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto',
                            fontSize: 12,
                        }}>
                        {address}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#0aada8',
                padding: 10,
                width: 80,
                borderRadius: 10,
            }}>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                }}>
                    Details
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default ListItem;
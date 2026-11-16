import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#c8c8c8',
        borderWidth: 2,
        borderColor: '#777777',
        padding: 8,
        marginBottom: 16,
    },
    nameBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555',
        paddingVertical: 8,
    },
    iconCircle: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    nameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    descriptionBox: {
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderColor: '#555555',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 6,
    },
    descriptionText: {
        textAlign: 'center',
    },
    picture: {
        width: '100%',
        height: 220,
    },
});

const Boat = ({name, description, picture, icon_name, icon_color}) => {
    return (
        <View style={styles.card}>
            <View style={styles.nameBar}>
                <View style={styles.iconCircle}>
                    <FontAwesome6 name={icon_name} size={18} color={icon_color}/>
                </View>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <Image source={picture} style={styles.picture}/>
        </View>
    );
};
export default Boat;

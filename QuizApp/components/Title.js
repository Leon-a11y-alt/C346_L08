import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 12,
        backgroundColor: 'white',
        borderBottomWidth: 3,
        borderColor: 'steelblue',
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

const Title = ({text, icon_name, icon_color}) => {
    return (
        <View style={styles.titleBar}>
            <FontAwesome6 name={icon_name} size={26} color={icon_color}/>
            <Text style={styles.titleText}>{text}</Text>
        </View>
    );
};

export default Title;

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#999999',
        marginHorizontal: 10,
        marginBottom: 16,
        padding: 6,
    },
    picture: {
        width: '100%',
        height: 260,
        backgroundColor: '#e6eef5',
    },
    questionBar: {
        backgroundColor: 'steelblue',
        borderWidth: 1,
        borderColor: '#2f5f86',
        paddingVertical: 6,
        marginTop: 8,
        alignItems: 'center',
    },
    questionText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    pickerBox: {
        borderWidth: 1,
        borderColor: '#999999',
        marginTop: 8,
    },
});

const Question = ({picture, question, option1, option2, option3, answer, onValueChange}) => {
    return (
        <View style={styles.card}>
            <Image source={picture} style={styles.picture} resizeMode="contain"/>
            <View style={styles.questionBar}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
            <View style={styles.pickerBox}>
                <Picker selectedValue={answer} onValueChange={onValueChange}>
                    <Picker.Item label='Select an answer' value=''/>
                    <Picker.Item label={option1} value={option1}/>
                    <Picker.Item label={option2} value={option2}/>
                    <Picker.Item label={option3} value={option3}/>
                </Picker>
            </View>
        </View>
    );
};

export default Question;

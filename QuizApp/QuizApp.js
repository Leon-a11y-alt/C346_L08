import React, {useState} from 'react';
import {ScrollView, View, Button, Alert, StyleSheet} from 'react-native';
import Title from './components/Title';
import Question from './components/Question';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
    },
    buttonBox: {
        marginHorizontal: 10,
        marginBottom: 50,
        borderWidth: 2,
        borderColor: '#2f5f86',
    },
});

const QuizApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const checkAnswers = () => {
        let score = 0;
        if (answer1 == 'Eiffel Tower') {
            score = score + 1;
        }
        if (answer2 == 'Taj Mahal') {
            score = score + 1;
        }
        if (answer3 == 'Colosseum') {
            score = score + 1;
        }

        let feedback = 'You can do better next time.';
        if (score == 3) {
            feedback = 'Well done!';
        } else if (score >= 1) {
            feedback = 'Good try! Keep exploring the world.';
        }

        Alert.alert('You got ' + score + ' out of 3 correct!', feedback);
    };

    return (
        <ScrollView style={styles.container}>
            <Title text="World Landmarks Quiz" icon_name="earth-asia" icon_color="#0077B6"/>

            <Question picture={require('./img/eiffel_tower.jpg')}
                      question="Which landmark is this?"
                      option1="Tokyo Tower" option2="Eiffel Tower" option3="Blackpool Tower"
                      answer={answer1}
                      onValueChange={(value) => setAnswer1(value)}/>
            <Question picture={require('./img/taj_mahal.jpg')}
                      question="Which landmark is this?"
                      option1="Humayun's Tomb" option2="Red Fort" option3="Taj Mahal"
                      answer={answer2}
                      onValueChange={(value) => setAnswer2(value)}/>
            <Question picture={require('./img/colosseum.jpg')}
                      question="Which landmark is this?"
                      option1="Colosseum" option2="Parthenon" option3="Pantheon"
                      answer={answer3}
                      onValueChange={(value) => setAnswer3(value)}/>

            <View style={styles.buttonBox}>
                <Button title="Submit Answers" color="steelblue" onPress={checkAnswers}/>
            </View>
        </ScrollView>
    );
};

export default QuizApp;

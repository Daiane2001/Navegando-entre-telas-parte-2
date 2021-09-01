import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'; /*importando o arquivo styles para poder usar na formatação dessa tela*/

export default function screen2(){

    const navi = useNavigation(); //navi é um objeto para fazer a navegação

    function naviToMenu(){
        /**Navegar para a tela 2 */
        navi.navigate('menu'); //falando para qual tela quero ir

    };

    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.text}
            >Bem-vindo(a) a tela 2!</Text>
            <TouchableOpacity
                style={styles.button} onPress={naviToMenu}
            >
                <Text
                    style={styles.textButton}
                >
                    Menu
                </Text>
            </TouchableOpacity>
        </View>
    );
}
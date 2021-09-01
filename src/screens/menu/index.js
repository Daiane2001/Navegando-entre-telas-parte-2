import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'; /*importando o arquivo styles para poder usar na formatação dessa tela*/

export default function menu(){

    const navi = useNavigation(); //navi é um objeto para fazer a navegação

    function naviToScreen1(){
        /**Navegar para a tela 1 */
        navi.navigate('screen1'); //falando para qual tela quero ir
    };

    function naviToScreen2(){
        /**Navegar para a tela 2 */
        navi.navigate('screen2'); //falando para qual tela quero ir

    };

    function naviToScreen3(){
        /**Navegar para a tela 3 */
        navi.navigate('screen3'); //falando para qual tela quero ir

    };

    function naviToScreen4(){
        /**Navegar para a tela 4 */
        navi.navigate('screen4'); //falando para qual tela quero ir

    };

    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.text}
            >Bem-vindo(a) ao menu</Text>
            <TouchableOpacity
                style={styles.button} onPress={naviToScreen1}
            >
                <Text
                    style={styles.textButton}
                >
                    Tela 1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} onPress={naviToScreen2}
            >
                <Text
                    style={styles.textButton}
                >
                    Tela 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} onPress={naviToScreen3}
            >
                <Text
                    style={styles.textButton}
                >
                    Tela 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} onPress={naviToScreen4}
            >
                <Text
                    style={styles.textButton}
                >
                    Tela 4
                </Text>
            </TouchableOpacity>
        </View>
    );

    
}
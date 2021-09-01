import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appStack = createNativeStackNavigator();

import menu from './screens/menu/index';
import screen1 from './screens/screen1/index';
import screen2 from './screens/screen2/index';
import screen3 from './screens/screen3/index';
import screen4 from './screens/screen4/index';

export default function Routes(){

    return(
    /**NavigationContainer é o Container que engloga toda a aplicação*/
    /**appStack.Navigator serve para informar o tipo de navegação que estou usando = Stack */
    /**component={screen2} é a variável que importei na linha 9 e o name='screen2' é o que vou usar para chamar essa navegação*/
    /**initialRouteName='screen1' serve para dizer qual tela vai aparecer primeiro*/
        <NavigationContainer> 
            <appStack.Navigator initialRouteName='menu' >
                <appStack.Screen name='menu' component={menu} options={{headerShown: false}} />
                <appStack.Screen name='screen1' component={screen1} options={{headerShown: false}} />
                <appStack.Screen name='screen2' component={screen2} options={{headerShown: false}} />
                <appStack.Screen name='screen3' component={screen3} options={{headerShown: false}} />
                <appStack.Screen name='screen4' component={screen4} options={{headerShown: false}} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}
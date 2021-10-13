import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity, Image} from 'react-native'

//  NA LINHA 18, O PARAMETRO CERTO É HOME, TROQUEI PARA FACILITAR A REALIZAÇÃO DA PAG REPOSITORIES
//import homeInfo from './pages/home'; 
import Repositories from './pages/repositories';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= 'home'
                 component={Repositories}
                  options={{
                        title: "GitViewer",
                        headerTitleAlign: 'center',
                        headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                      },
                  }}
                   />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './pages/home/home';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= 'home'
                 component={Home}
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
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './pages/home/home';
import repositories from "./pages/repositories/repositories";

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= 'home'
                 component={repositories}
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
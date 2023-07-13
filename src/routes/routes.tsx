import React from "react";
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../pages/home/home';
import Repositories from "../pages/repositories/repositories";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
                options={{
                    title: "GitViewer",
                    headerTitleAlign: 'center',
                    headerTitleStyle:{
                    fontFamily: 'Montserrat_700Bold'
                  },
              }}
            />
            <Screen 
                name='Repositories'
                component={Repositories}
                options={{
                    title: "GitViewer",
                    headerTitleAlign: 'center',
                    headerTitleStyle:{
                    fontFamily: 'Montserrat_700Bold'
                  },
              }}
            />

            
        </Navigator>
    )
}
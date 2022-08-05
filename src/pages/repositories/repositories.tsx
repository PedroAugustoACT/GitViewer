import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Linking } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

import { styles } from './styles';

import axios from 'axios';

import { IRepList } from './IRepList';


export default function Repositories(){


    const [ reps, setReps] = useState<IRepList[]>([])

    useEffect(() => {
        axios.get("https://api.github.com/users/PedroAugustoACT/repos")
        .then((response)=>{
        setReps(response.data)
          //console.log(response.data)
        })
        .catch(()=>{
          console.log("ERROR")
        })
      }, [])


        return(
            <ScrollView style={styles.mainBackground}>

                <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Feather name='arrow-left' size={25}/>
                        </TouchableOpacity>
                </View>

                <View style={styles.repBackground}>

                    {
                        reps.map((data) =>
                            <View style={styles.repBox}>
                                <Text style={styles.repName}>{data.name}</Text>
                                <Text style={styles.repPublic}>Public</Text>
                                <TouchableOpacity>
                                    <Text style ={styles.repLink} onPress={() => { Linking.openURL(data.html_url); }} >See on git</Text>
                                </TouchableOpacity>    
                            </View>
                        )

                    }
                    
                </View>
            </ScrollView>
        )
    }

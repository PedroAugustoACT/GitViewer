import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Linking } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';

import axios from 'axios';

import { IRepList } from './IRepList';

type ParamsProps = {
    username: string,
}


export default function Repositories(){

    const route = useRoute()
    const { username } = route.params as ParamsProps

    const [ reps, setReps] = useState<IRepList[]>([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response)=>{
        setReps(response.data)
          //console.log(response.data)
        })
        .catch(()=>{
          console.log("ERROR")
        })
      }, [])


        return(

            <View style={styles.scroll}>
                <ScrollView style={styles.mainBackground}>

                    <View style={styles.repBackground}>

                        {
                            reps.map((data) =>
                                <View style={styles.repBox}>
                                    <Text style={styles.repName}>{data.name}</Text>
                                    <Text style={styles.repPublic}>Public</Text>
                                    <View style={styles.containerDetails}>
                                        <View style={styles.boxDetails}> 
                                            <Text style={styles.textDetails}>Language</Text>
                                            <Text style={styles.textDetails}>{data.language}</Text>
                                        </View>
                                        <View style={styles.boxDetails}> 
                                        <Feather name='star' size={13}/>
                                            <Text style={styles.textDetails}>{data.stargazers_count}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style ={styles.repLink} onPress={() => { Linking.openURL(data.html_url); }} >See on git</Text>
                                    </TouchableOpacity>    
                                </View>
                            )

                        }
                        
                    </View>
                </ScrollView>

            </View>
        )
    }

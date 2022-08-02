import React from 'react';
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button,  TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { styles } from './styles';


    export default function repositories(){
        return(
            <View 
            style={styles.mainBackground}>

                <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Feather name='arrow-left' size={25}/>
                        </TouchableOpacity>
                </View>

                <View style={styles.repBackground}>
                    
                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style ={styles.repLink}>Ver no Git</Text>
                        </TouchableOpacity>    
                    </View>

                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style ={styles.repLink}>Ver no Git</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style ={styles.repLink}>Ver no Git</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style ={styles.repLink}>Ver no Git</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style ={styles.repLink}>Ver no Git</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    
                </View>




            </View>
        )
    }

import React from 'react';
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'


    export default function repositories(){
        return(
            <View 
            style={styles.mainBackground}>

                <View style={styles.repBackground}>
                    <View style={styles.repBox}>
                        <Text style={styles.repName}>Organizador_Financas</Text>
                        <Text style={styles.repPublic}>Public</Text>
                        <TouchableOpacity>
                            <Text style = {styles.repLink}>Link</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>




            </View>
    
        )


        
        
    }

    const styles = StyleSheet.create({

        mainBackground:{
            backgroundColor: 'transparent',
            height:'100%',
            display: 'flex',
            justifyContent: 'center',
            
        },
        repBackground:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            paddingHorizontal: 15,
            
        },
        
        repBox:{
            width: '70%',
            borderRadius: 4,
            backgroundColor: '#FFF',
            height: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"column",
           
        },
        repName:{
            fontFamily: 'Montserrat_700Bold',
            position: 'absolute',
            top: 15,
            fontSize: 18
        },
        repPublic:{
            fontFamily: 'Montserrat_400Regular',
            fontSize: 10,
            position: 'absolute',
            top: 45,
        },
        repLink:{
            fontFamily: 'Montserrat_500Medium',
            
        },


    });

import React from "react";
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles';



const Home = (props : any) => {

    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <TextInput
                    placeholder='Type user'
                    />
                    <TouchableOpacity>
                      <Feather name="search" size={24} color='black'/>  
                    </TouchableOpacity> 
                </View>  
            </View>

            <View style={styles.background}>
              <View style={styles.main}>
                <Image style={styles.userImage}
                source={{uri: props.url}}/>
                <Text style={styles.username}>PedroAugustoACT</Text>
                <Text style={styles.userDescription}>DEV TATUL</Text>

                <View style={styles.intireBox}>  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Following</Text>
                    <Text style={styles.followingNumber}>12</Text>
                  </View>
                    
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Repositories</Text>
                    <Text style={styles.followingNumber}>23</Text>    
                  </View>   
                  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Followers</Text>
                    <Text style={styles.followingNumber}>50</Text>    
                  </View>
                </View>     
              </View>
            </View>
            <View style= {styles.boxButton}>
              <TouchableOpacity style={styles.buttonRep}>
                <Text style = {styles.textButton}>Repositories</Text> 
                <Feather name="arrow-right" size={22} color='#778899' />  
              </TouchableOpacity> 
            </View> 
            <View style={styles.footer}>
              <View >
                <Text style={styles.footerText}>Developed by Pedro Augusto {'\u00A9'}</Text>
              </View>
              
            </View>
        </View>

    )

}

export default Home;
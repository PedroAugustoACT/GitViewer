import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button, TouchableOpacity, Alert} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles';

import Repositories from "../repositories/repositories";

const initialValues = {
   username: '', img: '', description:'', following:'', followers:'', reps:'',
};

function Home () {

  const [ user, setUser] = useState(initialValues)

 

  function getUser(){
    
    fetch(`https://api.github.com/users/${user.username}`)
    .then(response => response.json())
        .then( json => {
          const userProfile = {
            username: json.login,
            img: json.avatar_url,
            description: json.bio,
            following: json.following,
            followers: json.followers,
            reps:json.public_repos,
          };

          setUser(userProfile);
        })
        .catch(() => {
          Alert.alert('Error', 'Could not load user data');
          
        })
      }      

    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <TextInput
                    placeholder='Type user'
                    value={user.username}
                    onChangeText={(newUsername)=> setUser({...user, username:newUsername})}
                    />
                    <TouchableOpacity onPress={getUser}>
                      <Feather name="search" size={24} color='black'/>  
                    </TouchableOpacity> 
                </View>  
            </View>

            <View style={styles.background}>
              <View style={styles.main}>
                <Image style={styles.userImage}
                  source={{uri: user.img}}
                />
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.userDescription}>{user.description}</Text>

                <View style={styles.intireBox}>  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Following</Text>
                    <Text style={styles.followingNumber}>{user.following}</Text>
                  </View>
                    
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Repositories</Text>
                    <Text style={styles.followingNumber}>{user.reps}</Text>    
                  </View>   
                  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Followers</Text>
                    <Text style={styles.followingNumber}>{user.followers}</Text>    
                  </View>
                </View>     
              </View>
            </View>
            <View style= {styles.boxButton}>
              <TouchableOpacity style={styles.buttonRep} onPress={Repositories}>
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
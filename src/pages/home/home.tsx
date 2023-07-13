import React, { useEffect, useState } from "react";
import {View, Text, Image, TouchableOpacity, Alert, Platform} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';

type StackPramList = {
  Home: undefined,
  Repositories: undefined,
}



const initialValues = {
   username: '', img: '', description:'', following:'', followers:'', reps:'',
};

function Home () {

  const [ isUser, setIsUser] = useState(initialValues)

  const [isName, setIsName] = useState('')

  const [isShow, setIsShow] = useState(true);

  const navigation = useNavigation()

  function openScreen(){
    navigation.navigate('Repositories', {username: isName})
  }

  function getUser(){
    
    fetch(`https://api.github.com/users/${isUser.username}`)
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
          setIsUser(userProfile);
          console.log(userProfile.username)
          setIsName(userProfile.username)
        })
        .catch(() => {
          Alert.alert('Error', 'Could not load user data');
        })
        setIsShow(false)
      }    
      
    return (
      <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      extraScrollHeight={Platform.select({ ios: 100, android: 0 })}
    > 
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <TextInput
                    placeholder='Type user'
                    value={isUser.username}
                    onChangeText={(newUsername)=> setIsUser({...isUser, username:newUsername})}
                    />
                    <TouchableOpacity onPress={getUser}>
                    <FontAwesome name="search" size={24} color="black" />
                    </TouchableOpacity> 
                </View>
            </View>
            {isName === undefined?
            <Text style={styles.txtError}>Digite um usuário válido</Text> :
            <></>  
          }
            {isName === undefined? 
              <></>
              :
              isShow?  <></> 
              : <><View style={styles.background}>
              <View style={styles.main}>
                <Image style={styles.userImage}
                  source={{ uri: isUser.img }} />
                <Text style={styles.username}>{isName}</Text>
                <Text style={styles.userDescription}>{isUser.description}</Text>

                <View style={styles.intireBox}>
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Following</Text>
                    <Text style={styles.followingNumber}>{isUser.following}</Text>
                  </View>

                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Repositories</Text>
                    <Text style={styles.followingNumber}>{isUser.reps}</Text>
                  </View>

                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Followers</Text>
                    <Text style={styles.followingNumber}>{isUser.followers}</Text>
                  </View>
                </View>
              </View>
            </View><View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttonRep} onPress={openScreen}>
                  <Text style={styles.textButton}>Repositories</Text>

                </TouchableOpacity>
              </View></>
            } 
            <View style={styles.footer}>
              <View >
                <Text style={styles.footerText}>Developed by Pedro Augusto {'\u00A9'}</Text>
              </View>
              
            </View>
        </View>
        </KeyboardAwareScrollView>
    )

}

export default Home;
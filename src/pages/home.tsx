import React from 'react';
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';


const homeInfo = (props : any) =>
{
    return(
        <View 
        style={{backgroundColor: 'transparent',
                height:'100%',
                display: 'flex',
                justifyContent: 'center',}}
        >
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
                <Text style={styles.username}>{props.name}</Text>
                <Text style={styles.userDescription}>{props.bio}</Text>

                <View style={styles.intireBox}>  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Following</Text>
                    <Text style={styles.followingNumber}>{props.following}</Text>
                  </View>
                    
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Repositories</Text>
                    <Text style={styles.followingNumber}>{props.public_repos}</Text>    
                  </View>   
                  
                  <View style={styles.boxFollowing}>
                    <Text style={styles.userFollowing}>Followers</Text>
                    <Text style={styles.followingNumber}>{props.followers}</Text>    
                  </View>
                </View>     
              </View>
            </View>
            <View style= {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.buttonRep}>
                <Text style = {{color: '#778899', fontFamily: 'Montserrat_500Medium', }}>Repositories</Text> 
                <Feather name="arrow-right" size={22} color='#778899' />  
              </TouchableOpacity> 
            </View> 
            <View style={styles.footer}>
              <View >
                <Text style={styles.footerText}>Developed by Pedro Augusto {'\u00A9'}</Text>
              </View>
              
            </View>  
        </View>
          
    );  
}
export default homeInfo;


const styles = StyleSheet.create({
      header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        marginVertical: 20,
        position: 'absolute',
        top:0
      },
      inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        width:'70%',
        backgroundColor: '#FFF',
        elevation: 2,
        height:37,
        borderRadius: 10,
        
      },
      input:{
        fontFamily: "Montserrat_500Medium",
        paddingHorizontal: 10,
        alignItems: 'center',
        fontSize: 13,
        width: '90%'
      },
      background:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      main:{
        backgroundColor: '#778899',
        paddingHorizontal: 20,
        padding: 15,
        borderRadius: 10,
        width: '80%',
        height: 400,
        display: "flex",
        alignItems: 'center',
        justifyContent: "flex-start",
      }, 
      userImage:{
        borderRadius: 50,
        height: 110,
        width: 110,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center', 
      }, 
      username:{
        fontFamily: "Montserrat_500Medium",
        color: '#FFF',
        paddingVertical: 30,
        fontSize: 20,
      }, 
      userDescription:{
        fontFamily: "Montserrat_400Regular",
        paddingVertical: 10,
        color: '#FFF',
        fontSize: 12,
        textAlign: "center",
        overflow: 'hidden'
      },
      intireBox:{
        flexDirection:"row",
        
      },
      boxFollowing:{
        flexDirection:"column",
        paddingVertical: 52,
        marginRight: 15,
        marginLeft: 15,
      },
      userFollowing:{
        fontFamily: "Montserrat_500Medium",
        color: '#FFF',
        fontSize: 14,
      },
      followingNumber:{
        fontFamily: "Montserrat_500Medium",
        color: '#FFF',
        textAlign: "center",
        fontSize: 14, 
      },
      buttonRep:{
        display: 'flex',
        padding: 20,
        width: '50%',
        height: '10%', 
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#778899", 
        borderRadius: 10,
      },
      footer:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText:{
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        top: 120,
      },
      
     
});

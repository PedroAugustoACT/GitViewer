import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        height:'100%',
        display: 'flex',
    },
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor: 'transparent',
        marginVertical: 20,
        //position: 'absolute',
        top:10,
      },
      inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width: 250,
        height:37,
        padding: 5,
        backgroundColor: '#FFF',
        elevation: 2,
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
        borderRadius: 60,
        height: 130,
        width: 130,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 5,
      }, 
      username:{
        fontFamily: "Montserrat_500Medium",
        color: '#FFF',
        fontSize: 20,
        marginTop: 5,
      }, 
      userDescription:{
        fontFamily: "Montserrat_400Regular",
        color: '#FFF',
        fontSize: 12,
        textAlign: "center",
        overflow: 'hidden',
        marginTop: 1,
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
      boxButton:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'12%',
        marginTop: 0,
      },
      buttonRep:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        width: '50%',
        height: '40%',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#778899',
      },
      textButton:{
        color: '#778899',
        fontFamily: 'Montserrat_500Medium',
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
})
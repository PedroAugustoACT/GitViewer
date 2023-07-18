import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

   scroll:{
        flex: 1,
   },
    mainBackground:{
        backgroundColor: 'transparent',
        //height:'100%',
        marginTop: 10,
        flex: 1,
        //justifyContent: 'center',
        
    },
    buttonContainer:{
        marginLeft: 25,
        width: '50%',
        marginBottom: 10,
        marginTop: 5,
    },
    repBackground:{
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        
    },
    repBox:{
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#FFF',
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
        marginBottom: 19,
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
        top: 40,
    },
    containerDetails:{
        display: 'flex',
        alignItems: 'center',
        flexDirection:"row",
    },
    boxDetails:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 15,
        width: '40%',
    },
    textDetails:{
        fontSize: 10,
    },
    repLink:{
        fontFamily: 'Montserrat_500Medium',
        fontSize: 15,
        top: 20,
    },
    loadingContainer:{
        position: 'absolute',
        marginTop: 300
    },
    loadingIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
    


});
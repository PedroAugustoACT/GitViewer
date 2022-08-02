import { StyleSheet } from 'react-native';
import { flingGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';

export const styles = StyleSheet.create({

    mainBackground:{
        backgroundColor: 'transparent',
        height:'100%',
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
        alignItems: 'center'
        
    },
    repBox:{
        width: '85%',
        borderRadius: 40,
        backgroundColor: '#FFF',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
        marginBottom: 19
       
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
    repLink:{
        fontFamily: 'Montserrat_500Medium',
        fontSize: 17,
        top: 20,
        
    },


});
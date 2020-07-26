
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText : {
        paddingTop : 30,
        fontSize : 40,
        fontWeight : 'bold',
        paddingLeft : 20
    },
    headerImage : {
        width : 60,
        height : 60,
        borderRadius : 50
    },
    inputContainer : {
        backgroundColor : "rgba(200,200,200,0.5)",
        width : width / 1.1,
        padding : 9 ,
        marginTop : 5,
        borderRadius : 20,
        shadowColor : "#000",
        shadowOffset : {
            height : 2, 
            width : 2
        },
        shadowOpacity : 0.8,
        shadowRadius : 1.3
    },
    input : {
        color : "#000",
        marginLeft : 30
    },
    imageContainer : {
        flexDirection : 'row',
        marginTop : 20,
        marginLeft : 10
    },
    imageView : {
        width : width / 2.5,
        height : height / 3.5,
        // borderWidth : 1,
        // borderColor : '#000',
        marginHorizontal : 10
    },
    image : {
        width : "100%",
        height : "100%",
        borderRadius : 20
    },
    imageButton: {
        width : '100%',
        height : '30%',
        backgroundColor : 'rgba(0,0,0,0.3)',
        position : 'absolute',
        bottom : 0,
        left : 0,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20 
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        textAlign : 'center',
        color : 'white'
    },

    description : {
        fontSize : 12,
        textAlign : 'center',
        color : 'white',
        marginVertical : 3
    },

})
import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    
    container:{
        backgroundColor: '#eceff1',
        width:Dimensions.get('window').width/2.5,
        marginTop:10,
        marginLeft:8,
        marginRight:8,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:5,
        borderRadius:10,
        flex:1,
        
    },
    image:{
        height: Dimensions.get('window').height / 3.8,
        borderRadius: 8,
    },

    title:{
        fontWeight:"bold",
        color:"black",
    },
    price:{
        fontSize:17,
        fontWeight:"bold",
    },

    main_title:{
        paddingTop:10,
        paddingLeft:10,
        fontSize:25,
        fontWeight:"bold",
        color:"purple",
        flex:1,
        position:"relative",
    },
    stock:{
        fontSize:15,
        fontWeight:"bold",
        color:"red",
    },
    searchbar:{
        width:Dimensions.get("window").width/1.03,
        backgroundColor: '#eceff1',
        padding:10,
        marginRight:5,
        marginLeft:5,
        borderRadius:10,
        flex:1,
        position:'relative',
    },
   
})
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { MaterialIcons ,FontAwesome } from '@expo/vector-icons';



const Profile = ()=>{
    return(
        <View style={styles.root}>
            <LinearGradient 
                colors={["#0033ff","#6bc1ff"]}
                style={{height:"20%"}}
            />
            <View style={styles.styleImage}>
            <Image 
                style={{width:100,height:100,borderRadius:50}}
                source={{uri:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
            />
            </View>
            <View style={styles.styleInfo}>
                <Title>Rohan Roy</Title>
                <Text style={{fontSize:18}}>React Native Developer</Text>
            </View>
            <Card style={styles.mycard}>
                <View style={styles.cardContain}>
                <MaterialIcons  name="email" size={32} color="#006aff" />
                <Text style={styles.myText}>Rohanroy@gmail.com</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContain}>
                <FontAwesome name="phone" size={32} color="#006aff" />
                <Text style={styles.myText}>8945670277</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContain}>
                <MaterialIcons name="attach-money" size={32} color="#006aff" />
                <Text style={styles.myText}>8 LPA</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:5}}>
            <Button icon="account-edit" mode="contained"theme={theme} onPress={() => console.log('Pressed')}>
                Edit
            </Button> 
            <Button icon="delete" mode="contained"theme={theme} onPress={() => console.log('Pressed')}>
                Fire Employee
            </Button> 
            </View>
        </View>
    )
}
const theme = {
    colors:{
        primary:'#006aff'
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    styleImage:{
        alignItems:"center",
        marginTop:-50
    },
    styleInfo:{
        alignItems:"center",
        margin:15
    },
    mycard:{
        margin:5    
    },
    cardContain:{
        flexDirection:"row",
        padding:8
    },
    myText:{
        fontSize:18,
        marginTop:3,
        marginLeft:8
    }
})

export default Profile
import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper' ;

 const Home = (props)=>{

    const data = [
        {id:"1",name:"Rohan",email:"rohanro@123",salary:"5 LPA",phone:"1239",position:"Web Developer",picture:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"2",name:"Virat",email:"virat@123",salary:"6 LPA",phone:"1456",position:"React Native Developer",picture:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"3",name:"Varun",email:"varun@123",salary:"7 LPA",phone:"1234",position:"Full Stack Developer",picture:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        
    ]

    const renderList = (item)=>{
        return(
            <Card style={styles.mycard} key={item.id}
            onPress={()=>props.navigation.navigate('Profile',{item})} 
            >
            <View style={styles.cardView}>
            <Image 
                style={{width:60,height:60,borderRadius:30}}
                source={{uri:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
                />
                <View style={styles.textStyle}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.position}</Text>
                </View>
            </View>
            </Card>
        )
    }

    return(
        <View style={{flex:1}}>
        <FlatList 
        data={data}
        renderItem={({item})=>{
            return renderList(item)
        }}
        keyExtractor={(item)=>{item.id}}
        />
        
        <FAB
        onPress={()=>props.navigation.navigate("Create")}
        style={styles.fab}
        small={false}
        icon="plus"
        />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        padding:5,
        // backgroundColor:"#fff"
    },
    cardView:{
        flexDirection:"row"
    },
    textStyle:{
        marginLeft:10
    },
    text:{
        fontSize:20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:"#006aff"
      },
   
})

export default Home
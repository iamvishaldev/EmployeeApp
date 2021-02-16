import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper' ;

 const Home = ()=>{

    const data = [
        {id:1,name:"Ramesh",position:"UI/UX Developer"},
        {id:2,name:"Suresh",position:"React Js Developer"},
        {id:3,name:"Ganesh",position:"React Native Developer"},
        {id:4,name:"Devesh",position:"Full Stack Developer"},
        {id:5,name:"Jack",position:"MERN Developer"},
        {id:6,name:"Mack",position:"ML Developer"},
        {id:7,name:"Rock",position:"Node Js Developer"},
        {id:8,name:"Jon",position:"Backend Developer"},
        {id:9,name:"Roj",position:"AWS Developer"},

    ]

    const renderList = (item)=>{
        return(
            
            <Card style={styles.mycard} key={item.id}>
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
        <View>
        <FlatList 
        data={data}
        renderItem={({item})=>{
            return renderList(item)
        }}
        keyExtractor={(item)=>`${item.id}`}
        />
        
        <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => console.log('Pressed')}
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
      },
   
})

export default Home
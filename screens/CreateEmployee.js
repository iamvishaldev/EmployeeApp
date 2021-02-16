import React,{useState} from 'react';
import { StyleSheet,Text, View,Modal} from 'react-native';
import { TextInput,Button} from 'react-native-paper';


const CreateEmployee = ()=>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState("false")




    return(
        <View style={styles.root}>
            <TextInput 
                style={styles.inputStyle}
                label="Name"
                value={name}
                theme={theme}
                mode='outlined'
                onChangeText={text => setName(text)}
            />
             <TextInput 
                style={styles.inputStyle}
                label="Email"
                value={email}
                theme={theme}
                mode='outlined'
                onChangeText={text => setEmail(text)}
            />
             <TextInput 
                style={styles.inputStyle}
                label="Phone"
                value={phone}
                keyboardType="number-pad"
                theme={theme}
                mode='outlined'
                onChangeText={text => setPhone(text)}
            />
             <TextInput 
                style={styles.inputStyle}
                label="Salary"
                value={salary}
                theme={theme}
                mode='outlined'
                onChangeText={text => setSalary(text)}
            />
            <View>
             <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
                Press me
             </Button>
             <Modal>
             animationType="slide"
             transparent={false}
             visible={modal}
             <Button icon="upload" mode="contained" onPress={() => setModal(false)}>
                Press me
             </Button>
             </Modal>
             </View>
        </View>
    )
}

const theme = {
    colors:{
        primary:'#822659'
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    }
})

export default CreateEmployee
import React,{useState} from 'react';
import { StyleSheet,View,Modal,Alert} from 'react-native';
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
                keyboardType="email-address"
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

            <Button 
            icon="upload" 
            theme={theme}
            mode="contained" 
            style={styles.inputStyle}
            onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button 
            icon="content-save" 
            theme={theme}
            mode="contained" 
            style={styles.inputStyle}
            onPress={() =>  console.log('save pressed')}>
                Save
            </Button>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                // Alert.alert("Modal has been closed.");
                setModal(false)
            }}
            >
            <View style={styles.modalView}>
                <View style={styles.modalButtonView}>
                    <Button  theme={theme} icon="camera" mode="contained" onPress={() => console.log('camera pressed')}>
                         Camera
                    </Button>
                    <Button  theme={theme} icon="image-area" mode="contained" onPress={() =>  console.log('gallery pressed')}>
                         Galary
                    </Button>
                </View>
                     <Button  theme={theme} icon="cancel"  onPress={() => setModal(false)}>
                         cancel
                    </Button>
            </View>
            </Modal>           
        </View>
    )
}

const theme = {
    colors:{
        primary:'#006aff'
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:'100%',
        backgroundColor:"white"
    },
    modalButtonView:{
        flexDirection:"row",
        padding:5,
        justifyContent:"space-around"
    }
})

export default CreateEmployee
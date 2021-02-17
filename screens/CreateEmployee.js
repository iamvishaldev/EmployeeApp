import React,{useState} from 'react';
import { StyleSheet,View,Modal,Alert} from 'react-native';
import { TextInput,Button} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

const CreateEmployee = ()=>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState("false")

    const pickFromGallery = async ()=>{
      const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if(granted){
          let data =  await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:1
            })
            if(!data.cancelled){
                let newfile = {uri:data.uri,
                  type:`test/${data.uri.split(".")[1]}`,
                  name:`test.${data.uri.split(".")[1]}`
              }
                handleUpload(newfile)
            }
      }else{
        Alert.alert("you need to give us permission to work")
      }
    }

    const pickFromCamera = async ()=>{
        const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data =  await ImagePicker.launchCameraAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:1
              })
              if(!data.cancelled){
                  let newfile = {uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                  handleUpload(newfile)
              }
        }else{
          Alert.alert("you need to give us permission to work")
        }
      }

      const handleUpload = (image)=>{
       const data =  new FormData()
       data.append('file',image)
       data.append('upload_preset','employeeApp')
       data.append("cloud_name",'student1997')

       fetch('https://api.cloudinary.com/v1_1/student1997/image/upload',{
           method:"post",
           body:data
       }).then(res=>res.json())
       .then(data=>{
           console.log(data)
           setPicture(data.url)
           setModal(false)
       })
        
      }


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
            icon={picture == "" ? "upload" : "check"}
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
                    <Button  theme={theme} icon="camera" mode="contained" onPress={() => pickFromCamera()}>
                         Camera
                    </Button>
                    <Button  theme={theme} icon="image-area" mode="contained" onPress={() => pickFromGallery()}>
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
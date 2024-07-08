import {Image,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from "../../firebase"

const register = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const router = useRouter();
    const handleRegister = async() => {
        try {
            if(!password || !email){
                throw new Error("Email and Password is Required");
            }
            const userCredentials = createUserWithEmailAndPassword(auth,email,password)
            .then((userCredentials)=>{
                const user = userCredentials._tokenResponse.email;
                const myUserUid = auth.currentUser.uid;

                sendEmailVerification(auth.currentUser).then(()=>{
                    console.log("Email verifcation sent to the user")
                }); 
                setDoc(doc(db,"users",`${myUserUid}`),{
                    email: email,
                    password: password
                });
            });

            setEmail("");
            setPassword("");
        } catch(error){
            console.log("error",error)
        }
    }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
        <View style={{height:200,backgroundColor:"#FEBE10",width:"100%"}}>
            <View style={{marginTop:25,justifyContent:"center",alignItems:"center"}}>
             <Image style={{width:200,height:50,resizeMode:"cover"}}
             source={{
                uri:"https://laundrymate.in/assets/images/shared/branding/Logo.webp"
             }}
             />
            </View>
            <Text style={{marginTop:20,textAlign:"center",fontSize:20,fontWeight:"bold"
                          ,color:"white"}}>
                Wash Wizards
            </Text>
        </View>

        <KeyboardAvoidingView>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:17,fontWeight:"bold",marginTop:25,color:"#FEBE10"}}>
                    Register to Your Account
                </Text>
            </View>

            <View>
                <View style={{flexDirection:"row",alignItems:"center",gap:5,backgroundColor:"#FEBE10",
                              paddingVertical:5,borderRadius:5,marginTop:30}}>
                <MaterialCommunityIcons style={{marginLeft:8}} name="email" size={24} color="white" />
                <TextInput value={email}
                onChangeText={(text)=> setEmail(text)}
                style={{color:"white",width:300,marginVertical:10,fontSize:email ? 17 : 17}}
                placeholder='Enter Your Email'
                placeholderTextColor={"white"}/>
                </View>

                <View style={{flexDirection:"row",alignItems:"center",gap:5,backgroundColor:"#FEBE10",
                              paddingVertical:5,borderRadius:5,marginTop:30}}>
                <MaterialIcons style={{marginLeft:8}} name="password" size={24} color="white" />
                <TextInput secureTextEntry={true}
                value={password}
                onChangeText={(text)=> setPassword(text)}
                style={{color:"white",width:300,marginVertical:10,fontSize:password ? 17 : 17}}
                placeholder='Enter Your Password'
                placeholderTextColor={"white"}/>
                </View>
            </View>

            <View style={{marginTop:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text>
                   Keep me Log In
                </Text>
                <Text style={{color:"#007FFF",fontWeight:"500"}}>
                    Forgot Password
                </Text>
            </View>

            <View style={{marginTop:50}}/>

            <Pressable onPress={handleRegister} 
            style={{width:200,backgroundColor:"#0066b2",borderRadius:6,
                     marginLeft:"auto",marginRight:"auto",padding:15}}>
                <Text style={{textAlign:"center",fontSize:16,
            fontWeight:"bold",color:"white"}}>Register</Text>
            </Pressable>

            <Pressable onPress={()=> router.replace("/login")} 
            style={{marginTop:12}}>
                <Text style={{textAlign:"center",fontSize:15}}>
                 Already Have an Account? Sign In
                </Text>
            </Pressable>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({})
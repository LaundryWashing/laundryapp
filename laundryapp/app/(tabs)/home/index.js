import { StyleSheet, Text, View, ScrollView,Image, Pressable } from 'react-native'
import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <View style ={{padding:12, height:200, backgroundColor:"#FEBE10"}}>
        <View style = {{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
          <View>
            <Image 
            style = {{width:200, height: 50,resizeMode:"cover"}}
            source = {{
              uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp"
            }}
            />
          </View>
          <Octicons name="three-bars" size={24} color="black" />
        </View>

        <View style={{marginTop:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <View>
            <Text style = {{fontSize:13,fontFamily:"sans-serif-light"}}>Hi Vipin</Text>
            <Text style = {{marginTop:2, fontFamily:"sans-serif-light", color: "black"}}>Home | Rewari - 123401</Text>
          </View>
           
          <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
          <Text style ={{width:60,fontSize:12,color:"#0066b2",fontFamily:"sans-serif-light"}}>
            QUICK HELP</Text>
          </View>
        </View>
      </View>

        <View
        style={{
          padding: 10,
          backgroundColor: "white",
          width: 340,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
          marginTop: -60, // Adjust the negative marginTop to make it overlap with the upper view
          zIndex: 1,
        }}
      >
        <View style={{flexDirection:"row", gap:10}}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <View >
          <Text style={{fontSize:15,color:"#0066b2",fontFamily:"Kailash-Bold"}}>QUICK ORDER</Text>
          <Text style={{marginTop:4}}>Book a Pickup and delivery options</Text>
          <Text>We will be at your doorstep on time</Text>

          <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",marginTop:7
          }}>
            <Pressable onPress={()=> router.push("/home/address")}
            style={{backgroundColor:"#FEBE10",paddingHorizontal:10,paddingVertical:5,borderRadius:4}}>
              <Text style={{fontSize:13,fontWeight:"400"}}>Book Now</Text>
            </Pressable>
            <MaterialCommunityIcons name="truck" size={24} color="#034694" />
          </View>
        </View>
        </View>
      </View>
      <View style={{marginHorizontal:10,flexDirection:"row",alignItems:"center",gap:10}}>
        <View style={{backgroundColor:"white",padding:12,borderRadius:10,marginTop:20}}>
          <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <View>
            <Text style={{color:"#FEBE10",fontSize:15,fontWeight:"bold"}}>
              Club <Text style={{color:"#034694",fontSize:15,fontWeight:"bold"}}>Ultimate</Text>
            </Text>

            <Text style={{fontSize:12,fontWeight:"300",width:130,marginTop:10}}>Put your laundry on Cruise Control</Text>

            <Text style={{fontSize:12,fontWeight:"300",width:130,marginTop:3}}>
              Subscribe and get the Benefits</Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>
        <View style={{backgroundColor:"white",paddingHorizontal:0,paddingVertical:10,
                      borderRadius:10,marginRight:20}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Ionicons name="basket-outline" size={24} color="#034964" />
          <View>
            <Text style={{color:"#FEBE10",fontSize:15,fontWeight:"bold"}}>
              Place Your{" "} <Text style={{color:"#034964",fontSize:15,fontWeight:"bold"}}>Order</Text>
            </Text>
            <Text style={{fontSize:12,fontWeight:"300",width:130,marginTop:10}}>
              Select Items from the Catalogue below</Text>
              <Text style={{fontSize:12,fontWeight:"300",width:130}}>
                and Book your Order.It's About Time.</Text>
          </View>
         
          </View>
        </View>
      </View>

      <View style={{marginHorizontal:10,marginVertical:10,flexDirection:"row",alignItems:"center",
                     gap:10}}>

        <View >
          <View style={{backgroundColor:"white",flexDirection:"row",alignItems:"center",
                      gap:12,padding:10,borderRadius:10}}>
            <View>
              <Text style={{fontSize:13,fontWeight:"500",color:"#034964"}}>Affordable Prices</Text>
              <Text style={{marginTop:4}}>Get our Prices List</Text>
            </View>
            <Entypo name="triangle-right" size={24} color="black" />
          </View>
          <View style={{backgroundColor:"white",flexDirection:"row",alignItems:"center",
                      gap:12,padding:10,borderRadius:10,marginTop:10}}>
            <View>
              <Text style={{fontSize:13,fontWeight:"500",color:"#034964"}}>Affordable Prices</Text>
              <Text style={{marginTop:4}}>Get our Prices List</Text>
            </View>
            <Entypo name="triangle-right" size={24} color="black" />
          </View>
        </View>

        <View style={{backgroundColor:"white",padding:12,borderRadius:10,
                      flexDirection:"row",alignItems:"center",gap:10}}>
          <View>
            <Text style={{fontSize:20,color:"#FEBE10",width:100,fontWeight:"bold"}}>What's The Plan</Text>
            <Text style={{fontSize:20,color:"#034964",width:100,fontWeight:"bold"}}>For The Planet</Text>
          </View>
          <Entypo name="triangle-right" size={24} color="black" />
        </View>
      </View>

      <View style={{
        backgroundColor:"white",padding:10,marginRight:"auto",marginLeft:"auto",borderRadius:7
      }}>
        <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>
          Next Available
        </Text>
        </View>
        <Text style={{fontSize:14,fontWeight:"500",marginTop:5,color:"#034964",width:150}}>
          Order Within 15 mins to catch this Pickup Slots
        </Text>

        <Pressable style={{borderColor:"#034964",paddingHorizontal:10,paddingVertical:4,justifyContent:"center",
                           alignItems:"center",borderWidth:0.7,width:130,marginTop:8,borderRadius:5}}>
          <Text>
            Add Items
          </Text>
        </Pressable>
      </View>

    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})
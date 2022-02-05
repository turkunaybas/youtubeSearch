

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Card = (props) => {

const navigation = useNavigation();
    return (


        //bu component videonun resmini başlığını ve kanalını bize gösteriyor , bu bilgileri search ekranından props olarak alıyoruz
        // navigation ile gittiğimiz ekrana istediğim bilgileri gönderiyoruz
        <TouchableOpacity 
        onPress={()=> navigation.navigate("video", {videoId:props.videoId,title:props.title})}> 
            <View style={{ flexDirection: "row", marginTop: "5%", marginLeft: "2%" }}>

                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}  //o id deki videonun kapak resminin image adresini böyle verdik

                    style={{
                        width: "45%",
                        height: 100
                    }}
                />
                <View style={{ paddingLeft: "2%", }}>
                    <Text style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }} ellipsizeMode='tail' numberOfLines={3} >
                        {props.title}</Text>

                    <Text style={{ fontSize: 12 }}> {props.channel} </Text>
                </View>

            </View>
        </TouchableOpacity>

    )

}

export default Card

import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, ScrollView, FlatList

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VideoCard from '../components/VideoCard'



//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAeLNcveteCEPPJOI1pHH8LddeFpjDbGzY
export default function Search() {

    const [value, setValue] = useState("")
    const [videCardData, setVideCardData] = useState([])

    const fetchData = () => {
        // q nun karşısına verdiğimiz şeyler içinde aratılıyor 
        // maxResults kaç tane sonuç çekeceğimi belirtiyor biz 10 verdik
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAeLNcveteCEPPJOI1pHH8LddeFpjDbGzY`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideCardData(data.items)
            })
    }
    // ilk açıldığında videoların rastgele görünmesi için 

    useEffect(() => {
     fetchData()
    },[value] );
    
    return (
        <View style={{ flex: 1,backgroundColor:"#fff" }}>

            <View style={{
                padding: 1, flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                elevation: 5,
                backgroundColor: '#ffffff',
                marginTop: "10%"
            }}>
                <Ionicons name="md-arrow-back" size={32} />
                <TextInput
                    value={value}
                    style={{ width: "70%", backgroundColor: "#e6e6e6", height: 40, padding: 6 }}
                    onChangeText={(text) => setValue(text)}
                />                

{/* 
                burada arama ikonuna tıklayıp arama yapıyoruz */}
                <Ionicons
                    name="search"
                    size={32}
                    onPress={() => fetchData()}
                />
            </View>

            <FlatList
            data={videCardData}
            keyExtractor={item=>item.id.videoId}
           renderItem={({item}) => 
           {
               return <VideoCard
               videoId = { item.id.videoId}  
               title = {item.snippet.title}
               channel={item.snippet.channelTitle}
               />

           }
        } 
        

            
            />

        </View>
    )

}

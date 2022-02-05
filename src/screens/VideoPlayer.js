
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function VideoPlayer({ route }) {
    const navigation = useNavigation();
    const { videoId, title } = route.params

    //videoyu uygulamada oynatmak için react native webview kullandık.
    return (
        <View style={{
            flex: 1,
            marginTop: "10%",
            backgroundColor: "#fff"

        }}>
            <View style={{
                padding: 1, flexDirection: 'row',
                marginLeft: "1%",
                backgroundColor: '#ffffff',

            }}>
{/* 
                geldiğimiz ekrana geri dönmek için */}
                <Ionicons name="md-arrow-back" size={32} onPress={() => navigation.goBack()} />


            </View>
            <View style={{
                width: "100%",
                height: 300,
                marginTop: "2%",

            }}>

                {/* videonun oynatıldığı alan */}
                <WebView
                    javaScriptEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />

            </View>

            {/* video başlığı bulunan alan */}

            <Text style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
                numberOfLines={2}
                ellipsizeMode='tail'

            >
                {title}
            </Text>
            <View style={{ borderBottomWidth: 1 }}>

            </View>

        </View>


    )

}
export default VideoPlayer
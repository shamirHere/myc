import React from "react";
import { Text,SafeAreaView,Image,Button } from "react-native";
import images from '../assets/image.js';


const Welcome=()=>{
    return(
        <SafeAreaView>
            <Image source={images.Wel} 
            style={[
                {marginTop: 50, height: 200, width: '100%', resizeMode: 'contain'},
              ]}/>
        </SafeAreaView>
    )
}

export default Welcome
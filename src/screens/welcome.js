import React from "react";
import { Text,SafeAreaView,Image,Button } from "react-native";
import images from '../assets/images.js';
import Buttons from '../components/Button.js';

const Welcome=()=>{
    return(
        <SafeAreaView>
            <Image source={images.Wel} 
            style={[
                {marginTop: 50, height: 200, width: '100%', resizeMode: 'contain'},
              ]}/>

            <Buttons label={'Welcom'}/>
            
        </SafeAreaView>
    )
}

export default Welcome
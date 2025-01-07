import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';

const InputText = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#999999', // Default placeholder color
  borderColor = '#CCCCCC', // Default border color
  borderWidth = 1,
  borderRadius = 8,
  paddingVertical = 12,
  paddingHorizontal = 15,
  textColor = '#333333', // Default text color
  errorMessage = '',
  errorColor = 'red',
  showError = false,
  customStyles = {},
  multiline = false,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{marginBottom: showError ? 25 : 15, position: 'relative'}}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          {
            borderColor: showError ? errorColor : borderColor,
            borderWidth: borderWidth,
            borderRadius: borderRadius,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            fontSize: 16,
            color: textColor,
            width: '100%',
            paddingRight: secureTextEntry ? 45 : 15, // Add space for the icon if secureTextEntry is true
          },
          customStyles,
        ]}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            transform: [{translateY: -10}], // Center the icon vertically
            height : 40 , 
            width : 40, 
            top : "35%"
          }}
          onPress={togglePasswordVisibility}>
          <Image
            source={icons.hide_passsword}
            style={[
              styles.icon36,
            ]}
          />
        </TouchableOpacity>
      )}
      {showError && errorMessage ? (
        <Text style={[{fontSize: 12, marginTop: 5, color: errorColor}]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};


export default InputText;


// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const InputText = ({
//   value,
//   onChangeText,
//   placeholder,
//   placeholderTextColor = '#999999', // Default placeholder color
//   borderColor = '#CCCCCC', // Default border color
//   borderWidth = 1,
//   borderRadius = 8,
//   paddingVertical = 12,
//   paddingHorizontal = 15,
//   textColor = '#333333', // Default text color
//   errorMessage = '',
//   errorColor = 'red',
//   showError = false,
//   customStyles = {},
//   multiline = false,
//   keyboardType = 'default',
//   secureTextEntry = false,
// }) => {
//   const [isPasswordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <View style={{ marginBottom: showError ? 25 : 15, position: 'relative' }}>
//       <TextInput
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor={placeholderTextColor}
//         style={[
//           {
//             borderColor: showError ? errorColor : borderColor,
//             borderWidth: borderWidth,
//             borderRadius: borderRadius,
//             paddingVertical: paddingVertical,
//             paddingHorizontal: paddingHorizontal,
//             fontSize: 16,
//             color: textColor,
//             width: '100%',
//             paddingRight: secureTextEntry ? 45 : 15, // Add space for the icon if secureTextEntry is true
//           },
//           customStyles,
//         ]}
//         multiline={multiline}
//         keyboardType={keyboardType}
//         secureTextEntry={secureTextEntry && !isPasswordVisible}
//       />
//       {secureTextEntry && (
//         <TouchableOpacity
//           style={{
//             position: 'absolute',
//             right: 10,
//             top: '35%', // Adjust top alignment as per input height
//           }}
//           onPress={togglePasswordVisibility}>
//           <Image
//             source={
//               isPasswordVisible
//                 ? require('../../assets/icons/show_password.png') // Use "show" icon
//                 : require('../../assets/icons/hide_password.png') // Use "hide" icon
//             }
//             style={{ width: 24, height: 24, tintColor: '#999999' }}
//           />
//         </TouchableOpacity>
//       )}
//       {showError && errorMessage ? (
//         <Text style={{ fontSize: 12, marginTop: 5, color: errorColor }}>
//           {errorMessage}
//         </Text>
//       ) : null}
//     </View>
//   );
// };

// export default InputText;

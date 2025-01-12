import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import styles from "../../assets/styles";

const CustomButton = ({
    label, 
  onPress, // Default yellow background
  borderWidth = 0,
  borderColor = "#FFC107", // Default yellow border
  isOutline = false, // To render an outline button
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: isOutline ? "transparent" : colors.primary,
          borderColor: isOutline ? borderColor : "transparent",
          borderWidth: isOutline ? borderWidth : 0,
          borderRadius: 10,
          paddingVertical: 15,
           justifyContent : "center" , 
           alignItems : "center" , 
           marginVertical : 10 
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.fwBold,
          {
            color: isOutline ? borderColor : colors.white,
            fontSize: 16,
          },
        ]}
      >
      {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  label,
  onPress,
  backgroundColor = "#FFC107", // Default yellow background
  textColor = "#FFFFFF", // Default white text
  borderWidth = 0,
  borderColor = "#FFC107", // Default yellow border
  paddingVertical = 15,
  fontSize = 16,
  isOutline = false, // To render an outline button
  borderRadius = 5,
  customStyles = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isOutline ? "transparent" : backgroundColor,
          borderColor: isOutline ? borderColor : "transparent",
          borderWidth: isOutline ? borderWidth : 0,
          borderRadius: borderRadius,
          paddingVertical: paddingVertical,
        },
        customStyles,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isOutline ? borderColor : textColor,
            fontSize: fontSize,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

export default CustomButton;
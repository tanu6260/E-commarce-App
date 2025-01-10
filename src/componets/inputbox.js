import {
  StyleSheet,

  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, } from "../constans";
import AntDesign from 'react-native-vector-icons/AntDesign'
const InputBox = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  editable,
  textAlignVertical,
  numberOfLines,
  inputboxstyle,
  placeholderstyle,
  onPress,
  name
}) => {


  return (


    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.box1, inputboxstyle]}
    >
      <TextInput
        placeholder={placeholder}
        style={[
          styles.placeholdera,
          placeholderstyle,
        ]}
        editable={editable}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.gray}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        textAlignVertical={textAlignVertical}
        cursorColor={COLORS.primary}

      />
      <AntDesign name={name} size={SIZES.width * 0.07} color={COLORS.black} />
    </TouchableOpacity>
  );
};

InputBox.defaultProps = {
  disabled: true,
};

export default InputBox;

const styles = StyleSheet.create({
  box1: {
    width: SIZES.width * 0.88,

    borderWidth: 1.2,
    borderColor: COLORS.gray,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: SIZES.height * 0.02,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.height * 0.008
  },
  placeholdera: {
    ...FONTS.fourHundred,
    fontSize: SIZES.width * 0.035,
    paddingLeft: SIZES.width * 0.03,
    color: COLORS.black,
    marginBottom: -3,
    width: SIZES.width * 0.78,
    height: SIZES.height * 0.056,

  },
  label: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },


});

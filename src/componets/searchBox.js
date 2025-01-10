import {
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, } from '../constans';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const SearchBox = ({
  placeholder,
  editable,
  disabled,
  onPresssearch,
  onChangeText,
  value,
  autoFocus,
  onSubmitEditing,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPresssearch}
      activeOpacity={0.6}
      style={styles.searchbox}>
      <TextInput
        editable={editable}
        placeholder={placeholder}
        style={styles.searchinput}
        placeholderTextColor={COLORS.gray}
        onChangeText={onChangeText}
        value={value}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
        returnKeyType='search'
      />
      <FontAwesome name="search" size={20} color={COLORS.black} style={{ paddingHorizontal: SIZES.width * 0.02 }} />
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    width: SIZES.width * 0.93,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    alignSelf: 'center',
    elevation: 4,
    shadowOpacity: 0.2,
    paddingHorizontal: SIZES.width * 0.02,
  },

  searchinput: {
    width: SIZES.width * 0.78,
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.035,
    marginBottom: -3,
    color: COLORS.black,
  },
});

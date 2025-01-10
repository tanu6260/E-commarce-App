import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constans';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get('window');

const ButtonCustom = ({
    onPress,
    children,
    disabled,
    name , 
    btnBox , 
    btnText
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            disabled={disabled}
            style={[
                styles.longButton , btnBox]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <View style={styles.iconbtnbox}>
                    <AntDesign

                        name={name}
                        size={SIZES.width * 0.06}
                        color={COLORS.black}
                    />


                </View>

                <Text
                    style={[styles.buttonText , btnText]}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    longButton: {
        width: width * 0.4,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.primary,
        flexDirection: 'row',
    },
    buttonText: {
        color: COLORS.white,
        textAlign: 'center',
        ...FONTS.fiveHundred,
        fontSize: width * 0.036,
        marginBottom: -3,
    },
    iconbtnbox: {
        width: SIZES.width * 0.11,
        height: SIZES.width * 0.11,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 0.02,
        marginLeft: width * -0.01,
    },

});
export default ButtonCustom;

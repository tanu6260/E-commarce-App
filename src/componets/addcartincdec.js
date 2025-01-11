
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { RNToasty } from 'react-native-toasty';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS, FONTS, SIZES } from '../constans';



const Addcartincdec = ({ onChangeValue, qty = 0}) => {
    const [incredecre, setIncredecre] = useState(qty);

    const handleDecrease = () => {
        if (incredecre > 0) {
            setIncredecre(incredecre - 1);
            onChangeValue && onChangeValue(incredecre - 1);
            RNToasty.Error({
                position: 'top',
                title: `Remove to Cart`,
            })
        }
    };

    const handleIncrease = () => {
        setIncredecre(incredecre + 1);
        onChangeValue && onChangeValue(incredecre + 1);
        RNToasty.Success({
            position: 'top',
            title: `Add to Cart`,
        })
    };

    return (
        <View style={styles.row}>
            <TouchableOpacity
                style={styles.icon_Box}
                activeOpacity={0.6}
                onPress={handleDecrease}>
                <AntDesign

                    name={'minus'}
                    size={SIZES.width * 0.06}
                    color={COLORS.black}
                    style={styles.minusicon}
                />



            </TouchableOpacity>
            <Text style={styles.text}>{incredecre}</Text>
            <TouchableOpacity
                style={styles.icon_Box}
                activeOpacity={0.6}
                onPress={handleIncrease}>

                <AntDesign
                    name={'plus'}

                    size={SIZES.width * 0.06}
                    color={COLORS.black}
                    style={styles.plusicon}
                />
            </TouchableOpacity>
        </View>
    );
};




const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width * 0.65,
        justifyContent: 'space-between',

        alignSelf: 'center'
    },
    text: {
        color: COLORS.black,
        fontSize: SIZES.width * 0.048,
        ...FONTS.fiveHundred,
    },

    icon_Box: {

        backgroundColor: COLORS.white,
        borderRadius: 13,
        width: SIZES.width * 0.1,
        height: SIZES.width * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
});

export default Addcartincdec;


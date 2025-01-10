import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import ButtonCustom from './button';
import { COLORS, FONTS, SIZES } from '../constans';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Addcartincdec from './addcartincdec';

const MainCart = ({
    onPress,
    onPresscart,
    img,
    title,
    rate,
    price,
    name,
    children,
    cartboxstyle,
    imgbox,
    boxtext,
    titlestyle,
    priceText,
    boxgreen,
    rateText,
    rateSize,
    btnBox,
    btnText,
    btndisabled,
    btn,
    incdec,
    disabled,
    qty,
    onChangeValue
}) => {
    const [active, setActive] = useState(false);

    const heartPress = () => {
        setActive(prevActive => !prevActive);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={[styles.cartbox, cartboxstyle]}
            disabled={disabled}>
            <View>
                <Image source={img} style={[styles.mainimg, imgbox]} />
                <TouchableOpacity
                    onPress={heartPress}
                    style={styles.heartbox}>
                    <AntDesign
                        name="hearto"
                        size={20}
                        color={active ? COLORS.red : COLORS.black}
                        style={[styles.heart, active && { tintColor: COLORS.red }]}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.textbox, boxtext]}>
                <View style={[styles.greenbox, boxgreen]}>
                    <Text style={[styles.rate, rateText]}>{rate}</Text>
                    <AntDesign name="star" size={rateSize} color={COLORS.white} style={styles.star} />
                </View>

                <Text numberOfLines={2} style={[styles.title, titlestyle]}>
                    {title}
                </Text>

                <Text style={[styles.price, priceText]}>MRP  ₹{price}</Text>
                {btn &&
                    <ButtonCustom
                        name={name}
                        children={children}
                        onPress={onPresscart}
                        btnBox={btnBox}
                        btnText={btnText}
                        disabled={btndisabled}
                    />
                }
                {incdec &&
                    <Addcartincdec
                        qty={qty}
                        onChangeValue={onChangeValue}

                    />
                }
            </View>
        </TouchableOpacity>
    );
};

export default MainCart;

const styles = StyleSheet.create({
    cartbox: {
        width: SIZES.width * 0.45,
        borderRadius: 10,
        paddingVertical: SIZES.height * 0.01,
        marginVertical: SIZES.height * 0.008,
        elevation: 7,
        backgroundColor: COLORS.white,
    },
    textbox: {
        width: SIZES.width * 0.45,
        paddingHorizontal: SIZES.width * 0.02,
    },
    title: {
        fontSize: SIZES.width * 0.031,
        ...FONTS.fiveHundred,
        color: COLORS.black,
        marginVertical: 4,
    },
    rate: {
        fontSize: SIZES.width * 0.028,
        ...FONTS.fiveHundred,
        color: COLORS.white,
        marginBottom: -3,
    },
    brand: {
        fontSize: SIZES.width * 0.028,
        ...FONTS.fiveHundred,
        color: COLORS.gray1,
        marginVertical: 1,
    },
    price: {
        fontSize: SIZES.width * 0.036,
        ...FONTS.fiveHundred,
        color: COLORS.black,
        marginVertical: 4,
    },
    mainimg: {
        width: SIZES.width * 0.3,
        height: SIZES.height * 0.15,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    heartbox: {
        width: SIZES.width * 0.12,
        height: SIZES.height * 0.04,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    heart: {
        width: SIZES.width * 0.054,
        height: SIZES.height * 0.04,
        resizeMode: 'contain',
    },
    star: {
        width: SIZES.width * 0.04,
        height: SIZES.height * 0.014,
        resizeMode: 'contain',
        tintColor: COLORS.white,
    },

    carticon: {
        width: SIZES.width * 0.06,
        height: SIZES.width * 0.06,
        resizeMode: 'contain',
    },
    greenbox: {
        backgroundColor: COLORS.green,
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width * 0.12,
        borderRadius: 3,
        justifyContent: 'center',
        height: SIZES.height * 0.024,
        marginRight: SIZES.width * 0.03,
    },
    btnstyle: { width: SIZES.width * 0.28, height: SIZES.height * 0.044 },
});

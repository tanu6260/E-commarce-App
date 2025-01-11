import React, { useCallback, useEffect, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
} from 'react-native';
import styles from './styles';
import MainCart from '../../componets/maincart';
import { SIZES } from '../../constans';
import {useSelector } from 'react-redux';

const NewCart = ({ navigation }) => {
    const { cartItems, totalQuantity } = useSelector(state => state.cart);
    

    console.log("totalQuantity.......................................", totalQuantity , cartItems)



    return (
        <View style={styles.container}>
            {cartItems?.length > 0 ? (
                <ScrollView
                    style={styles.innercontainer}
                    showsVerticalScrollIndicator={false}
                >
                    <FlatList
                        data={cartItems}
                        scrollEnabled={false}
                        style={{ alignSelf: 'center' }}
                        renderItem={({ item }) => {
                            
                            const totalPrice = (item?.price * item?.quantity).toFixed(2);

                            return (
                                <MainCart
                                    img={{ uri: item?.image }}
                                    title={item?.title}
                                    rate={item?.rating?.rate}
                                    price={item?.price}
                                    cartboxstyle={styles.cartbox}
                                    imgbox={styles.mainimg}
                                    boxtext={styles.boxtext}
                                    titlestyle={{ fontSize: SIZES.width * 0.041 }}
                                    rateText={{ fontSize: SIZES.width * 0.035 }}
                                    boxgreen={{ width: SIZES.width * 0.2, height: SIZES.height * 0.034 }}
                                    priceText={{ fontSize: SIZES.width * 0.046 }}
                                    rateSize={12}
                                    qly={item?.quantity}
                                    disabled={true}
                                    totalprice={` ${totalPrice}`} 
                                />
                            );
                        }}
                    />
                        
                </ScrollView>
            ) : (
                <View style={styles.text1container}>
                    <Text style={styles.text1}>{"Cart is empty"}</Text>
                </View>
            )}
        </View>
    );
};

export default NewCart;
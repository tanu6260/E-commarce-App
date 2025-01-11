import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from '../../constans';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addcart, fetchItems, removecart } from '../../redux/slice';
import { useFocusEffect } from '@react-navigation/native';
import MainCart from '../../componets/maincart';

const NewHome = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const { products, cartItems, totalQuantity, status } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (product, newQty) => {
        if (newQty === 0) {
            dispatch(removecart(product));
        } else {
            dispatch(addcart({ ...product, quantity: newQty }));
        }
    };


    useFocusEffect(
        useCallback(() => {
            if (status === 'idle') {
                setLoading(true);
                dispatch(fetchItems())
                    .then(() => setLoading(false))

            }
        }, [status, dispatch])
    );



    const onRefresh = () => {
        dispatch(fetchItems((data) => setRefreshing(data)))
    }




    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    {totalQuantity > 0 && (
                        <View style={styles.bdgbox}>
                            <Text style={styles.bdg}>{totalQuantity}</Text>
                        </View>
                    )}
                    <FontAwesome5
                        name="cart-plus"
                        size={SIZES.width * 0.08}
                        color={COLORS.black}
                        style={{ marginRight: SIZES.width * 0.038 }}
                    />
                </View>
            ),
        });
    }, [totalQuantity, navigation]);

    console.log("products........................", products?.[0])

    return (
        <View style={styles.container}>

            {loading && (
                <ActivityIndicator size="large" color={COLORS.blue} style={{ height: SIZES.height, justifyContent: 'center', alignItems: 'center' }} />
            )}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.innercontainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.primary]}
                    />
                }
            >
                {products?.length > 0 ? (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
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
                                priceText={{ fontSize: SIZES.width * 0.046 }}
                                isInCart={cartItems.some(cartItem => cartItem?.id === item?.id)}
                                incdec={true}
                                qly={item?.quantity}
                                onChangeValue={(newQty) => handleQuantityChange(item, newQty)}
                                disabled={true}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={styles.text1container}>
                        <Text style={styles.text1}>No products available</Text>
                    </View>
                )}
            </ScrollView>

        </View>
    );
};

export default NewHome;

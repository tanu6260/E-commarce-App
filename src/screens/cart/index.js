import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
} from 'react-native';
import styles from './styles';
import MainCart from '../../componets/maincart';
import { COLORS, SIZES } from '../../constans';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { removecart, updateQuantity } from '../../redux/slice';

const Cart = ({ navigation }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems, totalQuantity } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log("totalPrice", totalPrice , cartItems?.[0] , totalQuantity)
    
    useEffect(() => {
        let price = 0;
        cartItems.forEach(item => {
            const itemPrice = Number(item?.price);
            const itemQuantity = Number(item?.quantity);

            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                price += itemPrice * itemQuantity;
            } else {
                console.log('Invalid price or quantity', item);
            }
        });
        setTotalPrice(price);
    }, [cartItems]);
    
    const handleRemove = (item) => {
        dispatch(removecart(item));
        setTotalPrice(pre => pre - item.price * item.quantity);
    };

    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity === 0) {
            handleRemove(item);
        } else {
            dispatch(updateQuantity({ id: item?.id, quantity: newQuantity }));

            const priceDifference = item?.price * (newQuantity - item?.quantity);
            setTotalPrice(pre => pre + priceDifference);

            
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    {totalQuantity > 0 && (
                        <View style={styles.bdgbox}>
                            <Text style={styles.bdg}>
                                {totalQuantity}
                            </Text>
                        </View>
                    )}
                    <FontAwesome5
                        name="cart-plus"
                        size={SIZES.width * 0.08}
                        color={COLORS.black}
                        style={{ marginRight: SIZES.width * 0.038 }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                    ₹ {totalPrice.toFixed(2)}
                    </Text>
                </View>
            ),
        });
    }, [totalQuantity, totalPrice, navigation]);

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
                                boxgreen={{ width: SIZES.width * 0.2, height: SIZES.height * 0.034 }}
                                priceText={{ fontSize: SIZES.width * 0.046 }}
                                rateSize={12}
                                incdec={true}
                                disabled={false}
                                qty={item?.quantity}
                                onChangeValue={(newQty) => handleQuantityChange(item, newQty)} 
                            />
                        )}
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

export default Cart;

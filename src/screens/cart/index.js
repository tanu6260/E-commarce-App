import React, { useCallback, useEffect, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
    RefreshControl,
} from 'react-native';
import styles from './styles';
import MainCart from '../../componets/maincart';
import { COLORS, SIZES } from '../../constans';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { removecart } from '../../redux/slice';

const Cart = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(removecart(item));
    };

    const onRefresh = () => {
        dispatch(removecart((data) => setRefresh(data)))
    };


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ position: 'relative' }}>
                    <FontAwesome5
                        name="cart-plus"
                        size={SIZES.width * 0.08}
                        color={COLORS.black}
                        style={{ marginRight: SIZES.width * 0.038 }}
                    />
                    {cartItems.length > 0 && (
                        <View
                            style={styles.bdgbox}
                        >
                            <Text
                                style={styles.bdg}
                            >
                                {cartItems.length}
                            </Text>
                        </View>
                    )}
                </View>
            ),
        });
    }, [cartItems, navigation]);

    return (
        <View style={styles.container}>
            {cartItems?.[0] ? (
                <ScrollView
                    style={styles.innercontainer}
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refresh} colors={[COLORS.primary]} onRefresh={onRefresh} />}
                >
                    <FlatList
                        data={cartItems?.[0] ? cartItems : []}
                        scrollEnabled={false}
                        style={{ alignSelf: 'center' }}
                        renderItem={({ item, index }) => (
                            <MainCart
                                key={index}
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
                                btnBox={{ marginHorizontal: SIZES.width * 0.18 }}
                                name={'delete'}
                                children={'remove'}
                                btnText={{ fontSize: SIZES.width * 0.045 }}
                                onPresscart={() => handleRemove(item)}
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

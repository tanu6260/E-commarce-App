import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';

import MainCart from '../../componets/maincart';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addcart, fetchItems } from '../../redux/slice';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constans';

const Home = ({ navigation }) => {
    const [cartItems, setCartItems] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const { products, cartItems: Items, status } = useSelector(state => state.cart);



    console.log("cartItems", products)

    useEffect(() => {
        const updateItems = {};
        Items.forEach(item => {
            updateItems[item?.id] = true;
        });
        setCartItems(updateItems);
    }, [Items]);


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



    const handleAddCart = (product) => {
        dispatch(addcart(product));
        setCartItems(prev => ({
            ...prev,
            [product.id]: true,
        }));
    };


    const handleViewCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>

            {loading && (
                <ActivityIndicator size="large" color={COLORS.blue} style={{ height: SIZES.height, justifyContent: 'center', alignItems: 'center' }} />
            )}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.innerContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.primary]}
                    />
                }
            >
                {products?.length > 0 && (
                    <FlatList
                        data={products}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <MainCart
                                img={{ uri: item?.image }}
                                title={item?.title}
                                rate={item?.rating?.rate}
                                brand={item?.brand}
                                mrp={item?.mrp}
                                price={item?.price}
                                name={"shoppingcart"}
                                btn={true}
                                children={cartItems[item?.id] ? "View Cart" : "Add to Cart"}
                                onPresscart={
                                    cartItems[item?.id]
                                        ? handleViewCart
                                        : () => handleAddCart(item)
                                }
                                rateSize={10}
                                btnBox={
                                    cartItems[item.id] && {
                                        backgroundColor: COLORS.blue4,
                                    }
                                }
                                disabled ={true}
                            />
                        )}
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default Home;

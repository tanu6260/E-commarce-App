
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../constans';
import Home from '../../screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/profile';
import Cart from '../../screens/cart';
import { StyleSheet } from 'react-native';
import NewHome from '../../screens/newHome';
import NewCart from '../../screens/newCart';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {

    const { totalQuantity } = useSelector(state => state.cart);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: SIZES.height * 0.08 },
                headerStyle: {
                    tabBarInactiveTintColor: COLORS.gray,
                },
                tabBarActiveTintColor: COLORS.blue,
                tabBarInactiveTintColor: COLORS.gray,

                tabBarLabelStyle: {
                    fontSize: SIZES.width * 0.04,


                },
            }}>
            {/* <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo

                            name="home"
                            size={SIZES.width * 0.06}
                            color={color}
                            style={styles.bottomTabIcon}
                        />

                    ),

                }}
            /> */}


            <Tab.Screen
                name="NewHome"
                component={NewHome}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo

                            name="home"
                            size={SIZES.width * 0.06}
                            color={color}
                            style={styles.bottomTabIcon}
                        />

                    ),

                }}
            />



            <Tab.Screen
                name="NeWCart"
                component={NewCart}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused, color }) => (
                        <AntDesign

                            name="shoppingcart"
                            size={SIZES.width * 0.06}
                            color={color}
                            style={styles.bottomTabIcon}
                        />


                    ),
                    tabBarBadge: totalQuantity > 0 ? totalQuantity : null,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                    },

                }}
            />




            {/* <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused, color }) => (
                        <AntDesign

                            name="shoppingcart"
                            size={SIZES.width * 0.06}
                            color={color}
                            style={styles.bottomTabIcon}
                        />

                    ),

                }}
            />  */}


            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused, color }) => (
                        <AntDesign

                            name="contacts"
                            size={SIZES.width * 0.06}
                            color={color}
                            style={styles.bottomTabIcon}
                        />

                    ),

                }}
            />

        </Tab.Navigator>
    )
};



const styles = StyleSheet.create({
    bottomTabIcon: {
        fontFamily: FONTS.semiBold
    },

});



export default BottomNavigator;

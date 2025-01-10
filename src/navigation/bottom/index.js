
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, FONTS, SIZES } from '../../constans';
import Home from '../../screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/profile';
import Cart from '../../screens/cart';
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
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
            <Tab.Screen
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
            />



            <Tab.Screen
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
            />


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

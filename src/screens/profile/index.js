import React, { useState } from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import styles from './styles';
import InputBox from '../../componets/inputbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../constans';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        contact: '',
        dob: '',
    });

    const handleInput = (field, value) => {
        setProfileData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
              
                <View style={styles.profilebox}>
                    <AntDesign name="user" size={SIZES.width * 0.24} color={COLORS.black} />
                </View>

        
                <View style={styles.innerContainer}>
                 
                    <InputBox
                        placeholder="Name"
                        value={profileData.name}
                        onChangeText={(value) => handleInput('name', value)}
                        editable={true}
                        name={'user'}
                    />

               
                    <InputBox
                        placeholder="Email"
                        value={profileData.email}
                        onChangeText={(value) => handleInput('email', value)}
                        editable={true}
                        name={'user'}
                    />

                
                    <InputBox
                        placeholder="Contact Number"
                        keyboardType="numeric"
                        maxLength={10}
                        value={profileData.contact}
                        onChangeText={(value) => handleInput('contact', value)}
                        editable={true}
                        name={'phone'}
                    />

                    
                    <InputBox
                        placeholder="DOB"
                        value={profileData.dob}
                        onChangeText={(value) => handleInput('dob', value)}
                        editable={true}
                        name={'calendar'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

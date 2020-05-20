import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ComponentBG } from '../../components/Component';
import AppHeader from '../../components/AppHeader';
import Styles from '../../utils/StylesUtil/Styles';
import Colors from '../../utils/ColorsUtil/Colors';
import SplashScreen from 'react-native-splash-screen';
import Images from '../../utils/ImageUtil/Images';
import { useNavigation } from "react-navigation-hooks";
import { Item, Input } from 'native-base';
import AppButtons from '../../components/AppButtons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function Task() {
    const { navigate } = useNavigation()

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <ComponentBG>
            <AppHeader left={true} right={false} title={'Task'} leftPress={() => navigate('Home_tab')} left_Change={true} />
            <View style={[Styles.CommonStyles.full_flex, { backgroundColor: Colors.WHITE, paddingHorizontal: '5%' }]}>

                {/* <KeyboardAwareScrollView style={[Styles.CommonStyles.full_flex,]}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                > */}<KeyboardAwareScrollView style={{ height: '100%', width: '100%', borderWidth: 0, }} contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true} keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps="always">
                    <View style={{ height: '7%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '4%', borderWidth: 0 }}>
                        <View style={{ borderWidth: 0 }}>
                            <Text style={Styles.My_Hub_Task.Task_about}>Assigned To </Text>
                            <Text style={[Styles.My_Hub_Task.OpenView.Task_Name, { marginTop: 3 }]}>Mark Henry </Text>
                        </View>
                        <View style={Styles.CommonStyles.centerStyles}>
                            <Text style={Styles.My_Hub_Task.Task_about}>Date</Text>
                            <Text style={[Styles.My_Hub_Task.OpenView.Task_Name, { marginTop: 3 }]}>October 15 ,2019 </Text>
                        </View>
                    </View>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginTop: 10, marginBottom: 4 }]}>Task Name</Text>
                    <Text style={Styles.My_Hub_Task.OpenView.Task_Name}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginTop: 10, marginBottom: 4 }]}>Task Description</Text>
                    <Text style={Styles.My_Hub_Task.OpenView.Task_Name}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginTop: '5%' }]}>Task Image/Logo</Text>
                    <View style={{ height: '16%', width: '100%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0 }}>
                        <View style={Styles.Home_tab_task.ImageStyle}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                        <View style={Styles.Home_tab_task.ImageStyle}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                        <View style={Styles.Home_tab_task.ImageStyle}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                    </View>
                    <View style={{ height: '22%', width: '100%', borderWidth: 1, marginTop: 10, borderColor: Colors.APP_BROWN_DARK, borderRadius: 10, borderBottomWidth: 0, }}>
                        <View style={{ height: '70%', width: '100%', }}>
                            {/* <ScrollView style={{ flex: 1 }}> */}
                            <View style={{ flexDirection: 'row', height: '100%', width: '95%', justifyContent: 'space-between', alignItems: 'flex-end', marginHorizontal: '2%', paddingBottom: 5, }}>
                                <View style={{}}>
                                    <Text style={{ fontSize: 15, color: Colors.APP_BROWN_DARK, fontWeight: '600' }}>Mark Henry</Text>
                                    <Text style={{ color: '#A3A3A3', fontSize: 12 }}>Lorem Ipsum dor </Text>

                                </View>
                                <View style={[{ borderWidth: 0, height: '40%', width: '30%', alignItems: 'flex-end', justifyContent: 'center' }]}>

                                    <Text style={{ color: '#A3A3A3', fontSize: 14 }}>Just Now</Text>
                                </View>
                            </View>
                            {/* </ScrollView> */}
                        </View>
                        <View style={{ height: '30%', width: '100%', borderWidth: 1, borderRadius: 10, flexDirection: 'row', borderColor: Colors.APP_BROWN_DARK, borderLeftWidth: 0.5, borderRightWidth: 0.5 }}>
                            <Item style={{ height: '100%', width: '90%' }}>
                                <Input
                                    style={Styles.Change_password.Input_text}
                                    underlineColorAndroid={Colors.TRANSPARENT}
                                    // value={New_password}
                                    // onChangeText={New_password => setNew_password(New_password)}
                                    placeholder={'Write a comment'}
                                    returnKeyType='done'
                                    placeholderTextColor={'#AEAEAE'}
                                />

                            </Item>
                            <TouchableOpacity style={[{ height: '100%', width: '10%' }, Styles.CommonStyles.centerStyles]}>
                                <Image source={Images.Enter} style={{ height: 25, width: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={[{ height: '10%', width: '100%', marginTop: 5, }, Styles.CommonStyles.centerStyles]}>
                        <AppButtons style={{ height: '80%', padding: 1, width: '40%' }} onPress={() => console.log('yes')} title={'COMPLETED'} disabled={true} textColor="#F2EEEF" />


                    </View>
                </KeyboardAwareScrollView>
                {/* </KeyboardAwareScrollView> */}
            </View>
        </ComponentBG>
    )
}

export default Task;
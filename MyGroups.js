import React, { Component, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { ComponentBG } from '../../components/Component';
import AppHeader from '../../components/AppHeader';
import Styles from '../../utils/StylesUtil/Styles';
import SplashScreen from 'react-native-splash-screen';
import Colors from '../../utils/ColorsUtil/Colors';
import Images from '../../utils/ImageUtil/Images';
import { useNavigation, } from 'react-navigation-hooks'

function MyGroups() {
    const [My_Group_Array, setMy_Group_Array] = useState([1, 2, 3, 4, 5, 6, 7,8,9,])
    const { navigate } = useNavigation();
    useEffect(() => {
        SplashScreen.hide();
    })
    function handleRight() {
        navigate('Notifications');
    }

    function handleMyGroup(item) {
        console.log('item is ', item)
        return (
            <TouchableHighlight onPress={() => navigate('My_Hub')} underlayColor={'#EBE0E1'} style={Styles.MyGroup.ViewStyle} key={item.index} >
                <View
                    style={Styles.MyGroup.ViewArrayStyle}>
                    <View style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                        <Image source={Images.folders} style={{ height: 25, width: 30 }} resizeMode='contain' />
                        <Text style={Styles.MyGroup.FolderTextStyle}>FOLDER {item.index + 1}</Text>
                    </View>
                    <View style={[{ flex: 0.1, }, Styles.CommonStyles.centerStyles]}>
                        <Image source={Images.rightArrow} style={{ width: 8, height: 13 }} />
                    </View>
                </View>
            </TouchableHighlight>

        )
    }

    return (
        <ComponentBG>
            <AppHeader left={false} right={2} title={'My Groups'} OnRightPress={() => handleRight()} />
            <View style={[Styles.CommonStyles.full_flex, { backgroundColor: Colors.WHITE }]}>
                <FlatList
                    data={My_Group_Array}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={item => handleMyGroup(item)}
                />
            </View>
        </ComponentBG>
    )
}

export default MyGroups;
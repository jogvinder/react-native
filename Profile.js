import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { ComponentBG } from '../../components/Component';
import AppHeader from '../../components/AppHeader';
import Images from '../../utils/ImageUtil/Images';
import Styles from '../../utils/StylesUtil/Styles';
import { TabItem } from '../../components/TabBarComponent';

var arrayss = {
    "routes": [
        {
            routeName: 'Home'
        },
        {
            routeName: 'Profile'
        },
        {
            routeName: 'MyHub'
        },
        {
            routeName: 'Settings'
        }

    ]
}

var index = 1

class Profile extends Component {
    state = {
        name: 'Simons Aberfa',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
        email: '',
        phone: '123-456-7890',
        total_task: 32,
        task_completed: 16,
        perentage: 10

    }
    calculate_Percentage_task = () => {
        const { total_task, task_completed } = this.state
        var perentage = parseFloat((task_completed / total_task) * 100);
        console.log('hello', perentage);
        this.setState({ perentage })
    }
    componentDidMount() {
        SplashScreen.hide();
        this.props.navigation.setParams({ showTabBar: false });
        // this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
        this.calculate_Percentage_task();
    }
    Right_icon_pressed = () => {
        this.props.navigation.navigate('EditProfile');
        console.log('Edit profile')
    }
    onScroll = (event) => {
        const { navigation } = this.props;
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif = currentOffset - (this.offset || 0);

        if (dif < 0) {
            navigation.setParams({ showTabBar: false });
        } else {
            navigation.setParams({ showTabBar: true });
        }
        //console.log('dif=',dif);

        this.offset = currentOffset;
    }
    render() {
        const { name, description, phone, email, perentage, task_completed, total_task } = this.state
        const { routes } = arrayss
        return (
            <View style={{ flex: 1 }}>
                <ScrollView ref='_scrollView' >
                    <View style={{ paddingBottom: 5 }}>
                        <ComponentBG>

                            <AppHeader title={'Profile'} left={loginUser == 2 ? true : false} right={3} OnRightPress={this.Right_icon_pressed} CustomStyles={{ height: 50, width: '100%', flexDirection: 'row' }} CustomStyles_status={true} />
                            <View style={{ flex: 1, backgroundColor: '#000' }}>


                                <View style={Styles.ProfileStyles.Image_userStyle}>
                                    <View style={{ height: '100%', width: '100%' }}>
                                        <Image source={Images.profile_Image} style={{ width: '100%', height: '95%' }} resizeMode='cover' />
                                    </View>

                                </View>

                                <View style={Styles.ProfileStyles.profileView}>
                                    <Text style={Styles.ProfileStyles.ProfileName}>{name}</Text>
                                    <Text style={Styles.ProfileStyles.Description_tag}>Description</Text>
                                    <Text style={Styles.ProfileStyles.Dexcription} numberOfLines={3}>{description}</Text>
                                    <Text style={Styles.ProfileStyles.Description_tag}>Contact</Text>
                                    <Text style={Styles.ProfileStyles.Dexcription}>{phone}</Text>
                                    <Text style={Styles.ProfileStyles.Description_tag}>Task</Text>
                                    <View style={Styles.ProfileStyles.Percentage_desc_view}>
                                        <Text style={Styles.ProfileStyles.Percentage_desc}>{perentage}% Completed Task </Text>
                                        <Text style={Styles.ProfileStyles.Percentage_desc}>{task_completed}/{total_task} Tasks </Text>
                                    </View>
                                    <View style={Styles.ProfileStyles.Progress_bar_outside}>
                                        <View style={[{ width: perentage + '%', }, Styles.ProfileStyles.Progress_bar_inside]} />
                                    </View>
                                </View>
                                {
                                    loginUser != 2 ?
                                    <View style={{ height: 70, flexDirection: 'row', borderTopWidth: 2, borderTopColor: '#DFDFDF' ,backgroundColor:'#fff'}}>
                                    {
                                        routes.map((routes, i) =>
                                            (
                                                <TabItem key={routes.routeName} navigation={this.props.navigation} {...routes} isActive={index == i} indexno={i} />
                                            ))
                                    }
                                </View>
                                :
                                null
                                }
                                
                            </View>
                        </ComponentBG>
                    </View>
                </ScrollView>
            </View>

        )

    }



}
export default Profile;
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React, { Component } from 'react'
import Styles from '../../utils/StylesUtil/Styles';
import SplashScreen from 'react-native-splash-screen';
import Images from '../../utils/ImageUtil/Images';
import AppButtons from '../../components/AppButtons';

class My_Hub_Task extends Component {
    state = {
        TaskArray: [
            {
                task_id: 1,
                task_open_accordian_view: false,
                status: 1
            },
            {
                task_id: 2,
                task_open_accordian_view: false,
                status: 0

            },
            {
                task_id: 3,
                task_open_accordian_view: false,
                status: 1
            },
            {
                task_id: 4,
                task_open_accordian_view: false,
                status: 0

            },
            {
                task_id: 5,
                task_open_accordian_view: false,
                status: 1
            },
            {
                task_id: 6,
                task_open_accordian_view: false,
                status: 0

            },
            {
                task_id: 7,
                task_open_accordian_view: false,
                status: 1
            },
            {
                task_id: 8,
                task_open_accordian_view: false,
                status: 0

            },
        ]
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    handleViews(item) {
        console.log('item clicked', item.item)
        const { TaskArray } = this.state
        for (let i = 0; i < TaskArray.length; i++) {
            if (TaskArray[i].task_id == item.item.task_id) {
                TaskArray[i].task_open_accordian_view = !TaskArray[i].task_open_accordian_view
            }
        }
        this.setState({ TaskArray })
    }
    handleTaskArray(item) {
        console.log('renderItesm', JSON.stringify(item))
        return (

            item.item.task_open_accordian_view == false

                ?
                <View style={[Styles.My_Hub_Task.MainView, { borderLeftColor: item.index % 2 == 0 ? '#EBE0E1' : '#A3676D' }]} key={item.index}>
                    <View style={{ flex: 0.60, justifyContent: 'center', paddingLeft: '5%' }}>
                        <Text style={Styles.My_Hub_Task.TaskTime}>22,October 2019</Text>
                        <Text style={Styles.My_Hub_Task.Task_about}>Lorem ipsum dolor sit amet</Text>
                    </View>
                    <View style={{ flex: 0.30, alignItems: 'center' }}>
                        <Text style={Styles.My_Hub_Task.statusText}>{item.item.status == 0 ? 'Incomplete' : 'Complete'}</Text>
                    </View>
                    <View style={[{ flex: 0.1, }, Styles.CommonStyles.centerStyles]}>
                        <TouchableOpacity style={[{ height: 20, width: 20 }, Styles.CommonStyles.centerStyles]} onPress={() => this.handleViews(item)}>
                            <Image source={Images.DownArrow} style={{ height: 6, width: 12 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                :

                <View style={[Styles.My_Hub_Task.OpenView.openView, { borderLeftColor: item.index % 2 == 0 ? '#EBE0E1' : '#A3676D', paddingHorizontal: '3%' ,paddingTop:10,}]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 0.1 }}>
                        <View style={{ flex: 0.9, }}>
                            <Text style={Styles.My_Hub_Task.TaskTime}>Right after 2 hours</Text>
                        </View>
                        <View style={[{ flex: 0.1, }, Styles.CommonStyles.centerStyles]}>
                            <TouchableOpacity style={[{ height: 20, width: 20 }, Styles.CommonStyles.centerStyles]} onPress={() => this.handleViews(item)}>
                                <Image source={Images.UpArrow} style={{ height: 6, width: 12 }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginVertical: 3 }]}>Task Name</Text>
                    <Text style={Styles.My_Hub_Task.OpenView.Task_Name}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginTop: 10, marginBottom: 3 }]}>Task Description</Text>
                    <Text style={Styles.My_Hub_Task.OpenView.Task_Name}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <Text style={[Styles.My_Hub_Task.Task_about, { marginTop: '4%' }]}>Task Image/Logo</Text>
                    <View style={{ flex: 0.6, marginTop: '2%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flex: 0.31, }}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                        <View style={{ flex: 0.31, }}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                        <View style={{ flex: 0.31, }}>
                            <Image source={Images.image_place_holder} style={Styles.My_Hub_Task.OpenView.ImageStyle} resizeMode='contain' />
                        </View>
                    </View>

                    <View style={[{ flex: 0.25, marginTop: 5, }, Styles.CommonStyles.centerStyles]}>
                        <AppButtons style={{ height: '80%', padding: 1, width: '40%' }} onPress={() => console.log('yes')} title={'COMPLETED'} textColor="#F2EEEF" disabled={true} />


                    </View>
                </View>

        )
    }

    render() {
        const { TaskArray } = this.state
        return (
            <SafeAreaView style={[Styles.CommonStyles.full_flex,{paddingTop:1}]}>
                <FlatList
                    data={TaskArray}
                    style={Styles.CommonStyles.full_flex}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => this.handleTaskArray(item)}
                    extraData={this.state}
                />
            </SafeAreaView>
        )
    }

}
export default My_Hub_Task;
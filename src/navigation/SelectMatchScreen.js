import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add, delet, reset } from '../reducers/select';


const MBTIitem = ({type, imageResource}) => {
    const [selects, setSelect] = useState(false);
    const dispatch = useDispatch();

    const addMbti = type => {
        dispatch(add(type));
    };

    const deleteMbti = type => {
        dispatch(delet(type));
    };

    return(
        <TouchableOpacity
                        onPress={() => { setSelect(!selects);
                                         if(selects){
                                             deleteMbti(type);}
                                         else{
                                             addMbti(type);}
                                            }}

                        style={{
                            justifyContent: 'center',
                            padding: 0,
                            marginLeft: 20,
                            marginBottom: 20,
                            borderRadius: 50,
                            width: '10.5%',
                            height: '40%',
                            borderWidth: 3,
                            borderStyle: 'dashed',
                            borderColor: selects== false ? '#808080' : '#A0DBDB',
                            alignItems: 'center' 
                        }}>
                        <Image source={imageResource} style={styles.image}/>
                        <Text style={{fontFamily: 'aTitleGothic',fontSize: 28, textAlign: 'center', fontWeight: 'bold', color: '#808080'}}>{type}</Text>
        </TouchableOpacity>
    );
}

const SelectMatchScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const resetMbti = () => {
        dispatch(reset());
    }

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        horizontal={true}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'}}>
                <StatusBar barStyle="dark-content" />
                <MBTIitem type="INTP" imageResource={require("../img/INTP.png")}/>
                <MBTIitem type="INTJ" imageResource={require("../img/INTJ.png")}/>
                <MBTIitem type="INFP" imageResource={require("../img/INFP.png")}/>
                <MBTIitem type="INFJ" imageResource={require("../img/INFJ.png")}/>
                <MBTIitem type="ISTP" imageResource={require("../img/ISTP.png")}/>
                <MBTIitem type="ISTJ" imageResource={require("../img/ISTJ.png")}/>
                <MBTIitem type="ISFP" imageResource={require("../img/ISFP.png")}/>
                <MBTIitem type="ISFJ" imageResource={require("../img/ISFJ.png")}/>
                <MBTIitem type="ENTP" imageResource={require("../img/ENTP.png")}/>
                <MBTIitem type="ENTJ" imageResource={require("../img/ENTJ.png")}/>
                <MBTIitem type="ENFP" imageResource={require("../img/ENFP.png")}/>
                <MBTIitem type="ENFJ" imageResource={require("../img/ENFJ.png")}/>
                <MBTIitem type="ESTP" imageResource={require("../img/ESTP.png")}/>
                <MBTIitem type="ESTJ" imageResource={require("../img/ESTJ.png")}/>
                <MBTIitem type="ESFP" imageResource={require("../img/ESFP.png")}/>
                <MBTIitem type="ESFJ" imageResource={require("../img/ESFJ.png")}/>
            </ScrollView>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("SelectMatchLoadingScreen")}
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#56A7A7',
                    padding: 10,
                    marginBottom: 20,
                    marginLeft: '10%',
                    borderRadius: 30,
                    width: 120,
                    height: 50,
                }}>
                <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, textAlign: 'center', color: 'white'}}>매칭 시작</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.goBack();
                                 resetMbti();
                }
                            }
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#56A7A7',
                    padding: 10,
                    marginBottom: 20,
                    marginLeft: '5%',
                    borderRadius: 30,
                    width: 120,
                    height: 50,
                }}>
                <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, textAlign: 'center', color: 'white'}}>취소</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: 500,
    },
    scrollView: {
        width: 350,
        marginHorizontal: 20,
        marginTop: 150,
    },
    image: {
        width: 90,
        height:90,
    }
})

export default SelectMatchScreen;  

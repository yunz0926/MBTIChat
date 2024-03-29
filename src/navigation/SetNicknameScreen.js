import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { changeNickname } from '../reducers/user';
import axios from 'axios';

const SetNicknameScreen = ({ navigation }) => {
    const [ newnick, setNick ] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const { id } = state.user;
    const changenick = newnick => {
        dispatch(changeNickname(newnick));
    }

    return(
        <View style={styles.container}>
            <Text style={{
                position: 'absolute',
                left: 100,
                top: 100,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'aTitleGothic'
            }}>닉네임을 입력해주세요.</Text>
            <View style={{ position: 'absolute', left: 110, top: 180}}>
                <TextInput onChangeText={(text) => setNick(text)}
                           placeholder='닉네임'/>
                <TouchableOpacity
                        onPress={() => {
                            axios.put(`http://192.249.18.173/user/nickname?nick=${newnick}&id=${id}`);
                            changenick(newnick);
                            navigation.navigate('HomeScreen');
                        }}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: '#56A7A7',
                            marginTop: 20,
                            padding: 20,
                            borderRadius: 30,
                            width: 150,
                            height: 60,
                    }}>
                        <Text style={{fontFamily: 'aTitleGothic',fontSize: 17, textAlign: 'center', color: 'white'}}>닉네임 설정</Text>
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

export default SetNicknameScreen;
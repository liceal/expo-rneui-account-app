import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import AntIcons from "react-native-vector-icons/AntDesign";
import testApi from "api/test";

function LoginScreen({ setIsLogin }) {
    const [loading, setLoading] = useState(false);

    const [info, setInfo] = useState({
        username: "",
        password: "",
    });

    const login = () => {
        console.log("login");
        if (!info.username) {
            Alert.alert("请填写用户名");
            return;
        }
        if (!info.password) {
            Alert.alert("请填写密码");
            return;
        }
        setLoading(true);

        testApi.test
            .get()
            .then((res) => {
                console.log(res);
                setIsLogin(true);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setLoading(false);
                console.log("finally");
            });
    };

    return (
        <View>
            <Input
                leftIcon={(e) => {
                    return (
                        <AntIcons
                            name="user"
                            size={20}
                        />
                    );
                }}
                placeholder="用户名"
                value={info.username}
                onChangeText={(username) => {
                    let data = { ...info };
                    data.username = username;
                    setInfo(data);
                }}
            />
            <Input
                leftIcon={(e) => {
                    return (
                        <AntIcons
                            name="key"
                            size={20}
                        />
                    );
                }}
                placeholder="密码"
                secureTextEntry
                value={info.password}
                onChangeText={(password) => {
                    let data = { ...info };
                    data.password = password;
                    setInfo(data);
                }}
            />
            <Button
                onPress={login}
                loading={loading}
            >
                登录
            </Button>
        </View>
    );
}

function InfoScreen({ setIsLogin }) {
    const outLogin = () => {
        setIsLogin(false);
    };
    return (
        <View>
            <Text>个人信息</Text>
            <Button
                title="退出登录"
                onPress={outLogin}
            />
        </View>
    );
}

export default function My() {
    const [isLogin, setIsLogin] = useState(false);

    if (isLogin) {
        return <InfoScreen setIsLogin={setIsLogin} />;
    } else {
        return <LoginScreen setIsLogin={setIsLogin} />;
    }
}

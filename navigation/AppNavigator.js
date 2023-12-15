import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import Test from "@/Test";
import My from "@/My";
import Home from "@/Home";
import BillList from "@/billList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import DetachModal from "@/DetachModal";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator();

function withScrollView(Component) {
    return function WithScrollView(props) {
        return (
            // 键盘安全距离 和 滚动条容器
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={90}
            >
                {/* <ScrollView style={{ flex: 1 }}> */}
                <Component {...props} />
                {/* </ScrollView> */}
            </KeyboardAvoidingView>
        );
    };
}
const TabNavigator = () => {
    console.log("render tab navigator");
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="BillList"
                component={withScrollView(BillList)}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        iconName = focused ? "reader-sharp" : "reader-outline";

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            {/* <Tab.Screen name="Home" component={withScrollView(Home)}
        options={{
            tabBarIcon: ({ focused, color, size }) => <Icons name="stepforward" size={size} color={color} />,
        }}
      /> */}
            <Tab.Screen
                name="My"
                component={withScrollView(My)}
            />
            {/* <Tab.Screen name="Test" component={withScrollView(Test)} /> */}
        </Tab.Navigator>
    );
};

export default function AppNavigator() {
    return (
        <NavigationContainer>
            {/* <SafeAreaProvider>
                <SafeAreaView>
                    <Test />
                </SafeAreaView>
            </SafeAreaProvider> */}

            {/* <TabNavigator /> */}

            <Stack.Navigator
                screenOptions={
                    {
                        // unmountOnBlur: false,
                    }
                }
            >
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Group
                    screenOptions={{
                        presentation: "modal",
                    }}
                >
                    <Stack.Screen
                        name="ModalScreen"
                        component={Test}
                    />
                </Stack.Group>
            </Stack.Navigator>

            {/* <DetachModal /> */}
        </NavigationContainer>
    );
}

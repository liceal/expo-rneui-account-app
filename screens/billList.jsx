import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Modal,
    KeyboardAvoidingView,
    ScrollView,
    VirtualizedList,
} from "react-native";
import { Button, ListItem, Icon, Avatar, Input } from "@rneui/themed";
import { SwipeListView } from "react-native-swipe-list-view";
import BottomSheet from "@gorhom/bottom-sheet";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function renderList() {
    console.log("render list");
    const [data, setData] = useState(
        Array(40)
            .fill("")
            .map((v) => ({
                icon: "rowing",
                content: "content",
                number: 891,
            }))
    );

    // const [focused, setFocused] = useState()

    return (
        <ScrollView>
            {data.map((v, i) => {
                return (
                    <ListItem.Swipeable
                        key={i}
                        leftContent={(reset) => (
                            <Button
                                title="Info"
                                onPress={() => reset()}
                                icon={{ name: "info", color: "white" }}
                                buttonStyle={{ minHeight: "100%" }}
                            />
                        )}
                        rightContent={(reset) => (
                            <Button
                                size="sm"
                                title="Delete"
                                onPress={() => reset()}
                                icon={{ name: "delete", color: "white" }}
                                color="error"
                                buttonStyle={{ minHeight: "100%" }}
                            />
                        )}
                    >
                        <Icon name="rowing" />
                        <ListItem.Content style={styles.itemContent}>
                            {/* <ListItem.Title>{v.content}</ListItem.Title>
                                <ListItem.Title style={{ backgroundColor: 'red' }} onPress={(e) => {
                                    console.log(e);
                                }}>{v.number}</ListItem.Title> */}
                            <View style={{ backgroundColor: "blue", flex: 1 }}>
                                {/* <Text>{v.content}</Text> */}
                                <TextInput />
                            </View>
                            <View style={{ backgroundColor: "red" }}>
                                <Text>{v.number}</Text>
                            </View>
                            {/* <ListItem.Input value={v.content} textAlign="left" onChangeText={(e) => {
                                    data[i].content = e
                                    setData([...data])
                                }} />
                                <ListItem.Input value={v.number.toString()} keyboardType="numbers-and-punctuation" onChangeText={(e) => {
                                    data[i].number = e
                                    setData([...data])
                                }} /> */}
                        </ListItem.Content>
                    </ListItem.Swipeable>
                );
            })}
        </ScrollView>
    );
}

// 图标抽屉
const RenderIconSelector = forwardRef((props, ref) => {
    console.log(props, ref);

    const snapPoints = ["25%", "50%", "80%"];

    const _ref = ref || useRef(null);

    const icons = [
        {
            name: "amazon",
            type: "ant-design",
        },
        {
            name: "wechat",
            type: "ant-design",
        },
        {
            name: "youtube",
            type: "ant-design",
        },
        {
            name: "dribbble",
            type: "ant-design",
        },
        {
            name: "medium-monogram",
            type: "ant-design",
        },
        {
            name: "linkedin-square",
            type: "ant-design",
        },
    ];

    const handleIconPress = (icon) => {
        if (props.iconPress) {
            props.iconPress(icon);
        }
    };

    return (
        <BottomSheet
            ref={_ref}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            index={-1}
            style={iconSelector.bottomSheet}
            {...props}
        >
            <View style={iconSelector.container}>
                {icons.map((icon) => {
                    return (
                        <TouchableOpacity
                            key={icon.name}
                            onPress={() => handleIconPress(icon)}
                            style={iconSelector.icon}
                        >
                            <Avatar
                                size={50}
                                rounded
                                icon={icon}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </BottomSheet>
    );
});

// 增加
function RenderAdd({ setModalVisible, navigation }) {
    return (
        <View style={addStyle.container}>
            <TouchableOpacity
                onPress={() => {
                    console.log("plus");
                    // setModalVisible(true);
                    navigation.navigate("ModalScreen");
                }}
            >
                <Avatar
                    size={50}
                    rounded
                    icon={{ name: "pluscircle", type: "ant-design" }}
                    containerStyle={addStyle.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

function testList({ navigation }) {
    // console.log(navigation);

    const [modalVisible, setModalVisible] = useState(false);

    const [activeRowIconIndex, setActiveRowIconIndex] = useState();
    const [activeRowContentIndex, setActiveRowContentIndex] = useState();
    const [activeRowNumberIndex, setActiveRowNumberIndex] = useState();

    const renderIconSelectorRef = useRef(null);

    const [listData, setListData] = useState(
        Array(20)
            .fill("")
            .map((_, i) => ({
                key: `${i}`,
                text: `item #${i}`,
                number: i * 10,
                icon: {
                    name: "amazon",
                    type: "ant-design",
                },
            }))
    );

    const closeRow = (rowMap, index) => {
        if (rowMap[index]) {
            rowMap[index].closeRow();
        }
    };

    const deleteRow = (rowMap, index) => {
        closeRow(rowMap, index);
        const newData = [...listData];
        newData.splice(index, 1);
        setListData(newData);
    };

    const editAvatar = (rowMap, index) => {
        // console.log(rowMap, rowKey);
        // navigation.navigate('ModalScreen')
        // setModalVisible(true);
        // console.log(renderIconSelectorRef);
        setActiveRowIconIndex(index);
        renderIconSelectorRef.current.expand();
    };

    const iconPress = (icon) => {
        // console.log(icon);
        const newData = [...listData];
        if (newData[activeRowIconIndex]) {
            newData[activeRowIconIndex].icon = icon;
            setListData(newData);
            renderIconSelectorRef.current.close();
        }
    };

    return (
        <View>
            <SwipeListView
                data={listData}
                renderItem={(data, rowMap) => (
                    <View style={styles.rowFront}>
                        <TouchableOpacity
                            onPress={() => editAvatar(rowMap, data.index)}
                        >
                            <Avatar
                                size={50}
                                rounded
                                icon={data.item.icon}
                                containerStyle={styles.rowAvatar}
                            />
                        </TouchableOpacity>
                        {activeRowContentIndex === data.item.key ? (
                            <TextInput
                                key={data.item.key}
                                autoFocus
                                onBlur={() => {
                                    setActiveRowContentIndex(null);
                                }}
                                value={data.item.text}
                                onChangeText={(text) => {
                                    const newData = [...listData];
                                    newData[data.index].text = text;
                                    setListData(newData);
                                }}
                                style={styles.rowContent}
                            />
                        ) : (
                            <TouchableOpacity
                                style={styles.rowContent}
                                onPress={() => {
                                    setActiveRowContentIndex(data.item.key);
                                }}
                            >
                                <Text>{data.item.text}</Text>
                            </TouchableOpacity>
                        )}

                        {activeRowNumberIndex === data.item.key ? (
                            <TextInput
                                key={data.item.key}
                                autoFocus
                                onBlur={() => {
                                    setActiveRowNumberIndex(null);
                                }}
                                value={String(data.item.number)}
                                onChangeText={(text) => {
                                    const newData = [...listData];
                                    newData[data.index].number = text;
                                    setListData(newData);
                                }}
                                style={styles.rowNumber}
                            />
                        ) : (
                            <TouchableOpacity
                                style={styles.rowNumber}
                                onPress={() => {
                                    setActiveRowNumberIndex(data.item.key);
                                }}
                            >
                                <Text>{data.item.number}</Text>
                            </TouchableOpacity>
                        )}
                        {/* <Input value={data.item.text} />
                            <Input value={data.item.text} /> */}
                        {/* <Text>I am {data.item.text} in a SwipeListView</Text> */}
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity></TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteRow(rowMap, data.index)}
                        >
                            <View style={styles.rowBackRight}>
                                <Text style={{ color: "white" }}>删除</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                disableRightSwipe
                // leftOpenValue={75}
                // stopLeftSwipe={100}
                rightOpenValue={-75}
                stopRightSwipe={-100}
            />

            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <SafeAreaProvider>
                    <SafeAreaView>
                        <Text>modal</Text>
                        <Button
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            close
                        </Button>
                        <Input />
                    </SafeAreaView>
                </SafeAreaProvider>
            </Modal>

            {/* 图标抽屉，点击图标后会打开这个 */}
            <RenderIconSelector
                ref={renderIconSelectorRef}
                iconPress={iconPress}
            />

            {RenderAdd({ setModalVisible, navigation })}
        </View>
    );
}

const rowHeight = 60;

const styles = StyleSheet.create({
    itemContent: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    rowFront: {
        alignItems: "center",
        backgroundColor: "white",
        borderBottomColor: "rgba(200, 200, 200, 0.3)",
        borderBottomWidth: 1,
        height: rowHeight,
        flexDirection: "row",
        padding: 10,
    },
    rowBack: {
        alignItems: "center",
        backgroundColor: "#DDD",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowBackLeft: {
        width: 100,
        height: rowHeight,
        backgroundColor: "blue",
        color: "white",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 15,
    },
    rowBackRight: {
        width: 100,
        height: rowHeight,
        backgroundColor: "red",
        color: "white",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 15,
    },
    rowAvatar: {
        backgroundColor: "#666",
        marginRight: 10,
    },
    rowContent: {
        height: "100%",
        // backgroundColor: 'red',
        justifyContent: "center",
        flex: 2,
    },
    rowNumber: {
        height: "100%",
        // backgroundColor: "blue",
        justifyContent: "center",
        flex: 1,
        alignItems: "flex-end",
    },
});

const iconSelector = StyleSheet.create({
    bottomSheet: {
        borderRadius: "5px 5px 0px 0px",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 20,
        padding: 20,
    },
    icon: {
        backgroundColor: "#666",
        display: "block",
        borderRadius: "50%",
    },
});

const addStyle = StyleSheet.create({
    container: {
        position: "absolute",
        right: 10,
        bottom: 10,
        zIndex: 100,
    },
    icon: {
        backgroundColor: "orange",
    },
});

export default testList;

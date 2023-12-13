import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View, Modal } from "react-native";
import { Button, ListItem, Icon, Avatar, Input } from '@rneui/themed'
import { SwipeListView } from 'react-native-swipe-list-view';

function renderList() {
  console.log('render list');
  const [data, setData] = useState(
    [
      {
        icon: 'rowing',
        content: 'content',
        number: 891,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content",
        number: 89,
      },
    ]
  );

  // const [focused, setFocused] = useState()

  return data.map((v, i) => {
    return (
      <ListItem.Swipeable
        key={i}
        leftContent={(reset) => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
          />
        )}
        rightContent={(reset) => (
          <Button
            size="sm"
            title="Delete"
            onPress={() => reset()}
            icon={{ name: 'delete', color: 'white' }}
            color='error'
            buttonStyle={{ minHeight: '100%' }}
          />
        )}
      >
        <Icon name="rowing" />
        <ListItem.Content style={styles.itemContent}>
          {/* <ListItem.Title>{v.content}</ListItem.Title>
          <ListItem.Title style={{ backgroundColor: 'red' }} onPress={(e) => {
            console.log(e);
          }}>{v.number}</ListItem.Title> */}
          <View style={{ backgroundColor: 'blue', flex: 1 }}><Text>{v.content}</Text></View>
          <View style={{ backgroundColor: 'red' }}><Text>{v.number}</Text></View>
          {/* <ListItem.Input value={v.content} textAlign="left" onChangeText={(e) => {
            data[i].content = e
            setData([...data])
          }} />
          <ListItem.Input value={v.number.toString()} keyboardType="numbers-and-punctuation" onChangeText={(e) => {
            data[i].number = e
            setData([...data])
          }} /> */}
        </ListItem.Content>
      </ListItem.Swipeable >
    )
  })
}

export default function testList({ navigation }) {
  console.log(navigation);

  const [modalVisible, setModalVisible] = useState(false)

  const [listData, setListData] = useState(
    Array(20)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  )

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const editAvatar = (rowMap, rowKey) => {
    console.log(rowMap, rowKey);
    navigation.navigate('ModalScreen')
    // setModalVisible(true);
  }

  return (
    <View>
      <SwipeListView
        data={listData}
        renderItem={(data, rowMap) => (
          <View style={styles.rowFront}>
            <TouchableOpacity onPress={() => editAvatar(rowMap, data.item.key)}>
              <Avatar
                size={30}
                rounded
                icon={{ name: "pencil", type: "font-awesome" }}
                containerStyle={styles.rowAvatar}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContent} onPress={() => {
              console.log('content')
            }}>
              <Text>{data.item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowNumber} onPress={() => {
              console.log('number');
            }}>
              <Text>99</Text>
            </TouchableOpacity>
            {/* <Input value={data.item.text} />
          <Input value={data.item.text} /> */}
            {/* <Text>I am {data.item.text} in a SwipeListView</Text> */}
          </ View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity>
              {/* <View style={styles.rowBackLeft}>
              <Text style={{ color: 'white' }}>Left</Text>
            </View> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteRow(rowMap, data.item.key)}>
              <View style={styles.rowBackRight}>
                <Text style={{ color: 'white' }}>删除</Text>
              </View>
            </TouchableOpacity>
            {/* <Button
            size="sm"
            title="Delete"
            onPress={() => closeRow(rowMap, data.item.key)}
            icon={{ name: 'delete', color: 'white' }}
            color='error'
            buttonStyle={{ minHeight: '100%' }}
          /> */}
          </View>
        )}
        disableRightSwipe
        // leftOpenValue={75}
        // stopLeftSwipe={100}
        rightOpenValue={-75}
        stopRightSwipe={-100}
      />

      <Modal visible={modalVisible} animationType="slide">
        <Text>modal</Text>
        <Button onPress={() => {
          setModalVisible(false)
        }}>close</Button>
      </Modal>
    </View>
  )
}

const rowHeight = 60

const styles = StyleSheet.create({
  itemContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: "row"
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'rgba(200, 200, 200, 0.3)',
    borderBottomWidth: 1,
    height: rowHeight,
    flexDirection: 'row',
    padding: 10
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBackLeft: {
    width: 100,
    height: rowHeight,
    backgroundColor: "blue",
    color: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 15
  },
  rowBackRight: {
    width: 100,
    height: rowHeight,
    backgroundColor: "red",
    color: "white",
    display: 'flex',
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 15
  },
  rowAvatar: {
    backgroundColor: '#e6e6e6',
    marginRight: 10
  },
  rowContent: {
    height: '100%',
    backgroundColor: 'red',
    justifyContent: "center",
    flex: 2
  },
  rowNumber: {
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    flex: 1,
    alignItems: 'flex-end'
  }
})
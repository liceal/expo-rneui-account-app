import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, ListItem, Icon } from '@rneui/themed'
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

// export default function BillList() {
//   console.log('render bill list');
//   return (
//     <View>
//       {renderList()}
//     </View>
//   )
// }

const listViewData = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

const closeRow = (rowMap, rowKey) => {
  if (rowMap[rowKey]) {
    rowMap[rowKey].closeRow();
  }
};

export default function testList() {

  return (
    <SwipeListView
      data={listViewData}
      renderItem={(data, rowMap) => (
        <View style={styles.rowFront}>
          <Text>I am {data.item.text} in a SwipeListView</Text>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableOpacity>
            <View style={styles.rowBackLeft}>
              <Text style={{ color: 'white' }}>Left</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rowBackRight}>
              <Text style={{ color: 'white' }}>Right</Text>
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
      leftOpenValue={75}
      rightOpenValue={-75}
      stopLeftSwipe={100}
      stopRightSwipe={-100}
    />
  )
}

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
    justifyContent: 'center',
    height: 50,
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
    height: 50,
    backgroundColor: "blue",
    color: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 15
  },
  rowBackRight: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    color: "white",
    display: 'flex',
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 15
  }
})
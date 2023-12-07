import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, ListItem, Icon } from '@rneui/themed'

function renderList() {
  console.log('render list');
  const [data, setData] = useState(
    [
      {
        icon: 'rowing',
        content: "content content content",
        number: 89,
      },
      {
        icon: 'rowing',
        content: "content content content",
        number: 89,
      }
    ]
  )

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
          {/* <Text>{v.content}</Text> */}
          <TextInput value={v.content} onChangeText={(e) => {
            console.log(e);
          }} />

          <Text>{v.number}</Text>
        </ListItem.Content>
      </ListItem.Swipeable>
    )
  })
}

export default function BillList() {
  console.log('render bill list');
  return (
    <View>
      {renderList()}
    </View>
  )
}

const styles = StyleSheet.create({
  itemContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: "row"
  }
})
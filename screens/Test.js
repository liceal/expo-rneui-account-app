import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from '@rneui/themed'

export default function Test() {
  console.log('render test')
  return (
    <View>
      <Text>screen test</Text>
      <Button>
        hello
      </Button>
      <Input />
    </View>
  )
}
import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from '@rneui/themed'

import ButtomSheet from '@gorhom/bottom-sheet'

export default function Test({ navigation }) {
  console.log('render test')
  return (
    <View style={{ height: '100%' }}>
      <Text>screen test</Text>
      <Button onPress={() => {
        navigation.navigate('ModalScreen')
      }}>
        open modalscreen
      </Button>
      <Input />

      <ButtomSheet snapPoints={['2', '25%', '50%']}>
        <Text>screen test</Text>
      </ButtomSheet>
    </View>
  )
}
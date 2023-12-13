import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ThemeProvider, createTheme } from "@rneui/themed";
// import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from "./navigation/AppNavigator";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={{ flex: 1 }}> */}
        {/* <NavigationContainer> */}
        <AppNavigator />
        {/* </NavigationContainer> */}
        {/* </KeyboardAvoidingView> */}

        {/* expo状态栏 */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

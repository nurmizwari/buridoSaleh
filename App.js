import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./navigation";
import React, { useEffect } from "react";
import { BackHandler, Alert } from "react-native";

export default function App() {
  //! backhandler
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Tunggu!", "Yakin keluar ?", [
        {
          text: "Tidak",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Ya", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46cd2-aed5-3ad53abb28ba",
      Warung: "Mas Anggun",
      alamat: "Cicadas",
      stock: 50,
    },
    {
      id: "3ac68afc-c605-48d3-da4f8-fbd91aa97f63",
      Warung: "Mang Ari",
      alamat: "Cibungkul",
      stock: 50,
    },
    {
      id: "58694a0f-3da1-471fd-bd96-145571e29d72",
      Warung: "Bu Hani",
      alamat: "Cicadas",
      stock: 50,
    },
    {
      id: "58694a0f-3da1-471f-bd96-1s571e29d72",
      Warung: "Bu Sri",
      alamat: "Cipesing",
      stock: 50,
    },
    {
      id: "58694a0f-3da1-471f-bd96-1s571e29dd",
      Warung: "Bu Bieng",
      alamat: "Beh Bukinem",
      stock: 50,
    },
    {
      id: "58694a0f-3da1-47sss1f-bd96-1s571e29dd",
      Warung: "Bu Bieng",
      alamat: "Beh Bukinem",
      stock: 50,
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 5,
        backgroundColor: "#61dafb",
        height: 70,
        marginTop: 10,
        borderRadius: 5,
        marginRight: 2,
        shadowColor: "black",
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <Text style={{ color: "white" }}>{item.Warung}</Text>
      <Text style={{ color: "white" }}>{item.alamat}</Text>
      <Text style={{ color: "white" }}>stock:{item.stock}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Image style={{ marginTop: 10 }} source={require("../assets/cart.png")} />
      <View
        style={{
          backgroundColor: "grey",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
          elevation: 3,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, elevation: 3 }}>
          Stock Saleh Burido Pesahangan : 100 Bks
        </Text>
      </View>
      <Text style={{ color: "black", marginVertical: 10, fontSize: 18 }}>
        Warung Langganan
      </Text>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "#F5FCFF",
  },
  warung: {
    fontSize: 18,
  },
});

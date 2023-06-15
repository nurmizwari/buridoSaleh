import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
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
        width: 150,
        marginTop: 2,
        borderRadius: 5,
        marginRight: 5,
        shadowColor: "black",
        shadowRadius: 10,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "black", fontWeight: 700 }}>{item.Warung}</Text>
      <Text style={{ color: "black" }}>{item.alamat}</Text>

      <Text
        style={{
          color: "black",
          backgroundColor: "#FFEEBB",
          padding: 3,
          borderRadius: 5,
          fontWeight: 700,
        }}
      >
        Stock:{item.stock}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Image
        style={{ marginTop: 10 }}
        source={require("../assets/wallet.gif")}
      />
      <View
        style={{
          backgroundColor: "#61dafb",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: 700,
            fontSize: 16,
            elevation: 3,
          }}
        >
          Stock Saleh Burido Pesahangan : 100 Bks
        </Text>
      </View>
      <Text
        style={{
          color: "black",
          fontWeight: 700,
          marginVertical: 10,
          fontSize: 18,
        }}
      >
        Warung Langganan
      </Text>
      <FlatList
        horizontal
        data={DATA}
        // numColumns={2} // Jumlah kolom dalam grid
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          flex: 1,
          marginVertical: 20,
          backgroundColor: "#F1D4E5",
          padding: 10,
          borderRadius: 10,
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: 700,
            marginVertical: 10,
            fontSize: 18,
          }}
        >
          Pesan Saleh
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Bungkus"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "black", fontWeight: 700, fontSize: 14 }}>
            Kirim
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
    // backgroundColor: "#F5FCFF",
  },
  warung: {
    fontSize: 18,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    width: "100%",
    // borderColor: "blue",
    elevation: 3,
    backgroundColor: "#61dafb",
    // borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

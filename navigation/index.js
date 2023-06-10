import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import User from "../screens/User";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "User") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "log-in-outline" : "log-in-outline";
          }

          // You can customize the icon based on your needs
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue", // Customize the active tab icon color
        tabBarInactiveTintColor: "gray", // Customize the inactive tab icon color
        tabBarLabelStyle: { fontSize: 12 }, // Customize the tab label style
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

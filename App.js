import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/screen/HomeScreen";

const homeName = "Home";
const searchName = "Search";
const settingsName = "Settings";
const addName = "Add";
const folderName = "Library";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === searchName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === addName) {
              iconName = focused ? "add-circle-sharp" : "add-circle-outline";
              size = 45;
            } else if (rn === folderName) {
              iconName = focused ? "folder" : "folder-outline";
            }
            return (
              <Ionicons
                style={{ marginTop: 5,  }}
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: "#0A092B",
            borderTopColor: "#2C2D42", 
            borderTopWidth: 2, 
            borderStyle: "solid",
            height: 80
          },
          headerShown: false, 
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#4B526C",
          tabBarLabelStyle: { fontSize: 10, fontWeight: 700, marginBottom: 0},
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={HomeScreen} />
        <Tab.Screen
          name={addName}
          component={HomeScreen}
          options={{ tabBarLabelStyle: {display:'none'} }}
        />
        <Tab.Screen name={folderName} component={HomeScreen} />
        <Tab.Screen name={settingsName} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

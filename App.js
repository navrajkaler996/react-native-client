import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import Notification from "./components/Notification";
import DiscussionOverview from "./screens/DiscussionOverviewScreen";
import DiscussionOverviewScreen from "./screens/DiscussionOverviewScreen";

import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import AddDiscussionScreen from "./screens/AddDiscussionScreen";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "john_doe",
            headerRight: () => <Notification />,
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}></Stack.Screen>

        <Stack.Screen
          name="DiscussionOverviewScreen"
          component={DiscussionOverview}
          options={{
            headerTitle: "Overview",
          }}></Stack.Screen>

        <Stack.Screen
          name="AddDiscussionScreen"
          // component={AddDiscussionScreen}
          options={{
            headerTitle: "Add discussion",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setIsClicked(true)}>
                <Text style={{ fontWeight: "bold" }}>POST</Text>
              </TouchableOpacity>
            ),
          }}>
          {(props) => (
            <AddDiscussionScreen
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import Notification from "./components/Notification";
import DiscussionOverview from "./screens/DiscussionOverviewScreen";
import DiscussionOverviewScreen from "./screens/DiscussionOverviewScreen";

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccProvider } from "./AccContext.js";

import CreateAcc from "./components/CreateAcc";
import AllAcc from "./components/AllAcc";
import ShowInfo from "./components/ShowInfo";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <AccProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Create Account" component={CreateAcc} />
          <Tab.Screen
            name="Show Accounts"
            options={{ headerShown: false }}
            component={() => (
              <Stack.Navigator>
                <Stack.Screen name="All Accounts" component={AllAcc} />
                <Stack.Screen name="More information" component={ShowInfo} />
              </Stack.Navigator>
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AccProvider>
  );
}

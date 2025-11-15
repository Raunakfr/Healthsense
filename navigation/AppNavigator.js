import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import DailyInput from "../screens/DailyInput";
import Prediction from "../screens/Prediction";
import Weekly from "../screens/Weekly";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DailyInput" component={DailyInput} />
        <Stack.Screen name="Prediction" component={Prediction} />
        <Stack.Screen name="Weekly" component={Weekly} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

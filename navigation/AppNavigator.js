import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { AuthNavigator, ShopNavigator } from "./ShopNavigator";
import StartUpScreen from "../screens/StartupScreen";

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => !!state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;

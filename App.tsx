import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Start } from "./src/screens/Start";
import { Home } from "./src/screens/Home";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent/>    
    
    <Routes />
    </NativeBaseProvider>
  );
}

import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Start } from "./src/screens/Start";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent/>    
    {/*<Start />*/}
    <Home />
    </NativeBaseProvider>
  );
}

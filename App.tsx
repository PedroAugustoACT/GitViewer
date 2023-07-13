import React, {useCallback, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Routes } from "./src/routes";

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold
        });
      }
      catch {
        // handle error
      }
      finally {
        setIsReady(true);
      }
    })();
  }, [])

  const onLayout = useCallback(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayout} style={styles.container}>
      <StatusBar style= "light" backgroundColor="#000" translucent={false} />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

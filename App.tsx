/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Component from './components/Component';
import ButtonWithCounter from './components/ButtonWithCounter';
import LoginForm from './components/LoginForm';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const obtainedLoginValues = (username: string, password: string) => {
    console.log('obtainedLoginValues are', username, password);
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.textStyle}>
        we have following test cases
      </Text>
      <Component name="Yash" />
      <ButtonWithCounter initialCount={2} />
      <LoginForm onLogin={obtainedLoginValues} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default App;

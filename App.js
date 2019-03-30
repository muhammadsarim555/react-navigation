import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import Naivigation from './navigation';
import Home from './home'

export default class App extends React.Component {
  render() {
    return (
        <Naivigation/>
    );
  }
}


// const AppNavigator = createStackNavigator({
// App,
// Home,

// },
// {
//   initialRouteName: "App"
// }
// );

// export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

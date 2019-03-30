import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './home'

export default class Mail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mail!</Text>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Home", {name: "Sarim"})}><Text>Go Home!</Text></TouchableOpacity> */}
      </View>
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

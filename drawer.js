import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Drawer extends React.Component {
  
//   static navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params.name,
//   });
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>drawer!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

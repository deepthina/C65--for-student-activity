import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  render() {
    return (
    
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },

  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});

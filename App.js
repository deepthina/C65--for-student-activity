import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import db from './localdb';

console.log(db['that'].chunks);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      chunks: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('./assets/Monkey.png')}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ inputText: text });
          }}
          value={this.state.inputText}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.inputText].chunks });
          }}
        >
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((chunk) => {
            return (
              <TouchableOpacity style={styles.chunkButton}>
                <Text style={styles.displayText}>{chunk}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: '45% ',
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

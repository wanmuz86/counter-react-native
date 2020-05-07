import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [number,setNumber] = useState(0)
  // How to create variable/state on react
  // number = variable name
  // setNumber = function to change the variable
  // useState(0) -> Initialize
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{number}</Text>
      <Button title="Increment" color="green" onPress={()=> setNumber(number+1)}/>
      <Button title="Decrement" color="red" onPress={()=> setNumber(number-1)}/>
      <Button title="Reset"  onPress={()=> setNumber(0)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize:32
  }

});

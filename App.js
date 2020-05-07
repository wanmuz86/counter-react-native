import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
  const [number,setNumber] = useState(0)
  // How to create a variable/state on react
  // number=variable name
  //function to change variable = setNumber
  // initialize = useState(0)

  const decrement = () => {
    if (number == 0){
      alert('Number cannot be smaller than 0')
    }
    else {
       setNumber(number-1)
      } 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{number}</Text>
      <Button title="Increment" color="green" onPress={()=> setNumber(number+1)}/>
      <Button title="Decrement" color="red" onPress={decrement }/>
      <Button title="Reset" onPress={()=> setNumber(0)}/>
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
    fontSize: 32
  }
});
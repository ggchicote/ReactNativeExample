import { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
const Greeting = () => {

  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Enter your name...' onChangeText={setName}/>
      <Text style={styles.welcomeText}>Welcome to this CI/CD for React Native course, {name}</Text>
    </View>
    
  )
}

export default Greeting

const styles= StyleSheet.create({
  container:{
    marginTop:40,
    marginHorizontal:16,
    flex:1,
    backgroundColor:'#fff'
  },
  welcomeText: {
    marginTop:10
  },
  input:{
    height:30,
    borderColor:'gray',
    borderWidth:1
  }

})

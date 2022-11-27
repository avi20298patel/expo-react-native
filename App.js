import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import DefaultButton from './components/DefaultButton';
import Constants from 'expo-constants'
import { TextInputStyle } from './styles/styles';

const App = () => {
  const [iText1, setIText1] = useState('');
  // const [iText2, setIText2] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    // setLoading(true)
    const res = await fetch("https://api.icndb/jokes/random?firstName=Rameshy&lastName=verma")
    const result = await res.json()
    alert(result.value.joke)
    // setTimeout(() => {
    //   setLoading(false)
    //   alert(result.value)
    // }, 1000);
  }

  if (loading) {
    return (
      <View style={{ alignItems: "center", paddingTop: Constants.statusBarHeight }}>
        <Text>Getting Joke .....</Text>
        <ActivityIndicator size={"large"} color="green" />
      </View>
    )
  }
  return (
    <ScrollView style={{ paddingTop: Constants.statusBarHeight }}>
      {/* <TextInput
        style={TextInputStyle}
        autoCapitalize='sentences'
        onChangeText={(text) => setIText1(text)}
        value={iText1}
        textAlign='center'
        placeholderTextColor='primary'
        placeholder='First Person'
      /> */}
      <TextInput
        style={TextInputStyle}
        autoCapitalize='sentences'
        onChangeText={(text) => setIText1(text)}
        value={iText1}
        textAlign='center'
        placeholderTextColor='primary'
        placeholder='Second Person'
      />

      <DefaultButton
        onPress={() => getJoke()}
        title="Get Joke"
      />
    </ScrollView>
  );
}

export default App;
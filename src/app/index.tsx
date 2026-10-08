import {Text, View, StyleSheet, Image, Button, Alert, TextInput} from  "react-native";

import SimpleTouchableButtonProps from "@/components/simple-touchable-button";
import {router} from "expo-router";

const App  = () => {
  return <View style={styles.container }>
    <Text style={styles.tittle }>Hello, World!</Text>
    <Image 
    source={require('../../assets/images/epn.png')}
    style={styles.image}
    />
    <Button 
    title="Click me" 
    color = "red"
    onPress={() => alert('hola')} 
    />
    <SimpleTouchableButtonProps
    title="Click me plsss!!"
    OnPress={() => Alert.alert('hola desde touchable button')} 
    />
    <SimpleTouchableButtonProps
    title="Click me plsss!!"
    OnPress={() => router.push('/mensaje')} 
    />
    <SimpleTouchableButtonProps
    title="Llenar formulario"
    OnPress={() => router.push('/formulario')} 
    />
    <TextInput/>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee'
  },
  tittle:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f56c6c'
  },
  image:{
    height: 200,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  }
});

export default App;
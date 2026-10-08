import {router} from "expo-router";
import {Text, View, StyleSheet, Image, Button, Alert,TextInput } from  "react-native";

export default function formularioView() {
        return(
        <View >
            <Text style = {{marginTop: 100, marginLeft : 200, fontSize: 20}}>Login</Text>
            <Text>Usuario:</Text><TextInput style = {{backgroundColor: "rgba(194, 194, 194, 0.82)" , borderRadius: 10, margin: 10}}> </TextInput>
            <Text>Contraseña:</Text><TextInput style = {{backgroundColor: "rgba(194, 194, 194, 0.82)" , borderRadius: 10, margin: 10}}> </TextInput>
            <Text>Area:</Text><TextInput style = {{backgroundColor: "rgba(194, 194, 194, 0.82)" , borderRadius: 10, margin: 10}}> </TextInput>
            <Button title="Volver" onPress={() => router.back() } />
        </View>
    )
}


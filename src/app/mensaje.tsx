import {router} from "expo-router";
import {Text, View, StyleSheet, Image, Button, Alert, SafeAreaViewBase } from  "react-native";

export default function MensajeScreen(){
    return(
        <View>
            <Text>Hola desde la nueva pagina de mensajes</Text>
            <Button title="Volver" onPress={() => router.back() } />
        </View>
    )
} 
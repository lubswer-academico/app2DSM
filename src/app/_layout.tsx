// import slot desde expo router
// slot es u componente que servira com espacio donde se va  arendierizar la opantalla activa segn la ruta
import { Slot, Stack } from "expo-router"; //Stack

//Layout raiz del ap
//Este componente envuelve todas las rutas, listas, dentro de las caretas app

export default function RootLayout() {
  return <Stack screenOptions = {{headerShown: false}}/>;
} 
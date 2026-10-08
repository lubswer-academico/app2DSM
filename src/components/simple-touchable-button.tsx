import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type SimpleTouchableOpacity ={
    title: string;
    OnPress: () => void;

} 

export default function SimpleTouchableButtonProps({
    title,
    OnPress
}: SimpleTouchableOpacity){
    return(
        <TouchableOpacity onPress={OnPress} style ={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: 'rgba(80, 152, 247, 0.83)',
            marginTop: 10,
            marginBottom: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8
        },
        text: {
            color: 'rgb(23, 46, 110)',
            fontSize: 16,
            fontWeight: 'bold'
        }
    }
)
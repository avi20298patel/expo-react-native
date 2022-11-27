import { StyleSheet } from "react-native";

export const DefaultButtonStyle = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export const TextInputStyle = StyleSheet.create({
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    margin: 5
});
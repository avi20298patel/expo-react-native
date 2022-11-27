import React from 'react';
import { Text, Pressable } from 'react-native';
import { DefaultButtonStyle } from '../styles/styles';

export default function DefaultButton(props) {
    const { onPress, title } = props;
    return (
        <Pressable style={DefaultButtonStyle.button} onPress={onPress}>
            <Text style={DefaultButtonStyle.text}>{title}</Text>
        </Pressable>
    );
}


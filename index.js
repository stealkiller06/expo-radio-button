import React from 'react'
import { View, TouchableOpacity } from 'react-native'


export default function ExpoRadioButton(props) {
    const { selected, value,size, onSelected, children, containerStyle,radioStyle,radioBackground,childrenStyle } = props;


    function isSelected() {

        return selected == value;
    }

    function getSize(){
        if(size) return size;

        return 25;
    }

    function getBackground(){
        if(radioBackground) return radioBackground;
        return "blue";
    }

    return (
        <TouchableOpacity onPress={() => onSelected(value)}
            style={{ flexDirection: 'row', alignItems: 'center',...containerStyle }}
        >
            <View style={{
                borderWidth: 2, borderColor: '#CCC',
                padding: 2,
                width: getSize(), height: getSize(), borderRadius: 50,
                ...radioStyle

            }}>
                <View
                    style={{
                        backgroundColor: isSelected() ? getBackground() : 'rgba(0,0,0,0)',
                        width: '100%',
                        height: '100%',
                        borderRadius: 50,
                    }}
                ></View>
            </View>

            <View style={{ marginLeft: 3,...childrenStyle }}>
                {children}
            </View>

        </TouchableOpacity>
    )
}
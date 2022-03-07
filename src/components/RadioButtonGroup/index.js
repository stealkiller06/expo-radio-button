import { View } from 'react-native';
import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const RadioGroupContext = createContext({});
const { Provider } = RadioGroupContext;

export default function RadioButtonGroup(props) {
  const {
    selected,
    size,
    onSelected,
    children,
    containerStyle,
    containerOptionStyle,
    radioStyle,
    radioBackground,
    labelStyle,
  } = props;

  return (
    <Provider value={{
      onSelected,
      selected,
      containerOptionStyle,
      radioStyle,
      radioBackground,
      labelStyle,
      size,
    }}
    >
      <View style={containerStyle}>
        {children}
      </View>
    </Provider>
  );
}

RadioButtonGroup.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onSelected: PropTypes.func,
  containerStyle: PropTypes.object,
  containerOptionStyle: PropTypes.any,
  radioStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  radioBackground: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

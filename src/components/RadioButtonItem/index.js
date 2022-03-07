import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { RadioGroupContext } from '../RadioButtonGroup';

export function RadioButtonItem(props) {
  const {
    value,
    label,
    style,
  } = props;

  const {
    onSelected,
    selected,
    containerOptionStyle,
    radioStyle,
    radioBackground,
    labelStyle,
    size,
  } = useContext(RadioGroupContext);

  function isSelected() {
    return selected === value;
  }

  function getBackground() {
    if (radioBackground) return radioBackground;
    return 'blue';
  }

  return (
    <TouchableOpacity
      onPress={() => onSelected(value)}
      style={[
        styles.radioButtonItemContainer,
        containerOptionStyle,
      ]}
    >
      <View
        style={[
          styles.radioButtonCircle(size),
          radioStyle,
          style,
        ]}
      >
        <View
          style={{
            backgroundColor: isSelected() ? getBackground() : 'rgba(0,0,0,0)',
            width: '100%',
            height: '100%',
            borderRadius: 50,
          }}
        />
      </View>

      {typeof label === 'string' ? (
        <Text style={{ marginLeft: 3, ...labelStyle }}>{label}</Text>
      ) : (
        React.cloneElement(label, {
          style: { marginLeft: 3, ...label.props.style },
        })
      )}
    </TouchableOpacity>
  );
}

RadioButtonItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.object,
};

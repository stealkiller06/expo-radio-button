import React from "react";
import { View, TouchableOpacity, Text, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

export const RadioButtonGroup = (props) => {
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
    <View style={{ ...containerStyle }}>
      {!children?.length ? (
        <TouchableOpacity onPress={() => onSelected(children?.props?.value)}>
          {React.cloneElement(children, {
            selected,
            radioBackground,
            radioStyle,
            containerOptionStyle,
            labelStyle,
            size,
          })}
        </TouchableOpacity>
      ) : (
        children?.map((child, index) => {
          return (
            <TouchableOpacity
              onPress={() => onSelected(child?.props?.value)}
              key={index}
            >
              {React.cloneElement(child, {
                selected,
                radioBackground,
                radioStyle,
                containerOptionStyle,
                labelStyle,
                size,
              })}
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );
};

export function RadioButtonItem(props) {
  const {
    selected,
    value,
    size,
    containerOptionStyle,
    radioStyle,
    radioBackground,
    labelStyle,
    label,
    style,
  } = props;

  function isSelected() {
    return selected == value;
  }

  function getSize() {
    if (size) return size;

    return 25;
  }

  function getBackground() {
    if (radioBackground) return radioBackground;
    return "blue";
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...containerOptionStyle,
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: "#CCC",
          padding: 2,
          width: getSize(),
          height: getSize(),
          borderRadius: 50,
          ...radioStyle,
          ...style,
        }}
      >
        <View
          style={{
            backgroundColor: isSelected() ? getBackground() : "rgba(0,0,0,0)",
            width: "100%",
            height: "100%",
            borderRadius: 50,
          }}
        ></View>
      </View>

      {typeof label == "string" ? (
        <Text style={{ marginLeft: 3, ...labelStyle }}>{label}</Text>
      ) : (
        React.cloneElement(label, {
          style: { marginLeft: 3, ...label.props.style },
        })
      )}
    </View>
  );
}

RadioButtonGroup.propTypes = {
  selected: PropTypes.any,
  onSelected: PropTypes.func,
  containerStyle: PropTypes.any,
  containerOptionStyle: PropTypes.any,
  radioStyle: PropTypes.any,
  labelStyle: PropTypes.any,
  radioBackground: PropTypes.string,
  size: PropTypes.number,
};

RadioButtonItem.propTypes = {
  value: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.any,
};

export default RadioButtonGroup;

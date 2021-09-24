# expo-radio-button

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

expo-radio-button is a beautiful and flexible radio button component

[DEMO](https://snack.expo.io/@stealkiller06/expo-radio-button)

## Installation

```sh
npm i expo-radio-button --save
yarn add expo-radio-button
```

## Example

```javascript
import React, { useState } from "react";
import { Text, View } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
export default function App() {
  const [current, setCurrent] = useState("test");

  return (
    <View style={{ marginTop: 50 }}>
      <RadioButtonGroup
        containerStyle={{ marginBottom: 10 }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="green"
      >
        <RadioButtonItem value="test2" label="Example with string" />
        <RadioButtonItem
          value="test"
          label={
            <Text style={{ color: "red" }}>Example passing React Element</Text>
          }
        />
      </RadioButtonGroup>
    </View>
  );
}
```

## Properties RadioButtonGroup

| Property        | Description                 |
| --------------- | --------------------------- |
| selected        | Current value selected      |
| size            | (integer) Radio button size |
| containerStyle  | Container Style             |
| radioStyle      | Radio Button Style          |
| radioBackground | default blue                |

## Events RadioButtonGroup

| Property   | Description                |
| ---------- | -------------------------- |
| onSelected | method called when pressed |

## Properties RadioButtonItem

| Property | Description             |
| -------- | ----------------------- |
| value    | option value            |
| label    | (string or JSX.element) |
| style    | View Style              |

## License

MIT

**Free Software, Hell Yeah!**

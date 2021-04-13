# expo-radio-button

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

expo-radio-button is a beautiful and flexible radio button component

[DEMO](https://snack.expo.io/@stealkiller06/expo-radio-button)

## Installation
```sh
npm i expo-radio-button
```


## Example

```javascript
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioButton from 'expo-radio-button'

export default function App() {
  const [current, setCurrent] = useState("option 1")

  return (
    <View style={styles.container}>

      <RadioButton value="option 1"
        containerStyle={{ marginBottom: 10 }}
        selected={current} onSelected={(value) => setCurrent(value)} 
        radioBackground="green" >
        <Text>Option 1</Text>
      </RadioButton>
      <RadioButton value="option 2" selected={current} onSelected={(value) => setCurrent(value)} radioBackground="green" >
        <Text>Option 2</Text>
      </RadioButton>
    </View>
  );
}
```

## Properties
| Property | Description |
| ------ | ------ |
| selected | Current value selected |
| value | option value |
| size | (integer) Radio button size |
| containerStyle | Container Style |
| radioStyle | Radio Button Style |
| radioBackground | default blue|

## Events
| Property | Description |
| ------ | ------ |
| onSelected | method called when pressed |



## License

MIT

**Free Software, Hell Yeah!**

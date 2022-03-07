import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  radioButtonItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonCircle: (size) => ({
    borderWidth: 2,
    borderColor: '#CCC',
    padding: 2,
    width: size || 25,
    height: size || 25,
    borderRadius: 50,
  }),

});

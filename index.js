import { RadioButtonItem } from './src/components/RadioButtonItem';
import RadioButtonGroupHOC from './src/components/RadioButtonGroup';

export { RadioButtonItem, RadioButtonGroup };

const RadioButtonGroup = Object.assign(RadioButtonGroupHOC, {
  Item: RadioButtonItem,
});

export default RadioButtonGroup;

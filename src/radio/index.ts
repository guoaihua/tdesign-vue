import _Radio from './radio';
import _Group from './group';
import RadioButton from './radio-button';
import mapProps from '../utils/map-props';
import setInstallFn from '../utils/setInstallFn';

const Radio = mapProps(['checked'], { model: { prop: 'checked', event: 'change' } })(_Radio);
const RadioGroup = mapProps(['value'])(_Group);

setInstallFn('Radio', Radio);
setInstallFn('RadioGroup', RadioGroup);
setInstallFn('RadioButton', RadioButton);

export {
  Radio,
  RadioGroup,
  RadioButton,
};

export default Radio;
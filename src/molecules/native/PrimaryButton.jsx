import React from 'react';
import DividerVertical from '../../atoms/native/DividerVertical';
import Button from '../../atoms/native/Button';
import { View } from 'react-native';

const emptyFunction = () => {};

const PrimaryButton = () => (
  <View>
    <Button onPress={emptyFunction} title="Press me" />
    <DividerVertical />
  </View>
);

export default PrimaryButton;
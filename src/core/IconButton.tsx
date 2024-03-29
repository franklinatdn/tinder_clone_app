import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon, IconNames } from './Icon';

interface IconButtonProps {
  iconName: IconNames;
  onPress: () => void;
  color?: string;
  size?: number;
  containerStyle?: ViewStyle;
}

export const IconButton = (props: IconButtonProps) => {
  const { iconName, onPress, color = 'green', size = 60 } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { width: size, height: size, borderColor: color, borderRadius: size },
        styles.iconButton,
        props.containerStyle,
      ]}>
      <Icon name={iconName} color={color} size={Math.floor(0.4 * size)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});

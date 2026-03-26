import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface InputProps extends TextInputProps {
  title?: string;
  containerStyle?: ViewStyle;
  IconRigth?: any;
  iconRightName?: string;
  onIconRigthPress?: () => void;
}

export function Input({ 
  title, 
  containerStyle, 
  IconRigth,
  iconRightName,
  onIconRigthPress,
  ...rest 
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        placeholder={title}
        {...rest}
      />
      {IconRigth && iconRightName && (
        <TouchableOpacity onPress={onIconRigthPress} disabled={!onIconRigthPress}>
          <IconRigth
            name={iconRightName}
            size={24}
            color="#666"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    height: 50,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
});

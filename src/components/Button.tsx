import * as React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { SFC } from "react";

export interface ButtonProps {
  color: "red";
}

export const Button: SFC<ButtonProps> = () => {
  return (
    <View>
      <Text>Bla</Text>
    </View>
  );
};

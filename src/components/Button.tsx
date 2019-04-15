import * as React from "react";
import { SFC } from "react";
import { Text, View } from "react-native";

export interface ButtonProps {
  color: "red";
}

const a = "2";

export const Button: SFC<ButtonProps> = () => {
  return (
    <View>
      <Text>Bla</Text>
    </View>
  );
};

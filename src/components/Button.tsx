import * as React from "react";
import { SFC } from "react";
import { Text, View } from "react-native";
import styled from "../lib/styled";

export interface ButtonProps {
  color: "red";
}

const PrimaryButtonWrapper = styled(View)`
  background-image: linear-gradient(
    to right top,
    #ff5050,
    #ff7346,
    #ff9242,
    #fdae48,
    #f6c958,
    #dcd866,
    #c2e47d,
    #a9ee9a,
    #79ecb9,
    #4fe7d8,
    #41deef,
    #5fd3fb
  );
  padding: 10;
  border-radius: 10px;
  color: white;
  font-size: 10;
`;
const RedText = styled(Text)`
  color: red;
`;

export const Button: SFC<ButtonProps> = () => {
  return (
    <PrimaryButtonWrapper>
      <Text>Hello</Text>
    </PrimaryButtonWrapper>
  );
};

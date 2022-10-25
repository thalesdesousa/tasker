import React from "react";
import { View, Text } from "react-native";

export const Task = ({ description }) => {
  return (
    <View>
      <Text>{ description }</Text>
    </View>
  );
};
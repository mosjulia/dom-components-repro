"use dom";

import React from "react";
import { Text, View } from "react-native";
import DomNested from "./DomNested";

const DOM = () => {
  return (
    <View>
      <Text>DOM</Text>
      <DomNested />
    </View>
  );
};

export default DOM;

import DOM from "@/components/dom";
import { Text, View } from "react-native";

export default function DOMScreen() {
  return (
    <View>
      <Text style={{ color: "red" }}>DOM</Text>
      <DOM />
    </View>
  );
}

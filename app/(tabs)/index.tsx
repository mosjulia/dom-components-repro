import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import manifest from "../../app.json";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome!</Text>
      <Text>{`Version: ${manifest.expo.version}`}</Text>

      <Pressable onPress={() => router.navigate("/dom")}>
        <Text>go to DOM</Text>
      </Pressable>
    </View>
  );
}

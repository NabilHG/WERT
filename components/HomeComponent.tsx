import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../global.css";

export default function HomeComponent() {
  return (
    <View className="bg-blue-200 flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Text className="text-black text-2xl">Home Component</Text>
    </View>
  );
}

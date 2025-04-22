import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="bg-pink-800 flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Text className="text-white text-xl">First text in my app</Text>
    </View>
  );
}

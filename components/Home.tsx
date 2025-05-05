import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import "../global.css";

export default function HomeComponent() {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-slate-200 flex-1 relative">
        <Header />
        <View className="flex-1 bottom-0 justify-center absolute">
          <Text>Schedule of the day</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

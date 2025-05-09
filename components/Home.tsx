import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import "../global.css";

export default function HomeComponent() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="flex-col flex-1 bg-slate-200">
        <Header />
        <View className=" bg-slate-100 elevation-2xl shadow-2xl shadow-black flex-1 justify-center items-center rounded-t-3xl z-1">
          <View className="w-full items-center justify-center h-[50%]">
            <Text>Schedule of the day</Text>
          </View>
          <View className="flex-1 flex-row  justify-center items-center w-full bg-green-300">
            <View className="bg-blue-600 items-center flex-1">
              <Text>Next Route</Text>
            </View>
            <View className="bg-yellow-400 items-center flex-1">
              <Text>Monthly cost to date</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

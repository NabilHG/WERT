import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="bg-slate-900 flex-row p-4 items-center">
      <View className="w-[15%] items-center">
        <View className="h-14 w-14 rounded-full bg-yellow-300 items-center justify-center">
          <Text className="text-sm font-bold">Photo</Text>
        </View>
      </View>
      <View className="w-[30%]">
        <Text className="text-white text-2xl pl-1">Hi! Nabil</Text>
      </View>
      <View className="w-[40%] items-center">
        <Pressable className="bg-white rounded-3xl h-12 w-full flex-row items-center justify-center px-2">
          <FontAwesome name="diamond" size={20} color="black" />
          <Text className="ml-2 text-black font-semibold">Go Premium!</Text>
        </Pressable>
      </View>
      <View className="w-[15%] items-center">
        <FontAwesome name="bell" size={24} color="yellow" />
      </View>
    </View>
  );
}

import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import { ScrollView } from "react-native";

export default function Schedule() {
  return (
    <VStack className="w-full h-[90%] bg-slate-400 relative">
      <HStack className="bg-white items-center">
        <Box className="bg-red-300 w-1/5">
          <Text>17 May</Text>
        </Box>
        <Divider
          className="bg-black my-2 h-[90%] absolute"
          orientation="vertical"
        />
        <Box className="bg-blue-500 w-3/5">
          <Text>Saturday</Text>
        </Box>
        <Pressable className="bg-yellow-200 rounded-full h-8 w-8 ml-6 justify-center items-center">
          <Text className="text-lg font-medium">+</Text>
        </Pressable>
      </HStack>
      {/* <Divider className="bg-black my-2 absolute" /> */}

      <ScrollView></ScrollView>
    </VStack>
  );
}

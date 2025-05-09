import { FontAwesome } from "@expo/vector-icons";
import { HStack } from "./ui/hstack";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { Pressable } from "./ui/pressable";
import { Avatar, AvatarFallbackText } from "./ui/avatar";

export default function Header() {
  return (
    <HStack className=" bg-slate-200 px-4 py-5 items-center justify-between">
      <Box className="w-[15%] items-center">
        <Box className="items-center justify-center pr-2">
          <Avatar size="lg">
            <AvatarFallbackText>Nabil Hajjoune</AvatarFallbackText>
          </Avatar>
        </Box>
      </Box>
      <Box className="w-[30%]">
        <Text className="text-black text-2xl pl-1">Hi! Nabil</Text>
      </Box>
      <Box className="w-[40%] items-center">
        <Pressable className="bg-white rounded-3xl h-12 w-full flex-row items-center justify-center px-2">
          <FontAwesome name="diamond" size={20} color="black" />
          <Text className="ml-2 text-black font-semibold">Go Premium!</Text>
        </Pressable>
      </Box>
      <Box className="w-[15%] items-center">
        <FontAwesome name="bell-o" size={24} color="black" />
      </Box>
    </HStack>
  );
}

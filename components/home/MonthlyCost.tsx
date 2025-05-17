import { Text } from "../ui/text";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import Selector from "../Selector";

export default function MonthlyCost() {
  const selectOpt = [
    { value: "v1", label: "Group1" },
    { value: "v2", label: "Group2" },
  ];

  return (
    <VStack className="w-[95%] h-[95%] bg-slate-300 rounded-2xl">
      <HStack className="w-full">
        <Selector options={selectOpt} />

        <Box className="w-2/5 bg-white px-4 py-2 rounded-lg justify-center items-center">
          <Text className="text-lg font-medium">18$</Text>
        </Box>
      </HStack>

      <Divider className="bg-black my-2" />

      <HStack className="w-full">
        <Box className="w-3/5" />
        <Box className="w-2/5 bg-blue-400 px-4 py-2 rounded-lg justify-center items-center">
          <Text className="text-white font-medium">5.49$</Text>
        </Box>
      </HStack>

      <Box className="flex-1 bg-yellow-200 rounded-xl justify-center items-center">
        <Text className="text-gray-600">[ Graph Placeholder ]</Text>
      </Box>
    </VStack>
  );
}

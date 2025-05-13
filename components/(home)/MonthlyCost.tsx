import { useState } from "react";
import { Text } from "../ui/text";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectItem,
  SelectBackdrop,
} from "@/components/ui/select";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MonthlyCost() {
  const [isOpen, setIsOpen] = useState(false);

  const AngleDownIcon = ({ isOpen }: any) => (
    <FontAwesome5
      name="angle-down"
      size={20}
      color={isOpen ? "blue" : "gray"} // Cambiar color cuando se abre
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Gira el ícono
      }}
    />
  );

  return (
    <VStack className="w-[95%] h-[95%] bg-slate-300 rounded-2xl">
      <HStack className="w-full">
        <Select
          defaultValue="Group 1"
          className="w-3/5"
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <SelectTrigger variant="rounded" size="md">
            <SelectInput placeholder="Select option" />
            <SelectIcon as={() => <AngleDownIcon isOpen={isOpen} />} />
          </SelectTrigger>

          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectItem label="Group 1" value="g1" />
              <SelectItem label="Group 2" value="g2" />
            </SelectContent>
          </SelectPortal>
        </Select>

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

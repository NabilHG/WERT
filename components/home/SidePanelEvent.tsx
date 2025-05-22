import { Text } from "../ui/text";
import { Box } from "../ui/box";
import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import { FontAwesome5 } from "@expo/vector-icons";
import { Event } from "@/types/event";

export default function SidePanelEvent({
  event,
  color,
}: {
  event: Event;
  color: string;
}) {
  return (
    <VStack>
      <HStack>
        <Box
          style={{
            backgroundColor: color,
          }}
          className="p-2 min-h-[40px] "
        >
          <Text style={{ color: "yellow", fontSize: 16 }}>{event.title}</Text>
        </Box>
        <FontAwesome5 name="edit" size={24} color={color} />
      </HStack>
    </VStack>
  );
}

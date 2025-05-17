import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";
import { Event } from "@/types/event";

export default function EventBlock({
  event,
  top,
  height,
  onPress,
}: {
  event: Event;
  top: number;
  height: number;
  onPress: () => void;
}) {
  const infopadre = onPress;
  console.log(infopadre);
  return (
    <Pressable onPress={onPress}>
      <Box
        className="absolute bg-blue-500 rounded-lg px-2 py-1"
        style={{ top, height, left: 15, right: 20 }}
      >
        <Text className="text-white text-xs">{event.title}</Text>
        <Text className="text-white text-[10px]">{`${event.start} - ${event.end}`}</Text>
      </Box>
    </Pressable>
  );
}

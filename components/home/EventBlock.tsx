import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
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
  return (
    <Pressable
      onPress={onPress}
      className="absolute bg-blue-500 rounded-lg px-2 py-1"
      style={{ top, height, left: 15, right: 20 }}
    >
      <Text className="text-white text-xs">{event.title}</Text>
      <Text className="text-white text-[10px]">{`${event.start} - ${event.end}`}</Text>
    </Pressable>
  );
}

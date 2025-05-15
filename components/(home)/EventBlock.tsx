import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";

export default function EventBlock({
  event,
  top,
  height,
}: {
  event: any; //type event in the future
  top: number;
  height: number;
}) {
  return (
    <Pressable onPress={() => console.log(event.title)}>
      <Box
        className="absolute bg-blue-500 rounded-lg px-2 py-1"
        style={{ top, height, left: 60, right: 10 }}
      >
        <Text className="text-white text-xs">{event.title}</Text>
        <Text className="text-white text-[10px]">{`${event.start} - ${event.end}`}</Text>
      </Box>
    </Pressable>
  );
}

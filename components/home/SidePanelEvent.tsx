import { Text } from "../ui/text";
import { Box } from "../ui/box";
export default function SidePanelEvent({
  event,
  color,
}: {
  event: string;
  color: string;
}) {
  return (
    <Box
      style={{
        backgroundColor: color,
      }}
    >
      <Text>Hello, here {event} component</Text>;
    </Box>
  );
}

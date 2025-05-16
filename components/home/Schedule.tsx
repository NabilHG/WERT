import { useEffect, useRef } from "react";
import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import { ScrollView } from "react-native";
import EventBlock from "./EventBlock";
import { Event } from "@/types/event";

export default function Schedule() {
  const DAY_START = "06:00";
  const MINUTE_HEIGHT = 1.2; // Altura visual por minuto
  const HOURS = Array.from({ length: 24 }, (_, i) => i.toString());

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const now = new Date();
    const minutesSinceStart = now.getHours() * 60 + now.getMinutes();
    const offset = minutesSinceStart * MINUTE_HEIGHT;

    //timeout to ensure ScrollView has height
    setTimeout(() => {
      scrollRef.current?.scrollTo({ y: offset - 10, animated: false });
    }, 0);
  }, []);

  const getMinutesBetween = (start: string, end: string) => {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    return eh * 60 + em - (sh * 60 + sm);
  };

  const getMinutesSinceStart = (start: string, current: string) => {
    const [sh, sm] = start.split(":").map(Number);
    const [ch, cm] = current.split(":").map(Number);
    return ch * 60 + cm - (sh * 60 + sm);
  };

  const events: Event[] = [
    {
      title: "Clase de matemáticas",
      start: "10:00",
      end: "11:25",
    },
    {
      title: "Estudio de React",
      start: "13:15",
      end: "14:00",
    },
  ];

  return (
    <VStack className="w-full h-[90%] bg-slate-400">
      <HStack className="bg-white items-center">
        <Box className="bg-red-300 w-1/5">
          <Text>17 May</Text>
        </Box>
        <Divider className="bg-black my-2 h-[90%]" orientation="vertical" />
        <Box className="bg-blue-500 w-3/5">
          <Text>Saturday</Text>
        </Box>
        <Pressable className="bg-yellow-200 rounded-full h-8 w-8 ml-6 justify-center items-center">
          <Text className="text-lg font-medium">+</Text>
        </Pressable>
      </HStack>
      <Divider className="bg-black my-2" />

      <ScrollView ref={scrollRef}>
        <Box className="relative" style={{ height: 24 * 60 * MINUTE_HEIGHT }}>
          {HOURS.map((hour, index) => {
            return (
              <Box
                key={hour}
                style={{
                  position: "absolute",
                  top: index * 60 * MINUTE_HEIGHT,
                  height: 1,
                  width: "100%",
                  backgroundColor: "gray",
                }}
              >
                <Text style={{ position: "absolute", left: 0, top: -10 }}>
                  {hour}
                </Text>
              </Box>
            );
          })}

          {events.map((event, idx) => {
            const top =
              getMinutesSinceStart(DAY_START, event.start) * MINUTE_HEIGHT;
            const height =
              getMinutesBetween(event.start, event.end) * MINUTE_HEIGHT;

            return (
              <EventBlock key={idx} event={event} top={top} height={height} />
            );
          })}
        </Box>
      </ScrollView>
    </VStack>
  );
}

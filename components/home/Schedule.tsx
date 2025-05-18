import { useEffect, useRef, useState } from "react";
import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import { ScrollView, View, Dimensions, Animated } from "react-native";
import EventBlock from "./EventBlock";
import { Event } from "@/types/event";

export default function Schedule() {
  const DAY_START = "00:00";
  const MINUTE_HEIGHT = 1.2;
  const HOURS = Array.from({ length: 24 }, (_, i) => i.toString());
  const screenWidth = Dimensions.get("window").width;

  const [isReduced, setIsReduced] = useState(false);

  const scrollRef = useRef<ScrollView>(null);
  const widthAnim = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    const now = new Date();
    const minutesSinceStart = now.getHours() * 60 + now.getMinutes();
    const offset = minutesSinceStart * MINUTE_HEIGHT;
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
    { title: "Clase de matemáticas", start: "10:00", end: "11:25" },
    { title: "Estudio de React", start: "13:15", end: "14:00" },
    { title: "Test", start: "20:25", end: "21:00" },
  ];

  const handleClick = () => {
    Animated.timing(widthAnim, {
      toValue: isReduced ? screenWidth : screenWidth / 2,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsReduced(!isReduced);
  };

  return (
    <VStack className="w-full h-[90%] bg-slate-400">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Box className="bg-red-300 w-1/5">
          <Text>17 May</Text>
        </Box>
        <Divider className="bg-black my-2 h-[90%]" orientation="vertical" />
        <Box className="bg-blue-500 w-3/5">
          <Text>Saturday</Text>
        </Box>
        <Pressable
          className="bg-yellow-200 rounded-full h-8 w-8 ml-6 justify-center items-center"
          onPress={handleClick}
        >
          <Text className="text-lg font-medium">+</Text>
        </Pressable>
      </View>

      <Divider className="bg-black my-2" />

      <View style={{ flexDirection: "row", flex: 1 }}>
        <Animated.View style={{ width: widthAnim, overflow: "hidden" }}>
          <ScrollView ref={scrollRef}>
            <Box
              className="relative w-[95%]"
              style={{ height: 24 * 60 * MINUTE_HEIGHT }}
            >
              {HOURS.map((hour, index) => (
                <Box
                  key={hour}
                  style={{
                    position: "absolute",
                    top: index * 60 * MINUTE_HEIGHT,
                    left: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      width: 40,
                      textAlign: "right",
                      marginRight: 4,
                      position: "absolute",
                      left: -5,
                    }}
                  >
                    {hour}
                  </Text>
                  <Box
                    style={{
                      marginLeft: 40,
                      height: 1,
                      backgroundColor: "gray",
                      flexGrow: 1,
                      marginRight: 8,
                    }}
                  />
                </Box>
              ))}

              {events.map((event, idx) => {
                const top =
                  getMinutesSinceStart(DAY_START, event.start) * MINUTE_HEIGHT;
                const height =
                  getMinutesBetween(event.start, event.end) * MINUTE_HEIGHT;
                return (
                  <Box className="left-7 mr-4 bg-black">
                    <EventBlock
                      key={idx}
                      event={event}
                      top={top}
                      height={height}
                      onPress={() => handleClick()}
                    />
                  </Box>
                );
              })}
            </Box>
          </ScrollView>
        </Animated.View>

        {/* left panel */}
        {isReduced && (
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              marginLeft: -15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Hello, here another component</Text>
          </View>
        )}
      </View>
    </VStack>
  );
}

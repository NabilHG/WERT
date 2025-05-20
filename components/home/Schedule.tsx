import { useEffect, useRef, useState } from "react";
import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { Box } from "../ui/box";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import { ScrollView, View, Animated, Dimensions } from "react-native";
import EventBlock from "./EventBlock";
import SidePanelEvent from "./SidePanelEvent";
import { Event } from "@/types/event";

export default function Schedule() {
  // start time of the day in the schedule (used as a reference point)
  const DAY_START = "00:00";
  // height in pixels that each minute occupies in the schedule view
  const MINUTE_HEIGHT = 1.2;
  // array of 24 hours, used to render hourly divider lines
  const HOURS = Array.from({ length: 24 }, (_, i) => i.toString());
  // ref to the ScrollView for auto-scrolling to the current time
  const scrollRef = useRef<ScrollView>(null);

  // side panel visibility
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  // full width of the screen, used to calculate layout dimensions
  const screenWidth = Dimensions.get("window").width;
  // fixed width of the side panel (50% of the screen)
  const PANEL_WIDTH = screenWidth * 0.5;

  // animated value for the width of the main schedule area
  const mainWidthAnim = useRef(new Animated.Value(screenWidth)).current;
  // animated value for the width of the side panel
  const panelWidthAnim = useRef(new Animated.Value(0)).current;

  // event currently displayed in the side panel
  const [sideEvent, setSideEvent] = useState("");
  const [colorBox, setsetColorBox] = useState("");

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

  const handleClickEvent = (event: Event) => {
    const isSameEvent = event.title === sideEvent;

    if (!isPanelVisible) {
      setSideEvent(event.title);
      setsetColorBox("white");

      Animated.parallel([
        Animated.timing(mainWidthAnim, {
          toValue: screenWidth - PANEL_WIDTH,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(panelWidthAnim, {
          toValue: PANEL_WIDTH,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setIsPanelVisible(true);
      });
    } else {
      if (isSameEvent) {
        // close panel
        Animated.parallel([
          Animated.timing(mainWidthAnim, {
            toValue: screenWidth,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(panelWidthAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start(() => {
          setIsPanelVisible(false);
          setSideEvent("");
        });
      } else {
        // another event
        setsetColorBox("black");
        setSideEvent(event.title);
      }
    }

    console.log(event.title);
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
          // onPress={handleClick}
        >
          <Text className="text-lg font-medium">+</Text>
        </Pressable>
      </View>

      <Divider className="bg-black my-2" />

      <View style={{ flexDirection: "row", flex: 1, overflow: "hidden" }}>
        <Animated.View style={{ width: mainWidthAnim }}>
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
                  <Box key={idx} className="left-7 mr-4 bg-black">
                    <EventBlock
                      event={event}
                      top={top}
                      height={height}
                      onPress={handleClickEvent}
                    />
                  </Box>
                );
              })}
            </Box>
          </ScrollView>
        </Animated.View>

        {/* Side panel */}
        <Animated.View
          style={{
            width: panelWidthAnim,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <SidePanelEvent event={sideEvent} color={colorBox} />
        </Animated.View>
      </View>
    </VStack>
  );
}

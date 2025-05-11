import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import Header from "../Header";
import NextRoute from "./NextRoute";
import MonthlyCost from "./MonthlyCost";
import Schedule from "./Schedule";
import "../../global.css";

export default function HomeComponent() {
  const [secondaryComponent, setSecondaryComponent] = useState("nextRoute");

  function handlePressSecondaryComp(value: "nextRoute" | "monthlyCost") {
    setSecondaryComponent(value);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <VStack className="flex-1 bg-slate-200">
        <Header />

        <Box className="flex-1 justify-center items-center bg-slate-100 shadow-hard-5  shadow-black elevation-2xl  rounded-t-3xl z-1 ">
          <Box className="w-full h-[60%] items-center justify-center">
            <Schedule />
          </Box>

          <VStack className="relative flex-1 w-full items-center bg-green-300">
            <HStack className="top-0 absolute mt-3 left-5">
              <Pressable
                onPress={() => {
                  handlePressSecondaryComp("nextRoute");
                }}
                className="bg-purple-400 px-4 py-2 rounded-md"
                disabled={secondaryComponent === "nextRoute"}
              >
                <Text>Next Route</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handlePressSecondaryComp("monthlyCost");
                }}
                className="bg-yellow-300 px-4 py-2 rounded-md"
                disabled={secondaryComponent === "monthlyCost"}
              >
                <Text>Monthly Cost to date</Text>
              </Pressable>
            </HStack>
            <Box className="pt-16 w-full items-center flex-1">
              {secondaryComponent === "nextRoute" ? (
                <NextRoute />
              ) : (
                <MonthlyCost />
              )}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </SafeAreaView>
  );
}

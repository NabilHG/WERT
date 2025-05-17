import { useState, useRef, useEffect } from "react";
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
import { Animated, Easing } from "react-native";
import { SelectorOption } from "@/types/selectorOpt";

export default function Selector({ options }: { options: SelectorOption[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [isOpen, rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const AngleDownIcon = () => (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <FontAwesome5
        name="angle-down"
        size={20}
        color={isOpen ? "blue" : "gray"}
      />
    </Animated.View>
  );

  return (
    <Select
      defaultValue={options[0].label}
      className="w-3/5"
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <SelectTrigger variant="rounded" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon as={() => <AngleDownIcon />} />
      </SelectTrigger>

      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          {options.map((opt, index) => {
            return (
              <SelectItem key={index} label={opt.label} value={opt.value} />
            );
          })}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

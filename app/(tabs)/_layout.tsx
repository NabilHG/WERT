import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="routes"
        options={{
          title: "Routes",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

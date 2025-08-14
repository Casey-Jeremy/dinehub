// app/(tabs)/_layout.tsx
import { FontAwesome } from '@expo/vector-icons'; // Or your own icons
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index" // This corresponds to app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-new" // This corresponds to app/(tabs)/add-new.tsx
        options={{
          title: 'Add New',
          tabBarIcon: ({ color }) => <FontAwesome name="plus-square" size={28} color={color} />,
        }}
      />
      {/* Add other tabs here */}
    </Tabs>
  );
}
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store/store"; // Adjust this path as needed

export default function RootLayout() {
  return (
    <Provider store={store}>
      {/* Use screenOptions on the Stack navigator to apply default 
        settings to all screens within this stack.
      */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* You no longer need to define every screen here. Expo Router's
          file-based routing will automatically discover them.
          You can still add a Stack.Screen to override options for a
          specific screen.
        */}
      </Stack>
    </Provider>
  );
}
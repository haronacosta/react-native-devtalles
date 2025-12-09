import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const initialCount = 1;

  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((c) => c + 1);

  const reset = () => setCount(initialCount);

  const decrement = () => setCount((c) => c - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB label="+1" onPress={increment} position="right" />
      <FAB label="Reset" onPress={reset} position="center" />
      <FAB label="-1" onPress={decrement} position="left" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textHuge: {
    fontSize: 100,
    fontWeight: "100",
  },
});

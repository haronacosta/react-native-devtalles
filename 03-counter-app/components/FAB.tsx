import { Text, Pressable, StyleSheet } from "react-native";

interface FABProps {
  label: string;
  onPress: () => void;
  position?: "left" | "right" | "center";
}

export default function FAB({ label, onPress, position = "center" }: FABProps) {
  return (
    <Pressable
      style={({ pressed}) => [
        styles.floatingButton,
        position === "right"
          ? styles.positionRight
          : position === "left"
          ? styles.positionLeft
          : undefined,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.floatingButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 80,
    backgroundColor: "#655665",
    padding: 15,
    borderRadius: 15,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  positionRight: {
    right: 30,
  },
  positionLeft: {
    left: 30,
  },
});

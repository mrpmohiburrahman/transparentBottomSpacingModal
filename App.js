import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Modal from "./react-native-modal/src/index";

const BOTTOM_SPACING = 100; // <-- change here

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
      <Button
        onPress={() => setModalVisible(!isModalVisible)}
        title="show modal"
      />
      <Modal
        testID={"modal"}
        isVisible={isModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
        bottomSpacing={BOTTOM_SPACING}>
        <View style={styles.card}>
          <Text>Place your custom view inside BottomSheet</Text>
        </View>
      </Modal>
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
  card: {
    marginBottom: BOTTOM_SPACING,
    backgroundColor: "#fff",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});

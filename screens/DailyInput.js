import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";

export default function DailyInput({ navigation }) {
  const [sleep, setSleep] = useState("");
  const [water, setWater] = useState("");
  const [steps, setSteps] = useState("");
  const [mood, setMood] = useState("");
  const [food, setFood] = useState("");

  const [loading, setLoading] = useState(false);

  // ⚠️ REPLACE THIS WITH YOUR LAPTOP’S IP ADDRESS
  const BACKEND_BASE = "http://IP:5000";

  const submitData = async () => {
    if (!sleep || !water || !steps) {
      Alert.alert("Missing Fields", "Please fill sleep, water and steps.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        sleep: parseFloat(sleep),
        water: parseFloat(water),
        steps: parseInt(steps),
        mood: mood || "neutral",
        food: food || "mixed",
      };

      const res = await axios.post(`${BACKEND_BASE}/predict`, payload, {
        timeout: 20000,
      });

      setLoading(false);

      navigation.navigate("Prediction", { result: res.data.result });
    } catch (err) {
      setLoading(false);
      console.log("Backend Error:", err.message);
      Alert.alert(
        "Error",
        "Could not contact backend. Check network & backend running."
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A", padding: 22 }}>
      <Text
        style={{
          color: "#00FFD1",
          fontSize: 32,
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Daily Input
      </Text>

      <TextInput
        placeholder="Sleep 😴😴(hours)"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={sleep}
        onChangeText={setSleep}
        style={styles.input}
      />

      <TextInput
        placeholder="Water 🚰🚰(liters)"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={water}
        onChangeText={setWater}
        style={styles.input}
      />

      <TextInput
        placeholder="Steps walked 👣👣"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
        style={styles.input}
      />

      <TextInput
        placeholder="Mood 😀/😫/😐(happy/tired/neutral)"
        placeholderTextColor="#777"
        value={mood}
        onChangeText={setMood}
        style={styles.input}
      />

      <TextInput
        placeholder="Food 😋😋(clean/mixed/junk)"
        placeholderTextColor="#777"
        value={food}
        onChangeText={setFood}
        style={styles.input}
      />

      {loading ? (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" color="#00FFD1" />
          <Text style={{ color: "#00FFD1", marginTop: 10, fontSize: 16 }}>
            Analyzing...
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={submitData} style={styles.button}>
          <Text style={{ fontWeight: "700" }}>Submit & Predict</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = {
  input: {
    backgroundColor: "#111",
    color: "#fff",
    marginTop: 18,
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 28,
    backgroundColor: "#00FFD1",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  loadingBox: {
    marginTop: 28,
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    // neon glow
    shadowColor: "#00FFD1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
};

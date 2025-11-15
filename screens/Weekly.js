import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Weekly() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0A0A0A",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#00FFD1",
          fontSize: 32,
          fontWeight: "800",
          marginBottom: 20,
        }}
      >
        Weekly Overview
      </Text>

      <View
        style={{
          backgroundColor: "#111",
          padding: 20,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "#00FFD1",
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          Coming Soon 🚧
        </Text>

        <Text
          style={{
            color: "#aaa",
            fontSize: 16,
            textAlign: "center",
            lineHeight: 24,
          }}
        >
          We're working on an advanced weekly dashboard with trends,
          AI-generated insights and health analytics.  
          Stay tuned! 💙🔥
        </Text>
      </View>
    </ScrollView>
  );
}

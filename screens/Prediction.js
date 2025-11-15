import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Prediction({ route }) {
  const { result } = route.params || {};

  // Handle raw output OR parsed JSON
  const risk = result?.risk || "unknown";
  const summary = result?.summary || result?.raw || "No summary available.";
  const suggestions = Array.isArray(result?.suggestions)
    ? result.suggestions
    : [];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000", padding: 20 }}>
      
      {/* Page Title */}
      <Text
        style={{
          color: "#00FFD1",
          fontSize: 34,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Predictions
      </Text>

      {/* Card Container */}
      <View
        style={{
          backgroundColor: "#111",
          padding: 18,
          borderRadius: 18,
          shadowColor: "#00FFD1",
          shadowOpacity: 0.4,
          shadowRadius: 10,
          marginBottom: 30,
        }}
      >
        
        {/* Risk */}
        <Text
          style={{
            color: "#00FFD1",
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          Risk Level
        </Text>
        <Text style={{ color: "#fff", fontSize: 18, marginBottom: 20 }}>
          {risk}
        </Text>

        {/* Summary */}
        <Text
          style={{
            color: "#00FFD1",
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          Summary
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            lineHeight: 24,
            marginBottom: 20,
          }}
        >
          {summary}
        </Text>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <>
            <Text
              style={{
                color: "#00FFD1",
                fontSize: 22,
                fontWeight: "700",
                marginBottom: 10,
              }}
            >
              Suggestions
            </Text>

            {suggestions.map((s, i) => (
              <Text
                key={i}
                style={{
                  color: "#fff",
                  marginBottom: 12,
                  fontSize: 16,
                  lineHeight: 24,
                }}
              >
                • {s}
              </Text>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}

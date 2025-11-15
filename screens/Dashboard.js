import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor:"#0A0A0A", padding:20 }}>
      <Text style={{ color:"#00FFD1", fontSize:28, fontWeight:"bold" }}>Dashboard</Text>
      <Text style={{ color:"#fff", marginTop:10 }}>Quick actions</Text>

      <TouchableOpacity onPress={() => navigation.navigate("DailyInput")}
        style={{ backgroundColor:"#111", padding:14, borderRadius:10, marginTop:20 }}>
        <Text style={{ color:"#fff" }}>Add Today's Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Weekly")}
        style={{ backgroundColor:"#111", padding:14, borderRadius:10, marginTop:12 }}>
        <Text style={{ color:"#fff" }}>View Weekly</Text>
      </TouchableOpacity>
    </View>
  );
}

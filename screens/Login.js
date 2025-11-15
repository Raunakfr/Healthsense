import { Image, View, Text, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";


export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A", justifyContent:"center", alignItems:"center" }}>
      <Image
        source={logo}
        style={{
          width: 120,
          height: 120,
          marginBottom: 20,
          borderRadius: 20,
        }}
      />

      
      <Text style={{ color: "#00FFD1", fontSize: 32, fontWeight: "bold" }}>
        HealthSense
      </Text>

      <Text style={{ color: "#fff", marginTop: 15 }}>
        Welcome back!
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#00FFD1",
          padding: 15,
          borderRadius: 10,
          marginTop: 30,
          width: "70%",
          alignItems:"center"
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={{ fontWeight: "bold" }}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
}

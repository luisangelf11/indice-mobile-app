import React, { ChangeEventHandler, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Appearance,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useStore } from "@/context/useStore";

interface IForm {
  title: string;
  value: string;
  points: string;
}

export default function FormAdd() {
  const initialState: IForm = { title: "", value: "", points: "" };
  const [form, setForm] = useState<IForm>(initialState);
  const colorScheme = Appearance.getColorScheme();
  const { add } = useStore();
  // Definir colores según el tema
  const borderColor = colorScheme === "dark" ? "#fff" : "#ccc";
  const color = colorScheme === "dark" ? "#fff" : "#222";

  const handleChange = (field: keyof IForm, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (form.title === "" || form.value === "" || form.value === "")
      return Alert.alert("Error", "No puedes dejar campos en blanco.");
    add({
      title: form.title,
      value: parseInt(form.value),
      points: parseInt(form.points),
    });
    Alert.alert(
      "Guardado",
      "Su asignatura fue guardada. Revise la vista de índice."
    );
    setForm(initialState);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Formulario</ThemedText>
      <ThemedView style={{ width: "80%" }}>
        <ThemedText type="defaultSemiBold" style={{ padding: 5 }}>
          Materia
        </ThemedText>
        <TextInput
          nativeID="title"
          placeholder="Materia"
          style={[styles.input, { borderColor }, { color }]}
          textContentType="nickname"
          value={form.title}
          onChangeText={(value) => handleChange("title", value)}
        ></TextInput>
      </ThemedView>
      <ThemedView style={{ width: "80%" }}>
        <ThemedText type="defaultSemiBold" style={{ padding: 5 }}>
          Créditos
        </ThemedText>
        <TextInput
          nativeID="value"
          placeholder="0"
          style={[styles.input, { borderColor }, { color }]}
          keyboardType="numeric"
          value={form.value}
          onChangeText={(value) => handleChange("value", value)}
        ></TextInput>
      </ThemedView>
      <ThemedView style={{ width: "80%" }}>
        <ThemedText type="defaultSemiBold" style={{ padding: 5 }}>
          Calificación
        </ThemedText>
        <TextInput
          nativeID="points"
          placeholder="0"
          style={[styles.input, { borderColor }, { color }]}
          keyboardType="numeric"
          value={form.points}
          onChangeText={(value) => handleChange("points", value)}
        ></TextInput>
      </ThemedView>
      <Pressable style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.textBtn}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: "#00C080",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    marginTop: 5,
  },
  textBtn: {
    fontWeight: "semibold",
    color: "#fff",
  },
});

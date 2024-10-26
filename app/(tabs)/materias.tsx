import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Appearance, Pressable, Alert } from "react-native";
import { useStore } from "@/context/useStore";
import {convertToLiteral} from '@/helpers/literal'
import { calculateIndice } from "@/helpers/indice";

export default function MateriasScreen() {
  const [indice, setIndice] = useState<number>(0)
  const { materias, clear } = useStore();

  const colorScheme = Appearance.getColorScheme()
  const color = colorScheme === 'dark' ? '#fff': '#222'

  useEffect(()=>{
    let newIndice = 0
    if(materias.length) newIndice = calculateIndice(materias) 
    setIndice(newIndice)
  }, [materias])

  const handleClick = ()=>{
    Alert.alert("Limpiar", "Se han eliminado todos los datos")
    clear()
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#222" }}
      headerImage={
        <Ionicons size={310} name="school" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Este es tu índice!</ThemedText>
      </ThemedView>
        <ThemedText type="subtitle">{indice.toFixed(2)}/4🏆</ThemedText>
      <ThemedView style={styles.stepContainer}>
        {materias.map((el, index) => (
          <View key={index} style={styles.asignaturasContainer}>
            <Text style={[{color}]}>{el.title} - {el.value} créditos ({convertToLiteral(el.points)})</Text>
          </View>
        ))}
        <Pressable style={styles.limpiarBtn} onPress={handleClick}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Limpiar</Text>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  asignaturasContainer:{
    padding: 5
  },
  limpiarBtn:{
    backgroundColor: '#BA0000',
    width: 200,
    padding: 5,
    borderRadius: 2
  }
});

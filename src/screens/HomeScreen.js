import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const { selectedStudent } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, responsável!</Text>
      {selectedStudent && (
        <Text style={styles.subtitle}>
          Acompanhando: {selectedStudent.nome} ({selectedStudent.turma})
        </Text>
      )}
      <Text style={styles.text}>
        Aqui vamos mostrar um resumo: últimas notas, faltas recentes e recados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  text: {
    fontSize: 14,
    color: colors.text,
  },
});

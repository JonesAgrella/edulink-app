import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

export default function RecadosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recados</Text>
      <Text>Aqui vai a lista de recados vindos da instituição.</Text>
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
    marginBottom: spacing.md,
  },
});

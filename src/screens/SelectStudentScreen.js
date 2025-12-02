import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import radius from '../theme/radius';
import { useAuth } from '../context/AuthContext';

export default function SelectStudentScreen() {
  const { setSelectedStudent } = useAuth();

  const alunos = [
    { id: '1', nome: 'João da Silva', turma: '7º A' },
    { id: '2', nome: 'Maria Oliveira', turma: '5º B' },
  ];

  function handleSelect(student) {
    setSelectedStudent(student);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o aluno</Text>

      {alunos.map((aluno) => (
        <Pressable
          key={aluno.id}
          style={styles.card}
          onPress={() => handleSelect(aluno)}
        >
          <Text style={styles.name}>{aluno.nome}</Text>
          <Text style={styles.turma}>{aluno.turma}</Text>
        </Pressable>
      ))}
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
    marginBottom: spacing.lg,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  turma: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
});

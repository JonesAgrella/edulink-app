import React, { createContext, useContext, useState, useMemo } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // depois vem do Firebase
  const [selectedStudent, setSelectedStudent] = useState(null);

  function signIn(email, password) {
    if (!email || !password) {
      throw new Error('Preencha email e senha');
    }

    // Usuário fake por enquanto
    setUser({
      id: 'fake-user-id',
      name: 'Responsável Demo',
      email,
    });
  }

  function signOut() {
    setUser(null);
    setSelectedStudent(null);
  }

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      selectedStudent,
      setSelectedStudent,
    }),
    [user, selectedStudent]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return ctx;
}

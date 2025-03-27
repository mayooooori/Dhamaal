'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebaseConfig';

interface AuthContextType {
  user: User | null;
  role: string | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!isMounted) return;

      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          const roleRef = doc(db, 'users', firebaseUser.uid);
          const roleSnap = await getDoc(roleRef);
          if (isMounted) {
            setRole(roleSnap.exists() ? roleSnap.data().role : 'user');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          if (isMounted) setRole('user');
        }
      } else {
        if (isMounted) setRole(null);
      }

      if (isMounted) setLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase/auth';

type AuthType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
};

export const useAuth = (): AuthType => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading, isAuthenticated: !!user };
};

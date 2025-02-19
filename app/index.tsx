// app/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

export default function Welcome() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ... rest of your welcome screen code ... */}
      <TouchableOpacity 
        style={[styles.button, styles.loginButton]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.signUpButton]}
        onPress={handleSignUp}
      >
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ... your existing styles ...
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

interface WelcomeScreenProps {
  onLogin?: () => void;
  onSignUp?: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin, onSignUp }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={require('@/assets/images/welcome-dog.png')}
            style={styles.dogImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to PawFinder</Text>
          <Text style={styles.subtitle}>
            Find your perfect furry companion and make a new best friend today
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={onLogin}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.signUpButton]}
            onPress={onSignUp}
          >
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EA',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  dogImage: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    maxHeight: 300,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FFA500',
  },
  signUpButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButtonText: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    paddingHorizontal: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  }
});

export default WelcomeScreen;
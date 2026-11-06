import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import CodeScreen from './src/screens/CodeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import InterestsScreen from './src/screens/InterestsScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import SettingsScreen from './src/screens/SettingsScreen';

type Screen =
  | 'login'
  | 'signup'
  | 'code'
  | 'onboarding'
  | 'interests'
  | 'subscription'
  | 'settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {screen === 'login' && (
        <LoginScreen onLogin={() => setScreen('onboarding')} onRegister={() => setScreen('signup')} />
      )}
      {screen === 'signup' && <SignUpScreen onContinue={() => setScreen('code')} />}
      {screen === 'code' && <CodeScreen onContinue={() => setScreen('onboarding')} />}
      {screen === 'onboarding' && <OnboardingScreen onNext={() => setScreen('interests')} />}
      {screen === 'interests' && <InterestsScreen onNext={() => setScreen('subscription')} />}
      {screen === 'subscription' && <SubscriptionScreen onSubscribe={() => setScreen('settings')} />}
      {screen === 'settings' && <SettingsScreen onLogout={() => setScreen('login')} />}
    </SafeAreaProvider>
  );
}
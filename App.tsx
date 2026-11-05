import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/OnboardingScreen';
import InterestsScreen from './src/screens/InterestsScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';

type Screen = 'onboarding' | 'interests' | 'subscription';

export default function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {screen === 'onboarding' && <OnboardingScreen onNext={() => setScreen('interests')} />}
      {screen === 'interests' && <InterestsScreen onNext={() => setScreen('subscription')} />}
      {screen === 'subscription' && <SubscriptionScreen />}
    </SafeAreaProvider>
  );
}
 import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Plan = {
  id: string;
  name: string;
  discount?: string;
  price: string;
  period: string;
};

const PLANS: Plan[] = [
  { id: 'yearly', name: 'Yearly', discount: '-66% discount', price: '€ 94.80', period: 'every year' },
  { id: 'monthly', name: 'Monthly', discount: '-53% discount', price: '€ 10.90', period: 'every month' },
  { id: 'weekly', name: 'Weekly', price: '€ 5.90', period: 'every week' },
];

const BENEFITS = ['Unlimited access', '200GB storage', 'Sync all your devices'];

type Props = { onSubscribe: () => void };

export default function SubscriptionScreen({ onSubscribe }: Props) {
  const [selectedId, setSelectedId] = useState('yearly');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose your subscription plan</Text>
        <Text style={styles.subtitle}>And get a 7-day free trial</Text>

        {PLANS.map((plan) => {
          const active = plan.id === selectedId;
          return (
            <Pressable
              key={plan.id}
              onPress={() => setSelectedId(plan.id)}
              style={[styles.plan, active && styles.planActive]}
            >
              <View style={[styles.radio, active && styles.radioActive]}>
                {active && <View style={styles.radioDot} />}
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.planName}>{plan.name}</Text>
                {plan.discount && <Text style={styles.discount}>{plan.discount}</Text>}
              </View>

              <View style={styles.priceBox}>
                <Text style={styles.price}>{plan.price}</Text>
                <Text style={styles.period}>{plan.period}</Text>
              </View>

              {plan.id === 'yearly' && (
                <View style={styles.badge}>
                  <Text style={styles.badgeStar}>★</Text>
                </View>
              )}
            </Pressable>
          );
        })}
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

export default function SubscriptionScreen() {
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

        <View style={styles.benefits}>
          <Text style={styles.benefitsTitle}>You'll get:</Text>
          {BENEFITS.map((b) => (
            <View key={b} style={styles.benefitRow}>
              <Text style={styles.benefitStar}>★</Text>
              <Text style={styles.benefitText}>{b}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton title="Subscribe" onPress={() => console.log('Subscribe:', selectedId)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, padding: 16, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 12, color: colors.muted, marginBottom: 24 },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    height: 58,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  planActive: { backgroundColor: colors.selectedBg, borderColor: colors.selectedBg },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.muted,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: { borderColor: colors.primary, backgroundColor: colors.primary },
  radioDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.white },
  planName: { fontSize: 12, fontWeight: '700', color: colors.text },
  discount: { fontSize: 9, color: colors.primary, marginTop: 2 },
  priceBox: { alignItems: 'flex-end' },
  price: { fontSize: 13, fontWeight: '700', color: colors.text },
  period: { fontSize: 9, color: colors.muted, marginTop: 2 },
  badge: {
    position: 'absolute',
    top: -8,
    right: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeStar: { color: colors.white, fontSize: 10 },
  benefits: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 16,
    marginTop: 14,
  },
  benefitsTitle: { fontSize: 13, fontWeight: '700', color: colors.text, marginBottom: 12 },
  benefitRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  benefitStar: { color: colors.primary, fontSize: 9, marginRight: 8 },
  benefitText: { fontSize: 10, color: colors.muted },
  footer: { padding: 16 },
});
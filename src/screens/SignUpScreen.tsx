import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';
import { colors } from '../theme';

type Props = { onContinue: () => void };

export default function SignUpScreen({ onContinue }: Props) {
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Create an account to get started</Text>

          <TextField label="Name" placeholder="Name" />
          <TextField
            label="Email Address"
            placeholder="name@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextField label="Password" placeholder="Create a password" secure />
          <TextField placeholder="Confirm password" secure />

          <Pressable style={styles.checkRow} onPress={() => setAgreed((a) => !a)}>
            <View style={[styles.checkbox, agreed && styles.checkboxActive]}>
              {agreed && <Text style={styles.checkMark}>✓</Text>}
            </View>
            <Text style={styles.checkText}>
              I've read and agree with the <Text style={styles.link}>Terms and Conditions</Text> and the{' '}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </Pressable>

          <View style={{ height: 24 }} />
          <PrimaryButton title="Continue" onPress={onContinue} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scroll: { padding: 16, paddingTop: 20 },
  title: { fontSize: 18, fontWeight: '800', color: colors.text },
  subtitle: { fontSize: 11, color: colors.muted, marginTop: 4, marginBottom: 24 },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  checkMark: { color: colors.white, fontSize: 12, fontWeight: '700' },
  checkText: { flex: 1, fontSize: 10, color: colors.muted, lineHeight: 15 },
  link: { color: colors.primary, fontWeight: '700' },
});
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';
import { colors } from '../theme';

type Props = {
  onLogin: () => void;
  onRegister: () => void;
};

export default function LoginScreen({ onLogin, onRegister }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.imageBox}>
          <Text style={styles.imageIcon}>🖼️</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Welcome!</Text>

          <TextField placeholder="Email Address" keyboardType="email-address" autoCapitalize="none" />
          <TextField placeholder="Password" secure />

          <Pressable>
            <Text style={styles.link}>Forgot password?</Text>
          </Pressable>

          <View style={{ height: 20 }} />
          <PrimaryButton title="Login" onPress={onLogin} />

          <Text style={styles.member}>
            Not a member?{' '}
            <Text style={styles.link} onPress={onRegister}>
              Register now
            </Text>
          </Text>

          <View style={styles.divider} />
          <Text style={styles.or}>Or continue with</Text>

          <View style={styles.socials}>
            <View style={[styles.social, { backgroundColor: '#EF4444' }]}>
              <Text style={styles.socialText}>G</Text>
            </View>
            <View style={[styles.social, { backgroundColor: '#111111' }]}>
              <Text style={styles.socialText}>A</Text>
            </View>
            <View style={[styles.social, { backgroundColor: colors.primary }]}>
              <Text style={styles.socialText}>f</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  imageBox: {
    height: 230,
    backgroundColor: colors.placeholder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: { fontSize: 36, opacity: 0.4 },
  content: { padding: 16, paddingTop: 24 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 22 },
  link: { fontSize: 11, fontWeight: '700', color: colors.primary },
  member: { textAlign: 'center', fontSize: 11, color: colors.muted, marginTop: 14 },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 20 },
  or: { textAlign: 'center', fontSize: 11, color: colors.muted, marginBottom: 14 },
  socials: { flexDirection: 'row', justifyContent: 'center', gap: 14 },
  social: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  socialText: { color: colors.white, fontWeight: '700', fontSize: 14 },
});
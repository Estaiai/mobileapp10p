import { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = { onContinue: () => void };

export default function CodeScreen({ onContinue }: Props) {
  const [code, setCode] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const refs = useRef<(TextInput | null)[]>([]);

  const onChange = (text: string, i: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...code];
    next[i] = digit;
    setCode(next);
    if (digit && i < 3) refs.current[i + 1]?.focus();
  };

  const onKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, i: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Enter confirmation code</Text>
        <Text style={styles.subtitle}>A 4-digit code was sent to</Text>
        <Text style={styles.subtitle}>lucasscott3@email.com</Text>

        <View style={styles.codeRow}>
          {code.map((digit, i) => (
            <TextInput
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              value={digit}
              onChangeText={(t) => onChange(t, i)}
              onKeyPress={(e) => onKeyPress(e, i)}
              onFocus={() => setFocusedIndex(i)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              style={[styles.box, focusedIndex === i && styles.boxFocused]}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.resend}>Resend code</Text>
        <PrimaryButton title="Continue" onPress={onContinue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16 },
  top: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 15, fontWeight: '800', color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 10, color: colors.muted, lineHeight: 15 },
  codeRow: { flexDirection: 'row', gap: 10, marginTop: 28 },
  box: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    fontSize: 16,
    color: colors.text,
  },
  boxFocused: { borderColor: colors.primary },
  bottom: { paddingBottom: 8 },
  resend: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
});
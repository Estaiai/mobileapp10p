import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = { onNext: () => void };

export default function OnboardingScreen({ onNext }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.imageBox}>
        <Text style={styles.imageIcon}>🖼️</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Create a prototype in just a few minutes</Text>
        <Text style={styles.subtitle}>
          Enjoy these pre-made components and worry only about creating the best product ever.
        </Text>

        <View style={{ flex: 1 }} />
        <PrimaryButton title="Next" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  imageBox: {
    flex: 1.4,
    backgroundColor: colors.placeholder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: { fontSize: 40, opacity: 0.4 },
  content: { flex: 1, padding: 16, paddingTop: 24 },
  dots: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.border },
  dotActive: { backgroundColor: colors.primary },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 12 },
  subtitle: { fontSize: 13, color: colors.muted, lineHeight: 19 },
});
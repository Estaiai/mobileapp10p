import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = { onNext: () => void };

const INTERESTS = [
  'User Interface',
  'User Experience',
  'User Research',
  'UX Writing',
  'User Testing',
  'Service Design',
  'Strategy',
  'Design Systems',
];

export default function InterestsScreen({ onNext }: Props) {
  const [selected, setSelected] = useState<string[]>([
    'User Interface',
    'User Research',
    'Strategy',
    'Design Systems',
  ]);

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Personalise your experience</Text>
        <Text style={styles.subtitle}>Choose your interests.</Text>

        {INTERESTS.map((item) => {
          const active = selected.includes(item);
          return (
            <Pressable
              key={item}
              onPress={() => toggle(item)}
              style={[styles.item, active && styles.itemActive]}
            >
              <Text style={styles.itemText}>{item}</Text>
              {active && <Text style={styles.check}>✓</Text>}
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton title="Next" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  progressBg: {
    height: 5,
    backgroundColor: colors.border,
    borderRadius: 3,
    marginHorizontal: 16,
    marginTop: 12,
  },
  progressFill: { width: '50%', height: 5, backgroundColor: colors.primary, borderRadius: 3 },
  scroll: { padding: 16, paddingTop: 24 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text, marginBottom: 12 },
  subtitle: { fontSize: 12, color: colors.muted, marginBottom: 24 },
  item: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  itemActive: { backgroundColor: colors.selectedBg, borderColor: colors.selectedBg },
  itemText: { fontSize: 13, color: colors.text },
  check: { color: colors.primary, fontSize: 16, fontWeight: '700' },
  footer: { padding: 16 },
});
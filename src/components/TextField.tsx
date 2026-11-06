import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../theme';

type Props = TextInputProps & {
  label?: string;
  secure?: boolean;
};

export default function TextField({ label, secure, ...rest }: Props) {
  const [hidden, setHidden] = useState(!!secure);
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.box, focused && styles.boxFocused]}>
        <TextInput
          placeholderTextColor={colors.muted}
          {...rest}
          secureTextEntry={hidden}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {secure && (
          <Pressable onPress={() => setHidden((h) => !h)}>
            <Text style={styles.eye}>{hidden ? '👁' : '🙈'}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 14 },
  label: { fontSize: 11, fontWeight: '700', color: colors.text, marginBottom: 6 },
  box: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  boxFocused: { borderColor: colors.primary },
  input: { flex: 1, fontSize: 13, color: colors.text },
  eye: { fontSize: 14, marginLeft: 8 },
});
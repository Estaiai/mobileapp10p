import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

type Props = { onLogout: () => void };

const ITEMS = ['Saved Messages', 'Appearance', 'Language', 'Privacy & Security', 'Storage'];
const TABS = ['Chats', 'Friends', 'Settings'];

export default function SettingsScreen({ onLogout }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarIcon}>👤</Text>
          <View style={styles.editBadge}>
            <Text style={styles.editIcon}>✎</Text>
          </View>
        </View>
        <Text style={styles.name}>Lucas Scott</Text>
        <Text style={styles.username}>@lucasscott3</Text>
      </View>

      <View style={styles.list}>
        {ITEMS.map((item) => (
          <View key={item} style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}
        <Pressable style={styles.row} onPress={() => setShowModal(true)}>
          <Text style={[styles.rowText, { color: '#EF4444' }]}>Log out</Text>
        </Pressable>
      </View>

      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <View key={tab} style={styles.tab}>
            <Text style={[styles.tabIcon, tab === 'Settings' && styles.tabActive]}>●</Text>
            <Text style={[styles.tabText, tab === 'Settings' && styles.tabActive]}>{tab}</Text>
          </View>
        ))}
      </View>

      <Modal visible={showModal} transparent animationType="fade" onRequestClose={() => setShowModal(false)}>
        <View style={styles.overlay}>
          <View style={styles.dialog}>
            <Text style={styles.dialogTitle}>Log out</Text>
            <Text style={styles.dialogText}>
              Are you sure you want to log out? You'll need to login again to use the app.
            </Text>

            <View style={styles.dialogButtons}>
              <Pressable style={[styles.dialogBtn, styles.cancelBtn]} onPress={() => setShowModal(false)}>
                <Text style={[styles.dialogBtnText, { color: colors.primary }]}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.dialogBtn, styles.logoutBtn]}
                onPress={() => {
                  setShowModal(false);
                  onLogout();
                }}
              >
                <Text style={[styles.dialogBtnText, { color: colors.white }]}>Log out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: { textAlign: 'center', fontSize: 13, fontWeight: '700', color: colors.text, marginTop: 12 },
  profile: { alignItems: 'center', marginTop: 24, marginBottom: 20 },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.placeholder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: { fontSize: 32 },
  editBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: { color: colors.white, fontSize: 10 },
  name: { fontSize: 14, fontWeight: '800', color: colors.text, marginTop: 10 },
  username: { fontSize: 10, color: colors.muted, marginTop: 2 },
  list: { flex: 1, paddingHorizontal: 16 },
  row: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.card,
  },
  rowText: { fontSize: 12, color: colors.text },
  arrow: { fontSize: 18, color: colors.muted },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 8,
  },
  tab: { flex: 1, alignItems: 'center' },
  tabIcon: { fontSize: 14, color: colors.muted },
  tabText: { fontSize: 9, color: colors.muted, marginTop: 2 },
  tabActive: { color: colors.primary },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  dialog: { backgroundColor: colors.white, borderRadius: 14, padding: 16, width: '100%' },
  dialogTitle: { textAlign: 'center', fontSize: 13, fontWeight: '800', color: colors.text },
  dialogText: { textAlign: 'center', fontSize: 10, color: colors.muted, lineHeight: 15, marginTop: 8 },
  dialogButtons: { flexDirection: 'row', gap: 10, marginTop: 18 },
  dialogBtn: { flex: 1, height: 38, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  cancelBtn: { borderWidth: 1, borderColor: colors.primary },
  logoutBtn: { backgroundColor: colors.primary },
  dialogBtnText: { fontSize: 12, fontWeight: '700' },
});
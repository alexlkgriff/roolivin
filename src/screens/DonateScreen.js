import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { colors, spacing } from '../theme';

const DONATION_URL = 'https://square.link/u/w3LkQ4w9';

export default function DonateScreen() {
  const handleDonate = () => {
    Linking.openURL(DONATION_URL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Support Rooted Living Initiative</Text>
      <Text style={styles.body}>
        Your gift helps us build at-cost homes, renew older properties, and create sustainable
        pathways to homeownership for families in the Bitterroot Valley.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>Give Securely Online</Text>
      </TouchableOpacity>

      <Text style={styles.caption}>
        Donations are tax-deductible to the extent allowed by law once the IRS confirms
        501(c)(3) status.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing(3),
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing(2),
  },
  body: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing(3),
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing(1.75),
    borderRadius: 999,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  caption: {
    marginTop: spacing(2),
    fontSize: 12,
    color: colors.subtleText,
  },
});

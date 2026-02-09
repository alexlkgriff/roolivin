import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing } from '../theme';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Rooted Living Initiative</Text>

      <Text style={styles.paragraph}>
        Rooted Living Initiative is a Montana-based public benefit nonprofit focused on solving
        structural housing challenges in the Bitterroot Valley and beyond.
      </Text>

      <Text style={styles.subheading}>Our Mission</Text>
      <Text style={styles.paragraph}>
        To create stable, affordable, and dignified paths to homeownership by:
        {'\n'}• Building at-cost, energy-efficient homes for seniors and families
        {'\n'}• Rehabilitating older housing stock
        {'\n'}• Offering an innovative, nonprofit payment plan instead of traditional debt-heavy mortgages
        {'\n'}• Reinvesting surplus into a community relief fund for families in need
      </Text>

      <Text style={styles.subheading}>Our Values</Text>
      <Text style={styles.paragraph}>
        Rooted Living Initiative is guided by:
        {'\n'}• Stewardship of land and community
        {'\n'}• Transparency and accountability
        {'\n'}• Long-term stability over short-term profit
        {'\n'}• Housing as a foundation for human flourishing
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing(3),
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing(2),
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginTop: spacing(3),
    marginBottom: spacing(1),
  },
  paragraph: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
});
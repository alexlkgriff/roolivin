import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme';

function ProgramCard({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{children}</Text>
    </View>
  );
}

export default function ProgramsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Our Programs</Text>

      <ProgramCard title="At-Cost Homebuilding for Seniors">
        We partner with homeowners who own their homes outright but struggle with aging, inefficient
        properties. Rooted Living builds a new, efficient home at cost, and the original home is
        transferred to the foundation for rehabilitation.
      </ProgramCard>

      <ProgramCard title="Home Rehabilitation & Renewal">
        Older homes are renovated to modern standards with a focus on safety, accessibility, and
        energy efficiency. These homes become the backbone of new affordable ownership opportunities.
      </ProgramCard>

      <ProgramCard title="Rooted Living Payment Plan (RLPP)">
        Instead of traditional mortgages, families can purchase renovated homes through our
        nonprofit payment plan. Payments are predictable, interest charges decline over time, and
        there are no balloon payments or predatory fees.
      </ProgramCard>

      <ProgramCard title="Community Payment Relief Fund">
        A portion of program surplus is dedicated to a restricted fund that helps households in
        crisis with payment assistance, stabilization support, and targeted relief.
      </ProgramCard>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: spacing(2),
    marginBottom: spacing(2),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing(1),
  },
  cardBody: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
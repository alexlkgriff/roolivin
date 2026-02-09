import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { colors, spacing } from '../theme';

const CONTACT_ENDPOINT = 'https://your-api-id.execute-api.us-west-2.amazonaws.com/prod/contact';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      Alert.alert('Please fill out all fields.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      Alert.alert('Thank you!', 'Your message has been sent.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      Alert.alert('Error', 'There was a problem sending your message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact & Volunteer</Text>
        <Text style={styles.body}>
          Interested in partnering, volunteering, or learning more about the Rooted Living Initiative?
          Send us a note and a member of our team will follow up.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="How would you like to help?"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={[styles.button, submitting && { opacity: 0.6 }]}
          onPress={handleSubmit}
          disabled={submitting}
        >
          <Text style={styles.buttonText}>{submitting ? 'Sending...' : 'Send Message'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing(3),
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
    marginBottom: spacing(3),
    lineHeight: 22,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: spacing(1.5),
    marginBottom: spacing(2),
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 15,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: spacing(1.75),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
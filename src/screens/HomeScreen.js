import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing } from '../theme';

const { width, height } = Dimensions.get('window');
const DONATION_URL = 'https://square.link/u/w3LkQ4w9';

export default function HomeScreen({ navigation }) {
  const player = useVideoPlayer(require('../../assets/background.mp4'), (player) => {
    player.loop = true;
    player.muted = true;
  });

  React.useEffect(() => {
    // `useVideoPlayer` runs before the <VideoView /> mounts; autoplay needs to happen after mount on web.
    const id = setTimeout(() => {
      player.play();
    }, 0);

    return () => clearTimeout(id);
  }, [player]);

  return (
    <View style={styles.container}>

      {/* FULLSCREEN BACKGROUND VIDEO */}
      <VideoView
        player={player}
        style={styles.backgroundVideo}
        nativeControls={false}
        contentFit="cover"
        playsInline
        pointerEvents="none"
      />

      {/* CENTERED GLASS PANEL */}
      <View style={styles.centerWrapper}>
        <BlurView intensity={60} tint="dark" style={styles.glassPanel}>
          <LinearGradient
            colors={['rgba(255,255,255,0.12)', 'rgba(0,0,0,0.35)']}
            style={styles.gradient}
          />

          {/* CONTENT */}
          <View style={styles.contentContainer}>
            <Image
              source={require('../../assets/rooted_living_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Rooted Living Initiative</Text>
            <Text style={styles.subtitle}>Bitterroot Valley, Montana</Text>

            <Text style={styles.body}>
              Sustainable, community-driven pathways to homeownership.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => Linking.openURL(DONATION_URL)}
            >
              <Text style={styles.primaryButtonText}>Donate Now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Programs')}
            >
              <Text style={styles.secondaryButtonText}>Explore Programs</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>

    </View>
  );
}

const PANEL_WIDTH = width * 0.85;
const PANEL_MAX_WIDTH = 420;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },

  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  glassPanel: {
    width: Math.min(PANEL_WIDTH, PANEL_MAX_WIDTH),
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  contentContainer: {
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(3),
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: spacing(2),
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: spacing(1),
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#eee',
    marginBottom: spacing(3),
    textAlign: 'center',
  },

  body: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f5f5f5',
    marginBottom: spacing(3),
    lineHeight: 22,
  },

  primaryButton: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(5),
    borderRadius: 999,
    marginBottom: spacing(2),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  secondaryButton: {
    paddingVertical: spacing(1.25),
    paddingHorizontal: spacing(4),
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  secondaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

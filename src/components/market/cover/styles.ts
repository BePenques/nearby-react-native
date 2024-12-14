/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[200],
    height: 232,
    marginBottom: -32,
    width: '100%',
  },
  header: {
    padding: 24,
    paddingTop: 56,
  },
});
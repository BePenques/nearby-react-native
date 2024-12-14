/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: colors.gray[500],
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22.4,
  },
});

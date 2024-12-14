/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  code: {
    color: colors.gray[600],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  container: {
    paddingHorizontal: 32,
  },
  content: {
    alignItems: 'center',
    backgroundColor: colors.green.soft,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginBottom: 12,
  },
});

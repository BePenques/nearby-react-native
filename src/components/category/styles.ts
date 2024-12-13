/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[300],
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0,
  },
  name: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});

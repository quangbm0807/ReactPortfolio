// src/theme.ts
import { ThemeConfig } from 'antd';

// Pastel color palette
const colors = {
    primary: '#a5b4fc', // Pastel purple
    secondary: '#fca5a5', // Pastel red
    success: '#86efac', // Pastel green
    warning: '#fde68a', // Pastel yellow
    error: '#f87171', // Light red
    info: '#93c5fd', // Pastel blue
    textLight: '#1e293b',
    textDark: '#e2e8f0',
    bgLight: '#ffffff',
    bgDark: '#0f172a',
};

export const lightTheme: ThemeConfig = {
    token: {
        colorPrimary: colors.primary,
        colorSuccess: colors.success,
        colorWarning: colors.warning,
        colorError: colors.error,
        colorInfo: colors.info,
        colorTextBase: colors.textLight,
        colorBgBase: colors.bgLight,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        borderRadius: 12,
        wireframe: false,
        colorBgContainer: 'rgba(255, 255, 255, 0.8)',
        colorBgElevated: 'rgba(255, 255, 255, 0.95)',
        colorBorder: 'rgba(0, 0, 0, 0.1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        boxShadowSecondary: '0 8px 16px rgba(0, 0, 0, 0.12)',
    },
    components: {
        Card: {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadiusLG: 16,
        },
        Button: {
            borderRadius: 8,
            primaryColor: colors.bgLight,
            borderRadiusLG: 12,
        },
        Menu: {
            itemBg: 'transparent',
            itemSelectedBg: `${colors.primary}20`,
            itemHoverBg: `${colors.primary}10`,
            itemSelectedColor: colors.primary,
        },
        Input: {
            borderRadius: 8,
        },
        Select: {
            borderRadius: 8,
        }
    }
};

export const darkTheme: ThemeConfig = {
    token: {
        colorPrimary: colors.primary,
        colorSuccess: colors.success,
        colorWarning: colors.warning,
        colorError: colors.error,
        colorInfo: colors.info,
        colorTextBase: colors.textDark,
        colorBgBase: colors.bgDark,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        borderRadius: 12,
        wireframe: false,
        colorBgContainer: 'rgba(15, 23, 42, 0.8)',
        colorBgElevated: 'rgba(15, 23, 42, 0.95)',
        colorBorder: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        boxShadowSecondary: '0 8px 16px rgba(0, 0, 0, 0.4)',
    },
    components: {
        Card: {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            borderRadiusLG: 16,
        },
        Button: {
            borderRadius: 8,
            primaryColor: colors.bgLight,
            borderRadiusLG: 12,
        },
        Menu: {
            itemBg: 'transparent',
            itemSelectedBg: `${colors.primary}30`,
            itemHoverBg: `${colors.primary}20`,
            itemSelectedColor: colors.primary,
        },
        Input: {
            borderRadius: 8,
        },
        Select: {
            borderRadius: 8,
        }
    }
};
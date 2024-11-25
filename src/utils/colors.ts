
import { colorsType } from "../types/types"

// Colores primarios
export const colorsMain = {
    brand: {
        // backgroundPrimary: '#fde615',
        // backgroundPrimary: '#f8e000',
        backgroundPrimary: '#fde000',
        backgroundSecondary: '#d8e9ff',
    },
    system: {
        primaryColorTextDarkMode: '#C5C7C8',
        primaryColorTextLigthMode: '#191C1D',
        secondaryColorTextDarkMode: '#C1C7CE',
        secondaryColorTextLigthMode: '#41484D',
        backgroundColorTextSecondary: '#004aad',
        darker: '#1C1B1F',
        lighter: '#F4F4F5',
        // Bordes
        borderVariantLigth: '#bfc7d1',
        borderVariantDark: '#41484D',
        // Placeholder
        placeholderDarkMode: 'rgba(197, 199, 200, 0.5)',
        placeholderLigthMode: 'rgba(25, 28, 29, 0.5)',
    },
}

export const useColors = (isDarkMode: boolean) => {
    const colors: colorsType = {
        // Color primario del texto
        colorText: {
            color: isDarkMode
                ? colorsMain.system.primaryColorTextDarkMode
                : colorsMain.system.primaryColorTextLigthMode,
        },
        colorTextLogo: {
            color: isDarkMode
                ? colorsMain.system.primaryColorTextDarkMode
                : colorsMain.system.backgroundColorTextSecondary,
        },
        // Color de fondo de un contenedor
        backgroundStyle: {
            backgroundColor: isDarkMode ? colorsMain.system.darker : colorsMain.system.lighter,
        },
        backgroundButtonPrimary: {
            backgroundColor: colorsMain.brand.backgroundPrimary,
        },
        backgroundButtonSecondary: {
            backgroundColor: isDarkMode ? 'rgba(236, 239, 245, 0.1)' : colorsMain.brand.backgroundSecondary,
            borderWidth: isDarkMode ? 1 : 0,
            borderColor: colorsMain.system.borderVariantDark,

        },
        borderVariant: {
            borderColor: isDarkMode ? colorsMain.system.borderVariantDark : colorsMain.system.borderVariantLigth
        }
    }
    return colors;
}
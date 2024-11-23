import { colorsType } from "../types/types"

// Colores primarios
export const colorsMain = {
    brand: {
        // backgroundPrimary: '#FAA61A',
        // backgroundPrimary: '#fde615',
        backgroundPrimary: '#f8e000',
        backgroundSecondary: '#e3efff',
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
        borderVariantLigth: '#DDE3EA',
        borderVariantDark: '#41484D',
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
            backgroundColor: colorsMain.brand.backgroundSecondary,
        },
        borderVariant: {
            borderColor: isDarkMode ? colorsMain.system.borderVariantDark : colorsMain.system.borderVariantLigth
        }
    }
    return colors;
}
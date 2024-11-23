// Colores primarios
export const colorsMain = {
    brand: {
        // backgroundPrimary: '#FAA61A',
        backgroundPrimary: '#fde615',
    },
    system: {
        primaryColorTextDarkMode: '#C5C7C8',
        primaryColorTextLigthMode: '#191C1D',
        darker: '#1C1B1F',
        lighter: '#F4F4F5',
    },
}

export const useColors = (isDarkMode: boolean) => {
    return {
        // Color primario del texto
        colorText: {
            color: isDarkMode
                ? colorsMain.system.primaryColorTextDarkMode
                : colorsMain.system.primaryColorTextLigthMode,
        },
        // Color de fondo de un contenedor
        backgroundStyle: {
            backgroundColor: isDarkMode ? colorsMain.system.darker : colorsMain.system.lighter,
        }
    }
}
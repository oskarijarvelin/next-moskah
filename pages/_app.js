import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import '@fontsource/nunito-sans'
import '@fontsource/pirata-one'

const breakpoints = createBreakpoints({
    sm: "500px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
    xxl: "1332px",
})

const theme = extendTheme({ 
    colors: {
        white: '#E6E5E0',
        blue: '#0085A6',
        black: '#0E1211',
    },
    fonts: {
        body: 'Nunito Sans',
        heading: 'Pirata One',
    },
    breakpoints,
    components: {
        Heading: {
            baseStyle: {
                color: '#E6E5E0',
                fontWeight: 400,
                mb: 8,
            },
            sizes: {
                md: {
                    fontSize: {
                        base: 30,
                        md: 40,
                        lg: 36,
                        xl: 48
                    },
                },
            },
            defaultProps: {
                size: 'md',
            },
        },
        Button: {
            baseStyle: { 
                fontFamily: 'Pirata One',
                fontWeight: 400,
            },
            sizes: {
                md: {
                    fontSize: 24,
                    p: 8,
                    mt: 4,
                },
            },
            variants: {
                solid: {
                    bg: '#0085A6',
                },
            },
            defaultProps: {
                size: 'md',
                variant: 'solid',
            },
        },
        Text: {
            baseStyle: {
                fontSize: {
                    base: 18,
                    md: 22,

                    base: 18,
                    md: 20,
                    lg: 18,
                    xl: 22
                },
                mb: 8,
            },
        },
        Link: {
            baseStyle: {
                color: '#E6E5E0',
                textDecoration: 'underline'
            },
        },
    },
})

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
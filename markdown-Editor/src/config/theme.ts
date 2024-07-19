import { extendTheme, StyleFunctionProps, ThemeConfig, useColorModeValue } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { switchTheme } from './switchTheme'
const config : ThemeConfig = {
  useSystemColorMode: true,
}


const theme = extendTheme({ config,   styles: {
    
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', '#151619')(props),
        lineHeight: 'base',
      },
    }),
  }, components :{Switch : switchTheme}})

export default theme
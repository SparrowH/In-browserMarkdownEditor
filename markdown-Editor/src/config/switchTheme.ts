import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    height: '24px',
    width: '48px'
  },
  thumb: {
    bg: 'whiteAlpha.800',
    boxSize : '16px',
    margin : '4px'
  },
  track: {
    bg: '#151619',
    _checked: {
      bg: '#151619',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })
'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const customSystem = {
  ...defaultSystem,
  theme: {
    ...defaultSystem.theme,
    tokens: {
      ...defaultSystem.theme?.tokens,
      fonts: {
        body: '"Roboto", system-ui, sans-serif',
        heading: '"Roboto", system-ui, sans-serif',
      },
    },
  },
}

export function Provider(props) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

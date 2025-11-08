import {
  Box,
  Container,
  Flex,
  Text,
  Input,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <Box 
      bg="#2a2733" 
      py={{ base: 8, md: 10 }}
      px={{ base: 4, md: 4 }}
      w="100%"
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="center"
        maxW="7xl"
        mx="auto"
        gap={{ base: 6, md: 0 }}
      >
        <Text 
          color="white"
          fontSize={{ base: "xl", md: "3xl", lg: "3xl" }}
          fontWeight="bold"
          mr={{ md: 10 }}
          mb={{ base: 0, md: 0 }}
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: 2, md: 0 }}
        >
          Subscribe to Our Newsletter
        </Text>
        
        <Box position="relative" w={{ base: "100%", md: "60%" }} px={{ base: 2, md: 0 }}>
          <Box 
            position="absolute" 
            top="-36px" 
            left={{ base: "80%", md: "8%" }} 
            zIndex={2}
            display={{ base: 'none', md: 'block' }}
          >
            <svg width="46" height="46" viewBox="0 0 46 46">
              <polygon points="0,9 46,23 0,37 7,23" fill="#dc3545" />
              <polyline points="7,23 23,23" stroke="white" strokeWidth="2" fill="none" />
              <path d="M15,13 Q-2,23 30,4" stroke="white" strokeDasharray="5,5" strokeWidth="2" fill="none" />
            </svg>
          </Box>
          
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 3, md: 0 }} align="stretch">
            <Box position="relative" flex={1}>
              <Input
                placeholder="Enter Your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="white"
                color="black"
                fontSize={{ base: "md", md: "md" }}
                h={{ base: "52px", md: "52px" }}
                pl={4}
                pr={4}
                border="none"
                borderRight="none"
                borderTopLeftRadius={{ base: "md", md: "full" }}
                borderBottomLeftRadius={{ base: "md", md: "full" }}
                borderTopRightRadius={{ base: "md", md: "0" }}
                borderBottomRightRadius={{ base: "md", md: "0" }}
                flex="1"
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  border: 'none',
                  boxShadow: 'none',
                  outline: 'none'
                }}
              />
            </Box>
            <Button
              bg="red.600"
              color="white"
              h={{ base: "52px", md: "52px" }}
              px={10}
              borderTopLeftRadius={{ base: "md", md: "0" }}
              borderBottomLeftRadius={{ base: "md", md: "0" }}
              borderTopRightRadius={{ base: "md", md: "full" }}
              borderBottomRightRadius={{ base: "md", md: "full" }}
              fontWeight="bold"
              fontSize={{ base: "sm", md: "md" }}
              ml={{ base: 0, md: 0 }}
              w={{ base: "100%", md: "auto" }}
              _hover={{ bg: "red.700" }}
              _active={{ bg: "red.800" }}
              onClick={handleSubscribe}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Subscribe Now
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Newsletter


import {
  Box,
  Container,
  HStack,
  VStack,
  Link,
  Text,
  Flex,
} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { footerFeatures, partnersLinks, companyLinks } from '../data/data'

function Footer() {
  return (
    <Box as="footer" bg="white" mt="auto">
      <Box bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'flex-start' }}
            gap={8}
            flexWrap="wrap"
          >
            {footerFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Box
                  key={feature.heading}
                  flex={{ base: '1 1 100%', md: '1 1 18%' }}
                  minW={{ base: '100%', md: '200px' }}
                >
                  <HStack spacing={3} align="flex-start">
                    <Box color="red.500" flexShrink={0} mt={1}>
                      <IconComponent size={24} />
                    </Box>
                    <VStack align="flex-start" spacing={1}>
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        color="gray.700"
                        lineHeight="short"
                      >
                        {feature.heading}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        lineHeight="short"
                        wordBreak="break-word"
                      >
                        {feature.isEmail ? (
                          <>
                            Email on:-{' '}
                            <Link
                              href="mailto:info@digimro.com"
                              color="blue.500"
                              textDecoration="none"
                              _hover={{ textDecoration: 'underline' }}
                            >
                              info@digimro.com
                            </Link>
                          </>
                        ) : (
                          feature.description
                        )}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )
            })}
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.50" py={6} borderTop="1px solid" borderBottom="1px solid" borderColor="gray.300">
        <Container maxW="container.xl">
          <VStack
            align={{ base: 'flex-start', md: 'center' }}
            spacing={2}
            direction={{ base: 'column', md: 'row' }}
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              wrap="wrap"
              align={{ base: 'flex-start', md: 'center' }}
              justify={{ base: 'flex-start', md: 'center' }}
              gap={{ base: 1, md: 0 }}
              rowGap={2}
              width="100%"
            >
              {partnersLinks.map((partner, index) => (
                <HStack
                  key={partner.label}
                  spacing={0}
                  align="center"
                  as="span"
                  display={{ base: index === 0 ? 'flex' : 'none', md: 'flex' }}
                  width={{ base: '100%', md: 'auto' }}
                >
                  <Link
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize={{ base: 'sm', md: 'sm' }}
                    color="gray.700"
                    fontWeight="medium"
                    _hover={{ color: 'red.500', textDecoration: 'none' }}
                    textDecoration="none"
                    px={{ base: 0, md: 5 }}
                    py={{ base: 1, md: 0 }}
                  >
                    {partner.label}
                  </Link>
                  {index < partnersLinks.length - 1 && (
                    <Text as="span" color="gray.400" fontSize="sm" display={{ base: 'none', md: 'inline' }} px={2}>
                      |
                    </Text>
                  )}
                </HStack>
              ))}
            </Flex>
            <Box display={{ base: 'block', md: 'none' }} width="100%">
              <VStack align="flex-start" spacing={2}>
                {partnersLinks.map((partner, index) => (
                  <Link
                    key={partner.label}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize="sm"
                    color="gray.700"
                    fontWeight="medium"
                    _hover={{ color: 'red.500', textDecoration: 'none' }}
                    textDecoration="none"
                  >
                    {partner.label}
                  </Link>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box bg="white" py={10}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            gap={8}
          >
            <Box flex="1" maxW={{ base: '100%', md: '400px' }}>
              <Box mb={4}>
                <HStack spacing={1}>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="red.500"
                    display="inline"
                  >
                    Digi
                  </Text>
                  <Box position="relative" display="inline-block">
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="gray.700"
                      display="inline"
                    >
                      MRO
                    </Text>
                    <HStack
                      spacing={0.5}
                      position="absolute"
                      bottom="-2px"
                      left="50%"
                      transform="translateX(-50%)"
                      mt={0.5}
                    >
                      <Box w="3px" h="3px" bg="red.500" borderRadius="full" />
                      <Box w="3px" h="3px" bg="red.500" borderRadius="full" />
                      <Box w="3px" h="3px" bg="red.500" borderRadius="full" />
                    </HStack>
                  </Box>
                </HStack>
              </Box>
              <Text
                fontSize="sm"
                color="gray.600"
                lineHeight="tall"
                maxW="350px"
              >
                DIGI MRO is the partner for all things supply chain; from warehousing,
                distribution & Finance to the end customer.
              </Text>
            </Box>

            <Box flex="1" maxW={{ base: '100%', md: '200px' }}>
              <Text
                fontSize="md"
                fontWeight="bold"
                color="gray.700"
                mb={4}
              >
                Company
              </Text>
              <VStack align="flex-start" spacing={2}>
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ color: 'red.500', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box flex="1" maxW={{ base: '100%', md: '200px' }}>
              <Text
                fontSize="md"
                fontWeight="bold"
                color="gray.700"
                mb={4}
              >
                Stay Connected:
              </Text>
              <Link
                href="https://www.linkedin.com/company/digimro"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-block"
              >
                <Box
                  color="#0077B5"
                  fontSize="32px"
                  _hover={{ opacity: 0.8 }}
                  cursor="pointer"
                >
                  <FaLinkedin />
                </Box>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.300" py={4} borderTop="1px solid" borderColor="gray.300">
        <Container maxW="container.xl">
          <VStack
            spacing={3}
            align={{ base: 'center', md: 'stretch' }}
            position="relative"
          >
            <VStack
              spacing={2}
              align={{ base: 'center', md: 'flex-start' }}
              display={{ base: 'flex', md: 'none' }}
            >
              <Link
                href="#"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Copyright
              </Link>
              <Link
                href="#"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                E-Waste Policy
              </Link>
            </VStack>
            <HStack
              spacing={2}
              flexWrap="wrap"
              justify={{ base: 'center', md: 'flex-start' }}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link
                href="#"
                fontSize="xs"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Terms of Use
              </Link>
              <Text as="span" color="gray.400" fontSize="sm">
                |
              </Text>
              <Link
                href="#"
                fontSize="xs"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Copyright
              </Link>
              <Text as="span" color="gray.400" fontSize="sm">
                |
              </Text>
              <Link
                href="#"
                fontSize="xs"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                Privacy Policy
              </Link>
              <Text as="span" color="gray.400" fontSize="sm">
                |
              </Text>
              <Link
                href="#"
                fontSize="xs"
                color="gray.600"
                _hover={{ color: 'red.500', textDecoration: 'none' }}
              >
                E-Waste Policy
              </Link>
            </HStack>
            <Box w="100%" display={{ base: 'block', md: 'flex' }} justifyContent={{ base: 'center', md: 'flex-end' }}>
              <Text fontSize={{ base: 'sm', md: 'xs' }} color="gray.600" textAlign={{ base: 'center', md: 'right' }}>
                © 2025 digimro.com
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer


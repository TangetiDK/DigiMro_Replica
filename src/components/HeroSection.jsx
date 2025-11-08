import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { heroTabs } from '../data/data'
import H5 from '../assets/H5.png'
import H6 from '../assets/H6.jpeg'
import H7 from '../assets/H7.jpeg'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroTabs.length)
    }, 5000) // Change tab every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoRotating])

  const handleTabClick = (index) => {
    setActiveTab(index)
    setIsAutoRotating(false) // Pause auto-rotation when user clicks
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  const currentTab = heroTabs[activeTab]

  return (
    <Box w="100%" bg="rgb(239,239,244)">
      <Box maxW="100%" px={{ base: 2, md: 2, lg: 2 }} mx="auto">
        {/* Hero Banner Section */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 2, lg: 2 }}
          py={{ base: 3, md: 4 }}
          // align="stretch"
          // spacing={2}
          justify="space-between"
          alignItems="stretch"
        >
          {/* Left Side - Hero Content */}
          <Box
            flex={{ base: 1, lg: '0.82' }}
            display="flex"
            flexDirection="column"
            gap={2}
            w={"100%"}
          >
            {/* Hero Banner Box */}
            <Box
              bgImage={`url(${currentTab.image})`} // Use image as background
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover" // Covers the box, cropped if necessary
              borderRadius="xl"
              position="relative"
              overflow="hidden"
              minH={{ base: '320px', md: '400px', lg: '480px' }}
              w="100%"
              display="flex"
            />


            {/* Tabbed Navigation Bar - Below the Hero Image Box */}
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              overflow="hidden"
              display={{ base: 'none', md: 'block' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align="stretch"
                h={{ base: 'auto', md: '50px' }}
              >
                {heroTabs.map((tab, index) => (
                  <Box
                    key={tab.id}
                    flex={1}
                    bg={activeTab === index ? 'gray.100' : 'white'}
                    borderRight={{
                      base: 'none',
                      md: index < heroTabs.length - 1 ? '1px solid' : 'none',
                    }}
                    borderColor="gray.200"
                    cursor="pointer"
                    onClick={() => handleTabClick(index)}
                    transition="all 0.3s ease-in-out"
                    position="relative"
                    _hover={{ bg: activeTab === index ? 'gray.100' : 'gray.50' }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      h="100%"
                      px={3}
                      py={{ base: 2, md: 0 }}
                    >
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight={activeTab === index ? 'bold' : 'normal'}
                        color={activeTab === index ? 'red.600' : 'gray.800'}
                        textAlign="center"
                      >
                        {tab.label}
                      </Text>
                    </Flex>
                    {/* Red underline for active tab */}
                    {activeTab === index && (
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        h="3px"
                        bg="red.600"
                        transition="all 0.3s ease-in-out"
                      />
                    )}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>

           {/* Right Side - Promotional Banners */}
           <VStack
             flex={{ base: 1, lg: '0.25' }}
             spacing={2}
             align="stretch"
             h={{ base: '320px', md: '400px', lg: '530px' }}
             justify="space-between"
           >
            {/* Top Card - H5 Image */}
            <ChakraLink
              as={Link}
              to="/bulk-deals"
              flex={1}
              minH={0}
              display="block"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Box
                borderRadius="xl"
                boxShadow="lg"
                position="relative"
                overflow="hidden"
                w="100%"
                h="100%"
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}
              >
                <Image
                  src={H5}
                  alt="Promotional Banner 1"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="xl"
                />
              </Box>
            </ChakraLink>

             {/* Middle Card - H6 Image */}
             <Box
               borderRadius="xl"
               boxShadow="lg"
               position="relative"
               overflow="hidden"
               flex={1}
               minH={0}
             >
               <Image
                 src={H6}
                 alt="Promotional Banner 2"
                 w="100%"
                 h="100%"
                 objectFit="cover"
                 borderRadius="xl"
               />
             </Box>

             {/* Bottom Card - H7 Image */}
             <ChakraLink
               as={Link}
               to="/gi-pipes"
               flex={1}
               minH={0}
               display="block"
               textDecoration="none"
               _hover={{ textDecoration: "none" }}
             >
               <Box
                 borderRadius="xl"
                 boxShadow="lg"
                 position="relative"
                 overflow="hidden"
                 w="100%"
                 h="100%"
                 cursor="pointer"
                 transition="transform 0.2s"
                 _hover={{ transform: "scale(1.02)" }}
               >
                 <Image
                   src={H7}
                   alt="Promotional Banner 3"
                   w="100%"
                   h="100%"
                   objectFit="cover"
                   borderRadius="xl"
                 />
               </Box>
             </ChakraLink>
           </VStack>
        </Flex>

        
      </Box>
    </Box>
  )
}


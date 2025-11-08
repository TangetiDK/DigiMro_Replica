import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Text,
  Flex,
  Image,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { brands } from '../data/data'
import contactBanner from '../assets/contactBanner.svg'

export default function ContactUs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const searchRef = useRef(null)
  const suggestionsRef = useRef(null)

  // Filter brands based on search query for suggestions only
  const filteredBrands = brands.filter((brand) =>
    brand.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Always use all brands for scrolling (no filtering)
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands]

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand.label)
    setSearchQuery(brand.label)
    setShowSuggestions(false)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const foundBrand = brands.find(
        (brand) => brand.label.toLowerCase() === searchQuery.toLowerCase()
      )
      if (foundBrand) {
        setSelectedBrand(foundBrand.label)
      }
    } else {
      setSelectedBrand(null)
    }
    setShowSuggestions(false)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(true)
    if (!e.target.value) {
      setSelectedBrand(null)
    }
  }

  return (
    <Box
      minH="50vh"
      position="relative"
      overflow="hidden"
      // py={5}
      bgImage={`url(${contactBanner})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Light overlay for better text readability while keeping background visible */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.300"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
        <Flex direction="column" align="center" justify="center" minH="30vh">
          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={6}
            // textTransform="uppercase"
            letterSpacing="wide"
          >
            Search Contact Details By "Brand"
          </Heading>

          {/* Search Bar */}
          <Flex w="100%" maxW="700px" align="stretch" mb={6}>
            <Box position="relative" flex={1}>
              <Input
                placeholder="Search Brand"
                value={searchQuery}
                onChange={handleInputChange}
                bg="white"
                color="black"
                h="52px"
                pl={12} // leaves space for the icon
                pr={4}
                border="none"
                borderRight="none"
                borderTopLeftRadius="full"
                borderBottomLeftRadius="full"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                fontSize="md"
                _placeholder={{ color: 'gray.400' }}
                _focus={{
                  border: 'none',
                  boxShadow: 'none',
                  outline: 'none'
                }}
                flex={1}
              />
              {/* Search Icon */}
              <Box
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                pointerEvents="none"
              >
                <FaSearch size={18} />
              </Box>
            </Box>
            <Button
              bg="red.600"
              color="white"
              h="52px"
              px={10}
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
              borderTopRightRadius="full"
              borderBottomRightRadius="full"
              fontWeight="bold"
              fontSize="md"
              _hover={{ bg: 'red.700' }}
              textTransform="uppercase"
              letterSpacing="wide"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Flex>


          {/* Subtitle */}
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="white"
            textAlign="center"
            fontWeight="medium"
          >
            Choose From Our Top Brands
          </Text>

        </Flex>
      </Container>

      {/* Scrolling Brands Section - Full Width */}
      <Box w="100%" position="relative" overflow="hidden" py={6} px={0} >
            {/* Global Styles for Animations */}
            <Box
              as="style"
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes scrollLeft {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-33.333%);
                    }
                  }
                  @keyframes scrollRight {
                    0% {
                      transform: translateX(-33.333%);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                  .brands-scroll-left {
                    animation: scrollLeft 40s linear infinite;
                  }
                  .brands-scroll-right {
                    animation: scrollRight 45s linear infinite;
                  }
                `,
              }}
            />

            {/* First Row - Left to Right */}
            <Box
              overflow="hidden"
              mb={4}
              position="relative"
              w="100%"
              mx={0}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                zIndex: 2,
                pointerEvents: 'none',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <HStack
                spacing={5}
                display="inline-flex"
                className="brands-scroll-left"
                sx={{
                  willChange: 'transform',
                }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <Box
                    key={`brand-1-${index}`}
                    bg="white"
                    borderRadius="full"
                    px={5}
                    py={2.5}
                    minW="180px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow="lg"
                    _hover={{
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.label}
                      maxH="36px"
                      maxW="140px"
                      objectFit="contain"
                    />
                  </Box>
                ))}
              </HStack>
            </Box>

            {/* Second Row - Right to Left */}
            <Box
              overflow="hidden"
              position="relative"
              w="100%"
              mx={0}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                zIndex: 2,
                pointerEvents: 'none',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <HStack
                spacing={5}
                display="inline-flex"
                className="brands-scroll-right"
                sx={{
                  willChange: 'transform',
                }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <Box
                    key={`brand-2-${index}`}
                    bg="white"
                    borderRadius="full"
                    px={5}
                    py={2.5}
                    minW="180px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow="lg"
                    _hover={{
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.label}
                      maxH="36px"
                      maxW="140px"
                      objectFit="contain"
                    />
                  </Box>
                ))}
              </HStack>
            </Box>
          </Box>
    </Box>
  )
}


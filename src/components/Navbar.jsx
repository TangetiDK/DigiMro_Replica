import {
  Box,
  Container,
  HStack,
  Link,
  Button,
  Text,
  IconButton,
  Flex,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react'
import { LuShoppingCart, LuMenu } from 'react-icons/lu'
import { FaTimes } from 'react-icons/fa'
import { FaSearch, FaTh } from 'react-icons/fa'
import { topNavLinks, brands } from '../data/data'
import walletGif from '../assets/wallet-icon-animation.gif'
import digimroLogo from '../assets/digimro-logo.png'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import { useState, useRef, useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
// Category images
import image34 from '../assets/image_34.jpeg'
import image52 from '../assets/image_52.jpeg'
import image38 from '../assets/image_38.png'
import image40 from '../assets/image_40.jpeg'
import image35 from '../assets/image_35.jpeg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)
  const suggestionsRef = useRef(null)
  const navigate = useNavigate()
  
  const onOpen = () => setIsMenuOpen(true)
  const onClose = () => setIsMenuOpen(false)

  // Map brand labels to product brand names for filtering
  const getProductBrandName = (brandLabel) => {
    const brandMap = {
      'BOSCH': 'Bosch',
      'EON AV': 'EON AV',
      'System Sensor': 'System Sensor',
      'Morley IAS': 'Morley IAS',
      'HID': 'HID',
      'GST': 'GST',
      'Western Digital': 'Western Digital',
      'IDEMIA': 'IDEMIA',
      'Texecom': 'Texecom',
      'Eonsecure': 'Eonsecure',
      'Schneider Electric': 'Schneider Electric',
      'Honeywell': 'Honeywell',
    }
    return brandMap[brandLabel] || brandLabel
  }

  // Filter brands based on search query
  const filteredBrands = brands.filter((brand) =>
    brand.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
    setSearchQuery('')
    setShowSuggestions(false)
    // Map brand label to product brand name for filtering
    const brandName = getProductBrandName(brand.label)
    navigate(`/cctv?brand=${encodeURIComponent(brandName)}`)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(true)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const foundBrand = brands.find(
        (brand) => brand.label.toLowerCase() === searchQuery.toLowerCase()
      )
      if (foundBrand) {
        handleBrandSelect(foundBrand)
      } else {
        // If exact match not found, try to find a partial match
        const partialMatch = brands.find(
          (brand) => brand.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (partialMatch) {
          handleBrandSelect(partialMatch)
        }
      }
    }
    setShowSuggestions(false)
  }

  // Category tabs data
  const categories = [
    { id: 'cctv', label: 'CCTV', image: image34 },
    { id: 'fire-alarm', label: 'Fire Alarm', image: image52 },
    { id: 'access-control', label: 'Access Control', image: image35 },
    { id: 'intrusion-alarm', label: 'Intrusion Alarm', image: image38 },
    { id: 'audio-video', label: 'Audio Video', image: image40 },
    { id: 'all-categories', label: 'All Categories', icon: FaTh },
  ]

  return (
    <>
      <Box
        bg="gray.100"
        py={2}
        display={{ base: 'none', md: 'block' }}
      >
        <Container maxW="container.xl">
          <Flex justify="flex-end">
            <HStack spacing={4} gap={6}>
              {topNavLinks.map((link, index) => (
                <HStack key={link.label} spacing={index < topNavLinks.length - 1 ? 2 : 0}>
                  {link.label === 'Calculator' ? (
                    <Link
                      as={RouterLink}
                      to="/calculator"
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ color: 'red.500', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  ) : link.label === 'Blog' ? (
                    <Link
                      as={RouterLink}
                      to="/blogs?tab=0"
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ color: 'red.500', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  ) : link.label === 'Knowledge Hub' ? (
                    <Link
                      as={RouterLink}
                      to="/blogs?tab=1"
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ color: 'red.500', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  ) : link.label === 'Contact Us' ? (
                    <Link
                      as={RouterLink}
                      to="/contact-us"
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ color: 'red.500', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      color="gray.700"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ color: 'red.500', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </HStack>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        position="sticky"
        top={0}
        zIndex={1000}
        boxShadow="sm"
        overflow="visible"
        w="100%"
      >
        <Container maxW="container.xl">
          <Flex
            justify="space-between"
            align="center"
            py={4}
            gap={4}
          >
            <HStack spacing={4}>
              <Box
                as={RouterLink}
                to="/"
                cursor="pointer"
              >
                <Image
                  src={digimroLogo}
                  alt="DigiMRO Logo"
                  h={{ base: "32px", md: "40px" }}
                  w="auto"
                  objectFit="contain"
                />
              </Box>
            </HStack>

            {/* Search Bar - Center */}
            <Box
              flex={1}
              maxW={{ base: '100%', md: '500px', lg: '600px' }}
              mx={{ base: 2, md: 4 }}
              display={{ base: 'none', md: 'block' }}
              position="relative"
              ref={searchRef}
            >
              <Input
                placeholder="Search Product, Category, Brand..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
                bg="white"
                borderRadius="md"
                fontSize="sm"
                size="md"
                pr="40px"
                w="100%"
                color="black"
                _placeholder={{ color: 'gray.500' }}
                _focus={{
                  borderColor: 'none',
                  boxShadow: 'none',
                  border: 'none',
                  outline: 'none',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
              />
              <Button
                position="absolute"
                right="2px"
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                bg="red.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={handleSearch}
                _hover={{ bg: 'red.600' }}
                cursor="pointer"
                h="36px"
                w="36px"
                minW="36px"
                borderRadius="md"
              >
                <FaSearch color="rgb(255, 255, 255)" size={16} />
              </Button>

              {/* Suggestions Dropdown */}
              {showSuggestions && filteredBrands.length > 0 && (
                <Box
                  ref={suggestionsRef}
                  position="absolute"
                  top="100%"
                  left={0}
                  right={0}
                  mt={1}
                  bg="white"
                  borderRadius="md"
                  boxShadow="xl"
                  zIndex={1000}
                  maxH="300px"
                  overflowY="auto"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <VStack align="stretch" spacing={0} py={2}>
                    {filteredBrands.map((brand, index) => (
                      <Box
                        key={index}
                        px={4}
                        py={3}
                        cursor="pointer"
                        onClick={() => handleBrandSelect(brand)}
                        borderBottom={
                          index < filteredBrands.length - 1
                            ? '1px solid'
                            : 'none'
                        }
                        borderColor="gray.100"
                        transition="all 0.2s"
                        _hover={{ 
                          bg: '#FFE5E5',
                          '& > p': {
                            color: 'red.500'
                          }
                        }}
                      >
                        <Text 
                          fontSize="sm" 
                          color="gray.700" 
                          fontWeight="medium"
                          transition="color 0.2s"
                        >
                          {brand.label}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              )}

              {/* No results message */}
              {showSuggestions &&
                searchQuery &&
                filteredBrands.length === 0 && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    right={0}
                    mt={1}
                    bg="white"
                    borderRadius="md"
                    boxShadow="xl"
                    zIndex={1000}
                    p={4}
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <Text fontSize="sm" color="gray.500" textAlign="center">
                      No brands found matching "{searchQuery}"
                    </Text>
                  </Box>
                )}
            </Box>

            <HStack
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
            >
              <HStack 
                spacing={2} 
                align="center"
                onClick={() => setIsLoginModalOpen(true)}
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                <Image
                  src={walletGif}
                  alt="Ledger"
                  w="20px"
                  h="20px"
                  objectFit="contain"
                  display="inline-block"
                  verticalAlign="middle"
                />
                <Text 
                  fontSize="sm" 
                  fontWeight="medium" 
                  color="gray.700"
                  lineHeight="1"
                  display="inline-block"
                  verticalAlign="middle"
                >
                  Ledger
                </Text>
              </HStack>

              <HStack 
                spacing={2}
                onClick={() => setIsLoginModalOpen(true)}
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                <Box color="gray.700">
                  <LuShoppingCart size={20} />
                </Box>
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  Cart
                </Text>
              </HStack>

              <Button
                onClick={() => setIsSignUpModalOpen(true)}
                color="red.500"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: 'red.600' }}
                cursor="pointer"
                bg="none"
                variant="ghost"
              >
                Become A Customer
              </Button>

              <Button
                bg="red.500"
                color="white"
                _hover={{ bg: 'red.600' }}
                size="md"
                borderRadius="md"
                fontWeight="semibold"
                onClick={() => setIsLoginModalOpen(true)}
              >
                LOGIN
              </Button>
            </HStack>

            <HStack
              spacing={2}
              display={{ base: 'flex', md: 'none' }}
            >
              <Button
                bg="red.500"
                color="white"
                _hover={{ bg: 'red.600' }}
                size="sm"
                borderRadius="md"
                fontWeight="semibold"
                onClick={() => setIsLoginModalOpen(true)}
              >
                LOGIN
              </Button>
              <Button
                // icon={<LuMenu size={24} color="black" />}
                variant="ghost"
                aria-label="Menu"
                onClick={onOpen}
                size="md"
                bg="transparent"
                color="black"
                _hover={{ bg: "gray.100" }}
              >
                <LuMenu size={24} color="black" />
              </Button>
            </HStack>
          </Flex>
        </Container>

        {/* Category Tabs - Sticky below navbar */}
        <Box
          bg="white"
          borderTop="1px solid"
          borderColor="gray.300"
          py={3}
          display={{ base: 'none', md: 'block' }}
        >
          <Container maxW="container.xl">
            <Flex
              justify="space-around"
              align="center"
              direction="row"
              wrap="nowrap"
              gap={0}
              overflowX="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {categories.map((category, idx) => {
                const isAllCategories = category.id === 'all-categories'
                const hasImage = category.image
                const IconComponent = category.icon
                
                return (
                  <Box
                    key={category.id}
                    as={isAllCategories ? RouterLink : 'div'}
                    to={isAllCategories ? '/all-categories' : undefined}
                    borderRight={{
                      base: idx < categories.length - 1 ? "1px solid" : undefined,
                      md: idx < categories.length - 1 ? "1px solid" : undefined
                    }}
                    borderColor="gray.200"
                    flex={{ base: '0 0 auto', md: '1' }}
                    minW={{ base: 'auto', md: '0' }}
                    textAlign="center"
                    px={{ base: 2, md: 4 }}
                    py={{ base: 1, md: 0 }}
                    cursor="pointer"
                    _hover={{ opacity: 0.8 }}
                    transition="all 0.2s"
                    textDecoration="none"
                  >
                    <Flex
                      direction="row"
                      align="center"
                      justify="center"
                      gap={2}
                    >
                      {hasImage ? (
                        <Image
                          src={category.image}
                          alt={category.label}
                          w={{ base: '30px', md: '35px' }}
                          h={{ base: '30px', md: '35px' }}
                          objectFit="contain"
                          borderRadius="sm"
                        />
                      ) : (
                        <IconComponent 
                          size={20} 
                          color="#dc2626"
                        />
                      )}
                      <Text 
                        fontSize="xs" 
                        color={
                          idx === 1 ? "#dc2626" : // Fire Alarm - red
                          idx === 5 ? "#dc2626" : // All Categories - red
                          "gray.700" // Others - dark gray
                        }
                        whiteSpace="nowrap"
                        fontWeight="medium"
                      >
                        {category.label}
                      </Text>
                    </Flex>
                  </Box>
                )
              })}
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        onOpenLogin={() => {
          setIsSignUpModalOpen(false)
          setIsLoginModalOpen(true)
        }}
      />

      {/* Mobile Hamburger Menu */}
      {isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          w="300px"
          bg="white"
          zIndex={2000}
          boxShadow="xl"
          overflowY="auto"
        >
          {/* Header */}
          <Box
            borderBottomWidth="1px"
            borderColor="gray.200"
            p={4}
            position="sticky"
            bg="white"
            top={0}
            zIndex={1}
          >
            <Text fontSize="lg" fontWeight="bold">Menu</Text>
            <Button
              variant="ghost"
              aria-label="Close menu"
              position="absolute"
              right={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={onClose}
              borderRadius="full"
              w="32px"
              h="32px"
              minW="32px"
              p={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaTimes color="white" size={16} />
            </Button>
          </Box>
          
          {/* Body */}
          <Box p={4}>
            <VStack align="stretch" spacing={4}>
              {/* Top Nav Links */}
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={3} color="gray.700">
                  Quick Links
                </Text>
                <VStack align="stretch" spacing={2}>
                  {topNavLinks.map((link) => (
                    link.label === 'Calculator' ? (
                      <Link
                        key={link.label}
                        as={RouterLink}
                        to="/calculator"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        py={2}
                        _hover={{ color: 'red.500', textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ) : link.label === 'Blog' ? (
                      <Link
                        key={link.label}
                        as={RouterLink}
                        to="/blogs?tab=0"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        py={2}
                        _hover={{ color: 'red.500', textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ) : link.label === 'Knowledge Hub' ? (
                      <Link
                        key={link.label}
                        as={RouterLink}
                        to="/blogs?tab=1"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        py={2}
                        _hover={{ color: 'red.500', textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ) : link.label === 'Contact Us' ? (
                      <Link
                        key={link.label}
                        as={RouterLink}
                        to="/contact-us"
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        py={2}
                        _hover={{ color: 'red.500', textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="medium"
                        py={2}
                        _hover={{ color: 'red.500', textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </VStack>
              </Box>

              <Box borderTop="1px" borderColor="gray.200" my={2} />

              {/* Categories */}
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={3} color="gray.700">
                  Categories
                </Text>
                <VStack align="stretch" spacing={2}>
                  {categories.map((category) => {
                    const isAllCategories = category.id === 'all-categories'
                    const hasImage = category.image
                    const IconComponent = category.icon
                    const categoryIdx = categories.findIndex(c => c.id === category.id)
                    
                    return (
                      <Box
                        key={category.id}
                        as={isAllCategories ? RouterLink : 'div'}
                        to={isAllCategories ? '/all-categories' : undefined}
                        onClick={onClose}
                      >
                        <Flex
                          direction="row"
                          align="center"
                          gap={3}
                          py={2}
                          cursor="pointer"
                          _hover={{ opacity: 0.8 }}
                        >
                          {hasImage ? (
                            <Image
                              src={category.image}
                              alt={category.label}
                              w="30px"
                              h="30px"
                              objectFit="contain"
                              borderRadius="sm"
                            />
                          ) : (
                            <IconComponent 
                              size={20} 
                              color="#dc2626"
                            />
                          )}
                          <Text 
                            fontSize="sm" 
                            color={
                              categoryIdx === 1 ? "#dc2626" : // Fire Alarm - red
                              categoryIdx === 5 ? "#dc2626" : // All Categories - red
                              "gray.700" // Others - dark gray
                            }
                            fontWeight="medium"
                          >
                            {category.label}
                          </Text>
                        </Flex>
                      </Box>
                    )
                  })}
                </VStack>
              </Box>

              <Box borderTop="1px" borderColor="gray.200" my={2} />

              {/* Additional Links */}
              <VStack align="stretch" spacing={2}>
                <Flex 
                  align="center" 
                  gap={2} 
                  py={2}
                  onClick={() => {
                    setIsLoginModalOpen(true)
                    onClose()
                  }}
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                >
                  <Image
                    src={walletGif}
                    alt="Ledger"
                    w="20px"
                    h="20px"
                    objectFit="contain"
                  />
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Ledger
                  </Text>
                </Flex>
                <Flex 
                  align="center" 
                  gap={2} 
                  py={2}
                  onClick={() => {
                    setIsLoginModalOpen(true)
                    onClose()
                  }}
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                >
                  <LuShoppingCart size={20} color="#4a5568" />
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Cart
                  </Text>
                </Flex>
                <Button
                  onClick={() => {
                    setIsSignUpModalOpen(true)
                    onClose()
                  }}
                  color="red.500"
                  fontSize="sm"
                  fontWeight="medium"
                  variant="ghost"
                  bg="transparent"
                  justifyContent="flex-start"
                  _hover={{ color: 'red.600', bg: 'red.50' }}
                >
                  Become A Customer
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Box>
      )}
      
      {/* Overlay */}
      {isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          zIndex={1999}
          onClick={onClose}
        />
      )}
    </>
  )
}

export default Navbar


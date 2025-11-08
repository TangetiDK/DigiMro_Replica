import { Box, Flex, Text, Image, Container, Heading, HStack, Button, Link as ChakraLink } from "@chakra-ui/react";
import { FaChevronRight, FaBuilding, FaChevronLeft } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { fireAlarmBrands, fireAlarmCategories } from "../data/data";

export default function FireAlarmProducts() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrowCategories, setShowLeftArrowCategories] = useState(false);
  const [showRightArrowCategories, setShowRightArrowCategories] = useState(true);
  
  const brandsScrollRef = useRef(null);
  const categoriesScrollRef = useRef(null);

  const checkScrollPosition = (containerRef, setLeft, setRight) => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setLeft(scrollLeft > 0);
    setRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const brandsContainer = brandsScrollRef.current;
    const categoriesContainer = categoriesScrollRef.current;
    
    if (brandsContainer) {
      checkScrollPosition(brandsScrollRef, setShowLeftArrow, setShowRightArrow);
      brandsContainer.addEventListener('scroll', () => 
        checkScrollPosition(brandsScrollRef, setShowLeftArrow, setShowRightArrow)
      );
    }
    
    if (categoriesContainer) {
      checkScrollPosition(categoriesScrollRef, setShowLeftArrowCategories, setShowRightArrowCategories);
      categoriesContainer.addEventListener('scroll', () => 
        checkScrollPosition(categoriesScrollRef, setShowLeftArrowCategories, setShowRightArrowCategories)
      );
    }
    
    return () => {
      if (brandsContainer) {
        brandsContainer.removeEventListener('scroll', () => 
          checkScrollPosition(brandsScrollRef, setShowLeftArrow, setShowRightArrow)
        );
      }
      if (categoriesContainer) {
        categoriesContainer.removeEventListener('scroll', () => 
          checkScrollPosition(categoriesScrollRef, setShowLeftArrowCategories, setShowRightArrowCategories)
        );
      }
    };
  }, []);

  const scroll = (containerRef, direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.scroll-card')?.offsetWidth || 280;
    const scrollAmount = cardWidth * 2;

    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      if (containerRef === brandsScrollRef) {
        checkScrollPosition(brandsScrollRef, setShowLeftArrow, setShowRightArrow);
      } else {
        checkScrollPosition(categoriesScrollRef, setShowLeftArrowCategories, setShowRightArrowCategories);
      }
    }, 500);
  };

  return (
    <Container maxW="container.xl" py={{ base: 6, md: 8 }} px={{ base: 2, md: 4 }} bg="rgb(255,254,254)" borderRadius={{ base: '16px', md: '24px' }} mt={5} mb={5}>
      <Box mb={10}>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          color="gray.800"
          mb={4}
        >
          Top Brands in Fire Alarm
        </Heading>

        <Box
          bg="rgb(204,219,222)"
          borderTopLeftRadius="0"
          borderBottomLeftRadius="60px"
          borderTopRightRadius="60px"
          borderBottomRightRadius="0"
          p={4}
          position="relative"
        >
          {showLeftArrow && (
            <Button
              aria-label="Scroll left"
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              bg="white"
              color="red.600"
              borderRadius="full"
              boxShadow="lg"
              size="sm"
              minW="auto"
              w="auto"
              h="auto"
              p={2}
              border="none"
              outline="none"
              onClick={() => scroll(brandsScrollRef, 'left')}
              _hover={{ bg: 'gray.50' }}
              _active={{ 
                bg: 'gray.50',
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focus={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focusVisible={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              display={{ base: 'none', md: 'flex' }}
            >
              <FaChevronLeft size={16} color="#DC2626" />
            </Button>
          )}

          <Box
            ref={brandsScrollRef}
            overflowX="auto"
            overflowY="hidden"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none !important',
                width: '0 !important',
                height: '0 !important',
                background: 'transparent !important',
              },
              '&::-webkit-scrollbar-track': {
                display: 'none !important',
                background: 'transparent !important',
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none !important',
              },
              scrollbarWidth: 'none !important',
              msOverflowStyle: 'none !important',
            }}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none !important',
                width: '0 !important',
                height: '0 !important',
              },
            }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <Flex gap={4} display="inline-flex" py={2}>
              {fireAlarmBrands.map((brand, index) => (
                <Box
                  key={index}
                  className="scroll-card"
                  minW="140px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                  as={Link}
                  to={`/fire-alarm?brand=${encodeURIComponent(brand.name)}`}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  cursor="pointer"
                >
                  <Box
                    w={{ base: "140px", md: "120px" }}
                    h={{ base: "140px", md: "120px" }}
                    borderRadius="full"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={{ base: 4, md: 3 }}
                    _hover={{ borderColor: "red.500", boxShadow: "md" }}
                    transition="all 0.2s"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      maxH={{ base: "100px", md: "80px" }}
                      maxW={{ base: "100px", md: "80px" }}
                      objectFit="contain"
                      fallback={
                        <Text fontSize={{ base: "sm", md: "xs" }} color="gray.500" textAlign="center" fontWeight="bold">
                          {brand.name}
                        </Text>
                      }
                    />
                  </Box>
                  <Text fontSize={{ base: "md", md: "sm" }} color="gray.700" fontWeight="medium" textAlign="center">
                    {brand.name}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>

          {showRightArrow && (
            <Button
              aria-label="Scroll right"
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              bg="white"
              color="red.600"
              borderRadius="full"
              boxShadow="lg"
              size="sm"
              minW="auto"
              w="auto"
              h="auto"
              p={2}
              border="none"
              outline="none"
              onClick={() => scroll(brandsScrollRef, 'right')}
              _hover={{ bg: 'gray.50' }}
              _active={{ 
                bg: 'gray.50',
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focus={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focusVisible={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              display={{ base: 'none', md: 'flex' }}
            >
              <FaChevronRight size={16} color="#DC2626" />
            </Button>
          )}
        </Box>
      </Box>

      <Box>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            color="gray.800"
          >
            Fire Alarm Categories
          </Heading>
          <Button
            as={Link}
            to="/fire-alarm"
            bg="red.600"
            color="white"
            size="sm"
            px={6}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="md"
            _hover={{ bg: 'red.700' }}
            textTransform="uppercase"
          >
            VIEW ALL
          </Button>
        </Flex>

        <Box position="relative">
          {showLeftArrowCategories && (
            <Button
              aria-label="Scroll left"
              position="absolute"
              left={0}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              bg="white"
              color="red.600"
              borderRadius="full"
              boxShadow="lg"
              size="lg"
              minW="auto"
              w="auto"
              h="auto"
              p={3}
              border="none"
              outline="none"
              onClick={() => scroll(categoriesScrollRef, 'left')}
              _hover={{ bg: 'gray.50' }}
              _active={{ 
                bg: 'gray.50',
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focus={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focusVisible={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              display={{ base: 'none', md: 'flex' }}
            >
              <FaChevronLeft size={20} color="#DC2626" />
            </Button>
          )}

          <Box
            ref={categoriesScrollRef}
            overflowX="auto"
            overflowY="hidden"
            py={4}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none !important',
                width: '0 !important',
                height: '0 !important',
                background: 'transparent !important',
              },
              '&::-webkit-scrollbar-track': {
                display: 'none !important',
                background: 'transparent !important',
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none !important',
              },
              scrollbarWidth: 'none !important',
              msOverflowStyle: 'none !important',
            }}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none !important',
                width: '0 !important',
                height: '0 !important',
              },
            }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <Flex gap={4} display="inline-flex">
              {fireAlarmCategories.map((category, index) => (
                <Box
                  key={index}
                  className="scroll-card"
                  minW={{ base: '280px', md: '250px' }}
                  maxW={{ base: '280px', md: '250px' }}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.200"
                  cursor="pointer"
                  _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)', transition: 'all 0.2s' }}
                >
                  <Box
                    w="100%"
                    h={{ base: '200px', md: '180px' }}
                    bg="gray.50"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={2}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                      fallback={
                        <Box
                          bg="gray.200"
                          w="100%"
                          h="100%"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text color="gray.500" fontSize="sm">No Image</Text>
                        </Box>
                      }
                    />
                  </Box>
                  <Box p={4}>
                    <Text
                      fontSize={{ base: 'md', md: 'md' }}
                      fontWeight="semibold"
                      color="gray.800"
                      mb={3}
                      noOfLines={2}
                    >
                      {category.name}
                    </Text>
                    <HStack spacing={1} mb={3} align="center">
                      <FaBuilding size={14} color="gray" />
                      <Text fontSize={{ base: 'sm', md: 'xs' }} color="gray.600">
                        {category.count} {category.count === 1 ? 'Product' : 'Products'}
                      </Text>
                    </HStack>
                    <ChakraLink
                      href="#"
                      color="red.600"
                      fontSize={{ base: 'sm', md: 'xs' }}
                      fontWeight="semibold"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      _hover={{ textDecoration: 'none', color: 'red.700' }}
                      textDecoration="none"
                    >
                      VIEW PRODUCTS <FaChevronRight size={12} />
                    </ChakraLink>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          {showRightArrowCategories && (
            <Button
              aria-label="Scroll right"
              position="absolute"
              right={0}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              bg="white"
              color="red.600"
              borderRadius="full"
              boxShadow="lg"
              size="lg"
              minW="auto"
              w="auto"
              h="auto"
              p={3}
              border="none"
              outline="none"
              onClick={() => scroll(categoriesScrollRef, 'right')}
              _hover={{ bg: 'gray.50' }}
              _active={{ 
                bg: 'gray.50',
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focus={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              _focusVisible={{
                border: 'none',
                outline: 'none',
                boxShadow: 'lg'
              }}
              display={{ base: 'none', md: 'flex' }}
            >
              <FaChevronRight size={20} color="#DC2626" />
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}


import { Box, Flex, Text, Image, Container, Heading, Link, HStack, Button } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft, FaBuilding } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { honeywellProducts } from "../data/data";

export default function HoneywellProductCarousel() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.carousel-card')?.offsetWidth || 280;
    const scrollAmount = cardWidth * 3;

    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      checkScrollPosition();
    }, 500);
  };

  return (
    
      <Container maxW="container.xl" py={{ base: 6, md: 8 }} px={{ base: 2, md: 4 }} bg="rgb(255,254,254)" borderRadius={{ base: '16px', md: '24px' }} mb={5} mt={5}>
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="black">
            Honeywell
          </Heading>
          <Button
            bg="red.600"
            color="white"
            size="sm"
            px={6}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="md"
            border="1px"
            borderColor="red.600"
            _hover={{ bg: 'red.700' }}
            textTransform="uppercase"
          >
            VIEW ALL
          </Button>
        </Flex>
        
        <Box position="relative">
          {showLeftArrow && (
            <IconButton
              icon={<FaChevronLeft />}
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
              onClick={() => scroll('left')}
              _hover={{ bg: 'gray.50' }}
              display={{ base: 'none', md: 'flex' }}
            />
          )}

          <Box
            ref={scrollContainerRef}
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
              {honeywellProducts.map((product, index) => (
                <Box
                  key={index}
                  className="carousel-card"
                  minW={{ base: '280px', md: '250px' }}
                  maxW={{ base: '280px', md: '250px' }}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  border="1px"
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
                      src={product.image}
                      alt={product.title}
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
                      {product.title}
                    </Text>
                    <HStack spacing={1} mb={3} align="center">
                      <FaBuilding size={14} color="gray" />
                      <Text fontSize={{ base: 'sm', md: 'xs' }} color="gray.600">
                        {product.count} {product.count === 1 ? 'Product' : 'Products'}
                      </Text>
                    </HStack>
                    <Link
                      href="#"
                      color="red.600"
                      fontSize={{ base: 'sm', md: 'xs' }}
                      fontWeight="semibold"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      _hover={{ textDecoration: 'none', color: 'red.700' }}
                    >
                      VIEW PRODUCTS <FaChevronRight size={12} />
                    </Link>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          {showRightArrow && (
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
              onClick={() => scroll('right')}
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
      </Container>
  );
}


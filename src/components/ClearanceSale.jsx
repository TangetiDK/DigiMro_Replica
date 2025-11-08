import { Box, Flex, Text, Image, Container, Heading, Button } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { clearanceSaleProducts } from "../data/data";
import LoginModal from "./LoginModal";


export default function ClearanceSale() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const tabs = ['cctv', 'fireAlarm', 'accessControl', 'intrusionAlarm', 'audioVideo'];
  const tabLabels = ['CCTV', 'Fire Alarm', 'Access Control', 'Intrusion Alarm', 'Audio Video'];

  const currentProducts = clearanceSaleProducts[tabs[activeTab]] || [];

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
  }, [activeTab]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.product-card')?.offsetWidth || 280;
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

  const handleTabChange = (index) => {
    setActiveTab(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  return (
    <Container maxW="container.xl" py={{ base: 6, md: 8 }} px={{ base: 2, md: 4 }} bg="rgb(255,254,254)" borderRadius={{ base: '16px', md: '24px' }} mb={5} mt={10}>
      <Heading
        as="h2"
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="bold"
        color="gray.800"
        mb={6}
      >
        Clearance Sale
      </Heading>

      <Flex
        display="flex"
        gap={{ base: 1.5, md: 2 }}
        mb={6}
        flexWrap="wrap"
        rowGap={2}
      >
        {tabLabels.map((label, index) => (
          <Button
            key={index}
            onClick={() => handleTabChange(index)}
            px={{ base: 4, md: 6 }}
            py={{ base: 2.5, md: 3 }}
            fontSize={{ base: 'xs', md: 'md' }}
            fontWeight="medium"
            borderRadius="md"
            border="1px solid"
            borderColor={activeTab === index ? 'red.600' : 'gray.300'}
            bg={activeTab === index ? 'red.600' : 'white'}
            color={activeTab === index ? 'white' : 'gray.700'}
            _hover={{
              bg: activeTab === index ? 'red.600' : 'gray.50',
            }}
            transition="all 0.2s"
            whiteSpace="nowrap"
            flex={{ base: '0 1 auto', md: 'none' }}
          >
            {label}
          </Button>
        ))}
      </Flex>

      <Box position="relative">
        {showLeftArrow && (
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
            onClick={() => scroll('left')}
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
            {currentProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                index={index}
                onUnlockPrice={() => setIsLoginModalOpen(true)}
              />
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

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </Container>
  );
}

function ProductCard({ product, index, onUnlockPrice }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className="product-card"
      minW={{ base: '280px', md: '280px' }}
      maxW={{ base: '280px', md: '280px' }}
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      border="1px solid"
      borderColor="gray.200"
      cursor="pointer"
      position="relative"
      transition="all 0.3s ease"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ 
        boxShadow: 'xl', 
        transform: 'translateY(-4px)',
      }}
    >
      <Box
        w="100%"
        h={isHovered ? { base: '180px', md: '180px' } : { base: '240px', md: '240px' }}
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={isHovered ? 3 : 4}
        transition="all 0.3s ease"
      >
        <Image
          src={product.image || undefined}
          alt={product.title}
          maxW={isHovered ? "70%" : "100%"}
          maxH={isHovered ? "70%" : "100%"}
          objectFit="contain"
          transition="all 0.3s ease"
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
      <Box 
        p={isHovered ? 3 : 4} 
        pb={isHovered ? 2 : 4}
        position="relative"
      >
        <Text
          fontSize={isHovered ? { base: 'sm', md: 'sm' } : { base: 'sm', md: 'sm' }}
          fontWeight="medium"
          color={isHovered ? "blue.600" : "gray.800"}
          mb={isHovered ? 1 : 2}
          noOfLines={2}
          minH={isHovered ? "36px" : "40px"}
          transition="all 0.3s ease"
        >
          {product.title}
        </Text>
        <Text
          fontSize={isHovered ? { base: 'xs', md: 'xs' } : { base: 'sm', md: 'sm' }}
          color="gray.600"
          fontWeight="normal"
          mb={isHovered ? 2 : 0}
          transition="all 0.3s ease"
        >
          By: {product.brand}
        </Text>
        <Button
          w="100%"
          mt={isHovered ? 0 : 3}
          mb={isHovered ? 0 : 0}
          bg="red.600"
          color="white"
          fontWeight="bold"
          fontSize={{ base: 'xs', md: 'sm' }}
          textTransform="uppercase"
          borderRadius="md"
          py={2.5}
          opacity={isHovered ? 1 : 0}
          transform={isHovered ? "translateY(0)" : "translateY(-10px)"}
          display={isHovered ? "block" : "none"}
          transition="all 0.3s ease"
          pointerEvents={isHovered ? "auto" : "none"}
          _hover={{
            bg: 'red.700',
          }}
          onClick={onUnlockPrice}
        >
          UNLOCK THE PRICE
        </Button>
      </Box>
    </Box>
  );
}

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaSearch, FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { brands, allBrands, productFilters } from "../data/data";

export default function BrandsListing() {
  const [productSearch, setProductSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productFilters.filter((product) =>
    product.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredBrands = allBrands.filter((brand) =>
    brand.label.toLowerCase().includes(brandSearch.toLowerCase()) ||
    brand.displayName.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const topBrands = brands.slice(0, 12);

  const handleProductSelect = (product) => {
    // If clicking the same product, deselect it. Otherwise, select the new one.
    if (selectedProduct === product) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <Box bg="white" minH="100vh" py={8}>
      <Container maxW="container.xl">
        <HStack spacing={2} mb={6} fontSize="sm" color="gray.600">
          <Box
            as={Link}
            to="/"
            color="gray.600"
            _hover={{ color: "red.500", textDecoration: "none" }}
            display="flex"
            alignItems="center"
            gap={1}
            textDecoration="none"
          >
            <FaHome size={14} />
            Home
          </Box>
          <FaChevronRight size={10} />
          <Text color="gray.800" fontWeight="medium">
            Brands
          </Text>
        </HStack>

        <Flex gap={6} align="flex-start">
          <Box
            minW="250px"
            maxW="250px"
            bg="gray.50"
            borderRadius="lg"
            p={4}
            position="sticky"
            top="20px"
            maxH="calc(100vh - 100px)"
            display="flex"
            flexDirection="column"
          >
            <Flex justify="space-between" align="center" mb={3}>
              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="gray.800"
              >
                Products ({productFilters.length})
              </Heading>
              <Text fontSize="xs" color="gray.600" cursor="not-allowed">
                CLEAR PRODUCTS
              </Text>
            </Flex>

            <Box position="relative" mb={3}>
              <Box
                position="absolute"
                left="12px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                zIndex={1}
              >
                <FaSearch size={14} color="gray" />
              </Box>
              <Input
                placeholder="Search Product Here..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                fontSize="sm"
                bg="white"
                pl="36px"
              />
            </Box>

            <Box
              overflowY="auto"
              flex="1"
              pr={2}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "gray.100",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "gray.400",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "gray.500",
                },
              }}
            >
              <VStack align="stretch" spacing={0.5}>
                {filteredProducts.map((product) => (
                  <Box
                    key={product}
                    as="button"
                    color={
                      selectedProduct === product
                        ? "red.500"
                        : "gray.700"
                    }
                    fontWeight={
                      selectedProduct === product
                        ? "semibold"
                        : "normal"
                    }
                    fontSize="xs"
                    py={1}
                    px={2}
                    bg="transparent"
                    border="none"
                    textAlign="left"
                    w="100%"
                    cursor="pointer"
                    _hover={{ color: "red.500" }}
                    _focus={{ outline: "none" }}
                    onClick={() => handleProductSelect(product)}
                  >
                    {product}
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>

          <Box flex="1">
            <Box mb={8}>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="gray.800"
                mb={4}
              >
                Our Top Brands
              </Heading>
              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                }}
                gap={4}
              >
                {topBrands.map((brand, index) => (
                  <Box
                    key={index}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="80px"
                    _hover={{
                      borderColor: "red.500",
                      boxShadow: "md",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.label}
                      maxH="50px"
                      maxW="100px"
                      objectFit="contain"
                      fallback={
                        <Text fontSize="xs" fontWeight="bold" textAlign="center">
                          {brand.label}
                        </Text>
                      }
                    />
                  </Box>
                ))}
              </Grid>
            </Box>

            <Box>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Brands ({allBrands.length})
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Showing All Brands
                </Text>
              </Flex>

              <Box position="relative" mb={6} maxW="400px">
                <Box
                  position="absolute"
                  left="12px"
                  top="50%"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                  zIndex={1}
                >
                  <FaSearch size={14} color="gray" />
                </Box>
                <Input
                  placeholder="Search by Brand Here..."
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  pl="36px"
                />
              </Box>

              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
                  lg: "repeat(7, 1fr)",
                }}
                gap={2}
              >
                {filteredBrands.map((brand, index) => (
                  <Flex
                    key={index}
                    direction="column"
                    align="center"
                    gap={2}
                  >
                    <Box
                      as="button"
                      w={{ base: "90px", md: "100px", lg: "110px" }}
                      h={{ base: "90px", md: "100px", lg: "110px" }}
                      borderRadius="full"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p={2}
                      _hover={{
                        borderColor: "red.500",
                        boxShadow: "md",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.2s"
                      cursor="pointer"
                    >
                      <Image
                        src={brand.src}
                        alt={brand.label}
                        maxH={{ base: "75px", md: "85px", lg: "95px" }}
                        maxW={{ base: "75px", md: "85px", lg: "95px" }}
                        objectFit="contain"
                        fallback={
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            textAlign="center"
                            noOfLines={2}
                          >
                            {brand.label.substring(0, 10)}
                          </Text>
                        }
                      />
                    </Box>
                    <Text
                      fontSize="xs"
                      color="gray.700"
                      textAlign="center"
                      fontWeight="medium"
                      noOfLines={2}
                      maxW="110px"
                    >
                      {brand.displayName}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}


import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaHome, FaChevronRight, FaTruck, FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa";
import { IoPricetag, IoFilterSharp } from "react-icons/io5";
import {
  allCCTVProducts,
  cctvListingCategories,
  productBrands,
} from "../data/data";
import QuoteDrawer from "./QuoteDrawer";

function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CCTV?",
      answer: "CCTV (Closed Circuit Television) is a video surveillance system that uses cameras to monitor and record activities in a specific area. It provides 24/7 surveillance for security and safety purposes.",
    },
    {
      question: "What are the types of CCTV cameras?",
      answer: "There are several types of CCTV cameras including IP cameras, dome cameras, bullet cameras, PTZ cameras, speed dome cameras, and more. Each type serves different surveillance needs.",
    },
    {
      question: "What is the difference between DVR and NVR?",
      answer: "DVR (Digital Video Recorder) works with analog cameras and uses coaxial cables, while NVR (Network Video Recorder) works with IP cameras and uses network cables. NVR systems are more modern and offer better resolution and features.",
    },
    {
      question: "What storage capacity do I need for CCTV?",
      answer: "Storage capacity depends on the number of cameras, resolution, frame rate, and retention period. Generally, you'll need 1-2TB per camera for 30 days of recording at standard settings.",
    },
  ];

  return (
    <>
      <Heading
        as="h2"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color="gray.800"
        mb={4}
      >
        FAQs
      </Heading>
      <Box bg="white" borderRadius="lg" p={6}>
      <VStack align="stretch" spacing={0}>
        {faqs.map((faq, index) => (
          <Box key={index} borderBottom={index < faqs.length - 1 ? "1px solid" : "none"} borderColor="gray.200">
            <Box
              w="100%"
              px={0}
              py={2.5}
              textAlign="left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              fontWeight="normal"
              fontSize="sm"
              color="gray.800"
              cursor="pointer"
            >
              <Box flex="1" fontWeight="medium">
                {faq.question}
              </Box>
              <Box fontSize="md" color="gray.600" ml={2}>
                {openIndex === index ? "−" : "+"}
              </Box>
            </Box>
            {openIndex === index && (
              <Box pb={3} px={0}>
                <Text color="gray.600" fontSize="xs" lineHeight="tall">
                  {faq.answer}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </VStack>
      </Box>
    </>
  );
}

function MobileFiltersSidebar({ isOpen, onClose, categories, selectedCategory, onCategorySelect, onApplyFilter, onClearFilter }) {
  const [expandedCategory, setExpandedCategory] = useState("CCTV");

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1000}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100%"
        maxW="400px"
        h="100vh"
        bg="white"
        zIndex={1001}
        overflowY="auto"
        boxShadow="xl"
      >
        <Box p={4}>
          {/* Header */}
          <Flex justify="space-between" align="center" mb={6}>
            <HStack spacing={2}>
              <Box><FaArrowLeft size={20} color="black" onClick={onClose} /></Box>
              <Heading
                as="h2"
                fontSize="lg"
                fontWeight="bold"
                color="gray.800"
              >
                Filters
              </Heading>
            </HStack>
            <Button
              size="xs"
              color="red.600"
              onClick={onClearFilter}
              bg="transparent"
            >
              CLEAR FILTER
            </Button>
          </Flex>

          {/* Category Section */}
          <Box mb={6}>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading
                as="h3"
                fontSize="md"
                fontWeight="bold"
                color="gray.800"
              >
                Category
              </Heading>
            </Flex>
            
            <VStack align="stretch" spacing={0}>
              {/* Main Category - CCTV */}
              <Box
                p={3}
                cursor="pointer"
                onClick={() => setExpandedCategory(expandedCategory === "CCTV" ? null : "CCTV")}
                bg={expandedCategory === "CCTV" ? "red.50" : "transparent"}
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Flex justify="space-between" align="center">
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color={expandedCategory === "CCTV" ? "red.600" : "gray.800"}
                  >
                    CCTV
                  </Text>
                  {expandedCategory === "CCTV" ? (
                    <FaChevronUp size={14} color="gray.600" />
                  ) : (
                    <FaChevronDown size={14} color="gray.600" />
                  )}
                </Flex>
              </Box>

              {/* Sub-categories */}
              {expandedCategory === "CCTV" && (
                <VStack align="stretch" spacing={0}>
                  {categories.map((category, index) => (
                    <Box
                      key={index}
                      p={3}
                      pl={6}
                      cursor="pointer"
                      onClick={() => onCategorySelect(category.name)}
                      bg={selectedCategory === category.name ? "red.50" : "transparent"}
                      borderBottom="1px solid"
                      borderColor="gray.200"
                    >
                      <Flex justify="space-between" align="center">
                        <Text
                          fontSize="sm"
                          color={selectedCategory === category.name ? "red.600" : "gray.700"}
                          fontWeight={selectedCategory === category.name ? "semibold" : "normal"}
                        >
                          {category.name}
                        </Text>
                        <FaChevronDown size={12} color="gray.500" />
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              )}
            </VStack>
          </Box>
        </Box>

        {/* Apply Filter Button */}
        <Box
          position="sticky"
          bottom={0}
          bg="white"
          borderTop="1px solid"
          borderColor="gray.200"
          p={4}
          boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
        >
          <Button
            w="100%"
            bg="red.600"
            color="white"
            size="lg"
            fontWeight="bold"
            _hover={{ bg: "red.700" }}
            onClick={onApplyFilter}
          >
            APPLY FILTER
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default function CCTVListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedBrand = searchParams.get("brand") || null;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("price-low");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);        
  const productsPerPage = 20;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Reset category when brand changes
  useEffect(() => {
    if (selectedBrand) {
      setSelectedCategory("all");
      setCurrentPage(1);
    }
  }, [selectedBrand]);

  // Filter products by brand first (if brand is selected)
  let brandFilteredProducts = selectedBrand
    ? allCCTVProducts.filter(
        (product) => product.brand && product.brand.toLowerCase() === selectedBrand.toLowerCase()
      )
    : allCCTVProducts;

  // Filter products by category/subCategory
  const filteredProducts =
    selectedCategory === "all"
      ? brandFilteredProducts
      : brandFilteredProducts.filter(
          (product) =>
            product.category === selectedCategory ||
            product.subCategory === selectedCategory
        );

  // Get available categories for the selected brand
  const getAvailableCategories = () => {
    if (!selectedBrand) return cctvListingCategories;
    
    const brandProducts = allCCTVProducts.filter(
      (product) => product.brand && product.brand.toLowerCase() === selectedBrand.toLowerCase()
    );
    
    const categorySet = new Set();
    brandProducts.forEach((product) => {
      if (product.category) categorySet.add(product.category);
      if (product.subCategory) categorySet.add(product.subCategory);
    });
    
    return cctvListingCategories.filter((cat) => categorySet.has(cat.name));
  };

  const availableCategories = getAvailableCategories();

  // Calculate product count for each category
  const getCategoryProductCount = (categoryName) => {
    return brandFilteredProducts.filter(
      (product) =>
        product.category === categoryName || product.subCategory === categoryName
    ).length;
  };

        const sortedProducts = [...(filteredProducts || [])].sort((a, b) => {
          if (!a || !b) return 0;
        
          switch (sortBy) {
            case "price-low":
              return (a.price ?? 0) - (b.price ?? 0);
            case "price-high":
              return (b.price ?? 0) - (a.price ?? 0);
            case "name-asc":
              return (a.name ?? "").localeCompare(b.name ?? "");
            case "name-desc":
              return (b.name ?? "").localeCompare(a.name ?? "");
            default:
              return 0;
          }
        });

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = Array.isArray(sortedProducts) && sortedProducts.length ? sortedProducts.slice(startIndex, endIndex).filter(Boolean): [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Get CCTV brands
  const cctvBrands = productBrands.filter(brand => brand.category === "CCTV");

  return (
    <Box bg="rgb(239,239,244)" minH="100vh" py={8}>
      <Container maxW="container.xl">
        {/* Breadcrumb */}
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
            CCTV
          </Text>
        </HStack>

        <Flex gap={6} align="flex-start">
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <Box minW="250px" maxW="250px" display={{ base: "none", lg: "block" }}>
            {/* Delivery Block */}
            <Box
              bg="rgb(61,61,60)"
              borderRadius="lg"
              p={4}
              mb={4}
              position="sticky"
              top="20px"
            >
              <HStack spacing={3} align="flex-start">
                <Box color="white" flexShrink={0}>
                  <FaTruck size={24} />
                </Box>
                <Box>
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    color="white"
                    mb={1}
                  >
                    Estimated 7 Day Delivery
                  </Text>
                  <Text
                    fontSize="xs"
                    color="white"
                    opacity={0.9}
                  >
                    Times may vary by shipping location*
                  </Text>
                </Box>
              </HStack>
            </Box>

            {/* Categories */}
            <Box
              bg="gray.50"
              borderRadius="lg"
              p={4}
              position="sticky"
              top="140px"
              maxH="calc(100vh - 160px)"
              display="flex"
              flexDirection="column"
            >
            <Heading
              as="h3"
              fontSize="sm"
              fontWeight="bold"
              color="gray.800"
              mb={3}
            >
              {selectedBrand ? `${selectedBrand} Categories` : `CCTV (${availableCategories.length} Categories)`}
            </Heading>
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
                {availableCategories.slice(0, 9).map((category, index) => {
                  const productCount = getCategoryProductCount(category.name);
                  return (
                    <Box
                      key={index}
                      as="button"
                      color={
                        selectedCategory === category.name
                          ? "red.500"
                          : "gray.700"
                      }
                      fontWeight={
                        selectedCategory === category.name
                          ? "semibold"
                          : "normal"
                      }
                      fontSize="xs"
                      py={2}
                      px={2}
                      bg="transparent"
                      border="none"
                      textAlign="left"
                      w="100%"
                      cursor="pointer"
                      _hover={{ color: "red.500", bg: "gray.50" }}
                      _focus={{ outline: "none" }}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <Flex justify="space-between" align="center" w="100%">
                        <Text
                          fontSize="sm"
                          fontWeight={
                            selectedCategory === category.name
                              ? "semibold"
                              : "medium"
                          }
                          flex="1"
                          textAlign="left"
                        >
                          {category.name}
                        </Text>
                        <Text
                          fontSize="xs"
                          color={
                            selectedCategory === category.name
                              ? "red.500"
                              : "gray.500"
                          }
                          fontWeight="normal"
                          ml={2}
                        >
                          ({productCount})
                        </Text>
                      </Flex>
                    </Box>
                  );
                })}
              </VStack>
            </Box>
          </Box>
          </Box>

          {/* Main Content */}
          <Box flex="1">
            {/* Mobile Filters Button */}
            <Box
              display={{ base: "flex", lg: "none" }}
              mb={4}
              p={2.5}
              px={3}
              bg="white"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              cursor="pointer"
              onClick={() => setIsMobileFiltersOpen(true)}
              alignItems="center"
              gap={2}
              w="fit-content"
            >
              <Text fontSize="sm" fontWeight="medium" color="gray.800">
                Filters
              </Text>
              <IoFilterSharp size={18} color="black" />
            </Box>

            {/* Header Section */}
            <Box mb={6}>
              <Heading
                as="h1"
                fontSize={{ base: "lg", md: "3xl" }}
                fontWeight="bold"
                color="gray.800"
                mb={4}
              >
                {selectedBrand ? `${selectedBrand} CCTV Products` : "CCTV"}
              </Heading>
              <Text color="gray.600" fontSize="xs" lineHeight="tall" mb={4}>
                CCTV systems have become an inevitable investment these days. Every space, whether industrial, commercial, or domestic, requires a video monitoring system for 24/7 surveillance. However, sourcing the complete CCTV setup is a complex process that requires careful evaluation of every component and its compatibility as a single system. For which you have to visit multiple vendors, manage different invoices, and go through a hefty installation process. This is where DigiMRO comes into play, a leading distributor of ELV systems. We are your one-stop solution to source all the essential components you need to establish a high-security surveillance zone. 

Get every component from high-resolution cameras to DVR, cables, storage devices, connectors, and power supply, all available at reasonable prices. To ensure top quality, we directly source components from reputable brands, including Honeywell, Bosch, Western Digital, System Sensor, Impact, Protek, and more. Whether you are a reseller, distributor, or system integrator, we can offer a reliable CCTV solutions for your specific needs.
              </Text>
              
              {/* Products Count and Sort */}
              <Flex
                justify="space-between"
                align="center"
                mb={4}
                flexWrap="wrap"
                gap={4}
              >
                <Text fontSize="sm" color="gray.600">
                  Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)}{" "}
                  out of {sortedProducts.length} products
                </Text>
                <HStack spacing={2}>
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">Sort By:</Text>
                  <Box
                    as="select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="white"
                    color="black"
                    px={3}
                    py={2}
                    fontSize="sm"
                    cursor="pointer"
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      outline: "none",
                    }}
                    style={{
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 8px center',
                      backgroundSize: '12px',
                      paddingRight: '28px',
                    }}
                  >
                    <option value="price-low">Price - Low To High</option>
                    <option value="price-high">Price - High To Low</option>
                  </Box>
                </HStack>
              </Flex>
            </Box>

            {/* Products Header */}
            <Box mb={4}>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="gray.800"
              >
                Products ({sortedProducts.length})
              </Heading>
            </Box>

            {/* Products Grid */}
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              mb={8}
            >
              {displayedProducts.map((product) => (
                <Box
                  key={product.id}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.200"
                  display="flex"
                  flexDirection="column"
                  _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <Box
                    w="100%"
                    h="160px"
                    bg="gray.50"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Image
                      src={product.image || undefined}
                      alt={product.name}
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
                          <Text color="gray.500" fontSize="sm">
                            No Image
                          </Text>
                        </Box>
                      }
                    />
                  </Box>
                  <Box p={3} flex="1" display="flex" flexDirection="column">
                    <Text
                      fontSize="xs"
                      color="gray.600"
                      mb={1}
                      fontWeight="normal"
                    >
                      By: {product.brand}
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      color="gray.800"
                      mb={1.5}
                      noOfLines={2}
                      flex="1"
                      lineHeight="shorter"
                    >
                      {product.name}
                    </Text>
                    {product.modelNumber && (
                      <Text fontSize="xs" color="gray.500" mb={2}>
                        {product.modelNumber}
                      </Text>
                    )}
                    <Button
                      bg="red.600"
                      color="white"
                      size="sm"
                      w="100%"
                      fontWeight="medium"
                      fontSize="xs"
                      py={1.5}
                      h="auto"
                      _hover={{ bg: "red.700" }}
                      mt="auto"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsDrawerOpen(true);
                      }}
                    >
                      Request Quote
                    </Button>
                  </Box>
                </Box>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Flex justify="center" align="center" gap={1} flexWrap="wrap" mb={8}>
                {currentPage > 1 && (
                  <Button
                    size="sm"
                    bg="transparent"
                    color="gray.700"
                    onClick={() => handlePageChange(currentPage - 1)}
                    _hover={{
                      bg: "transparent",
                      color: "gray.800",
                    }}
                    minW="auto"
                    h="32px"
                    px={3}
                    fontWeight="normal"
                    fontSize="sm"
                    border="none"
                    mr={2}
                  >
                    Previous
                  </Button>
                )}
                {renderPagination().map((page, index) =>
                  page === "..." ? (
                    <Text key={`ellipsis-${index}`} px={2} color="gray.700" fontSize="sm">
                      ...
                    </Text>
                  ) : (
                    <Button
                      key={page}
                      size="sm"
                      bg={currentPage === page ? "gray.700" : "transparent"}
                      color={currentPage === page ? "white" : "gray.700"}
                      onClick={() => handlePageChange(page)}
                      _hover={{
                        bg: currentPage === page ? "gray.700" : "transparent",
                        color: currentPage === page ? "white" : "gray.800",
                      }}
                      w="32px"
                      h="32px"
                      minW="32px"
                      borderRadius="50%"
                      fontWeight="normal"
                      fontSize="sm"
                      border="none"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      {page}
                    </Button>
                  )
                )}
                {currentPage < totalPages && (
                  <Button
                    size="sm"
                    bg="transparent"
                    color="gray.700"
                    onClick={() => handlePageChange(currentPage + 1)}
                    _hover={{
                      bg: "transparent",
                      color: "gray.800",
                    }}
                    minW="auto"
                    h="32px"
                    px={3}
                    fontWeight="normal"
                    fontSize="sm"
                    border="none"
                    ml={2}
                  >
                    Next
                  </Button>
                )}
              </Flex>
            )}

          </Box>
        </Flex>
            {/* Shop By Brands Section */}
            <Box mt={8} mb={8} bg="rgb(255,254,254)" p={6} borderRadius="lg">
              <HStack spacing={2} mb={4}>
                <IoPricetag size={20} color="black" />
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Shop By Brands
                </Heading>
              </HStack>
              <Flex gap={3} flexWrap="wrap">
                {cctvBrands.map((brand, index) => (
                  <Box
                    key={index}
                    as="a"
                    href="#"
                    px={4}
                    py={2}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    _hover={{ 
                      borderColor: "red.600", 
                      color: "red.600",
                      fontWeight: "bold",
                      boxShadow: "md",
                      textDecoration: "none" 
                    }}
                    transition="all 0.2s"
                    display="inline-block"
                    cursor="pointer"
                    fontSize="xs"
                    fontWeight="medium"
                    color="gray.700"
                  >
                    {brand.name}
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* FAQs Section */}
            <Box mb={8}>
              <FAQsSection />
            </Box>

            {/* Content Sections */}
            <Box mb={8}>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={4}
              >
                Buy CCTV Solutions and Components in Bulk
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={6}>
                CCTV security systems come with modern features that help monitor your place and protect it all the time. These features include night vision, 4K recording, remote functions, app support, and much more. They make it very easy for owners to monitor their property day and night from anywhere in the world. On our platform, you can find a vast collection of security systems from popular brands that deliver a better user experience.
              </Text>

              <Heading
                as="h3"
                fontSize="md"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Who We Sell To
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                We aim towards simplifying the sourcing needs for bulk buyers, including system integrators, resellers, or distributors, by eliminating the need for going to multiple vendors. We cater to the specific needs of professional buyers looking for the whole setup of surveillance security systems.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                System Integrators
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                We serve integrators looking for the complete hardware and software components in one place, for their clients to deliver an advanced functional setup. You will get to experience a first-ever hassle-free bulk buying experience in one place.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Resellers
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={6}>
                Resellers can source multi-brand CCTV components from our platform at competitive pricing to meet the market demand. Our components are organized by the experts, making it easy for resellers to source compatible hardware. They cannot only purchase complete kits but also specific components in bulk quantities to create a robust inventory.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Our Top CCTV Security Brands
              </Heading>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Honeywell
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Honeywell is a leading brand that is popular for making a complete range of CCTV security systems and components. Their security systems are in high demand because of their amazing picture quality that shows every small detail in footage.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Bosch
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Bosch is another reputed brand which deals in a wide range of power tools, manufacturing products, and power tools. They specialize in making a reliable collection of CCTV systems for enhanced surveillance security. Their products are very well known for their durability and longer lifespan.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Western Digital
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Western Digital is a household brand that even children know about. They deliver a complete range of CCTV systems with exclusive expertise in storage solutions. With decades of presence in the market, everyone knows that their hard disks are very robust and reliable.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                System Sensor
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                System Sensor is a CCTV system manufacturing company that is popular for offering advanced features in its products. They have upgraded their products with the help of modern technology to deliver better results. For instance, their surveillance system is completely remotely controlled from anywhere using a paired device.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Impact
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={6}>
                Impact is a sub-brand of Honeywell, which deals in electronic devices like fire safety systems, CCTV surveillance systems, building management systems, and more. A unique benefit which makes their products stand out from other brand products is their incredible build quality. Their products can function efficiently for long hours without much stress or maintenance needs.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                One Stop Shop for Your Surveillance Needs
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Get all the components required to set up a high-security CCTV surveillance system in one place:
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                CCTV Cameras
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                We have a complete range of CCTV cameras, including IP, Dome, Bullet, PTZ, Wi-Fi, SIM, etc., suitable to monitor every space. Sourced from the top brands, these cameras feature high resolution images, night vision, app control, motor detection, face recognition, and many more. The company uses durable materials to manufacture these cameras, especially the dome cameras which are installed outdoors.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                NVRs & DVRs
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Get high-quality NVRs & DVRs with multi-camera support and an easy-to-use interface. It works as a central hub for all the connected cameras and hosts a storage device with power supply. These devices can be used to stream recordings, configure cameras, and connect different devices to monitor your place anytime you need.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Hard Drives
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Buy specialized hard drives as a cost-effective storage solution to secure your recordings. We offer the most reliable storage solutions for your cameras to record and store surveillance footage, including high speed hard drives with excellent write and read speed. You can choose 8TB, 16TB, or 20TB storage drives as per your surveillance requirements.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Power Supply
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Get high-efficiency power supplies for your CCTV surveillance system to protect it from voltage fluctuations and power outages. These devices are programmed to carefully analyze and send power within safe limits to all connected cameras.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Cables
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={6}>
                Choose high-quality and durable transmission cables to connect your cameras. We offer coaxial cables for analog CCTV cameras and Ethernet cables for IP cameras. These cables are designed using high-grade materials to enhance their lifespan.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Top Reasons to Buy CCTV Solutions in Bulk Form DigiMRO
              </Heading>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Diverse Product Range from Multiple Brands
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Get reliable surveillance systems and components from the most trusted brands like Impact, Honeywell, System Sensor, and more for high-quality and durable products. These brands encourage customers to make smart investment decisions and take care of their specific security requirements. You can source anything from complete CCTV combo kits to components of a specific serial number. We deliver everything at reasonable prices.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Genuine Products, Warranty, and GST Invoices
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Our complete inventory of CCTV products is sourced directly from trusted manufacturers, so that our customers can purchase with confidence. You will get GST invoices, genuine quality, and brand warranty for every purchase.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Experts Support
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Our highly trained professionals will help you source the right products and components, check product compatibility, prepare purchase estimates, and more.
              </Text>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={2}
                mt={4}
              >
                Fast Delivery and Technical Support
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Once we have received your order, it will be dispatched within the promised timeline. We ensure that all the products arrive safely with a zero-damage guarantee of delivery. Moreover, we also offer complete technical support until the system is ready for optimal functioning.
              </Text>
            </Box>
      </Container>

      {/* Mobile Filters Sidebar */}
      <MobileFiltersSidebar
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        categories={availableCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        onApplyFilter={() => {
          setIsMobileFiltersOpen(false);
        }}
        onClearFilter={() => {
          setSelectedCategory("all");
        }}
      />

      {/* Quote Drawer */}
      <QuoteDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />
    </Box>
  );
}

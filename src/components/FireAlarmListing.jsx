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
  allFireAlarmProducts,
  fireAlarmListingCategories,
  fireAlarmBrands,
} from "../data/data";
import QuoteDrawer from "./QuoteDrawer";

function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a fire alarm?",
      answer: "A fire alarm is a device that alerts the people and emergency services about fire related hazards. It gets activated when it detects smoke and heat and generates a loud siren sound for occupants of a building to evacuate immediately. This device combines several sensors like smoke detector, heat detector, and more.",
    },
    {
      question: "What are fire alarm systems used for?",
      answer: "Fire alarm systems are used to detect fire outbreaks early and alert building occupants and emergency services. They help in quick evacuation and fire suppression to minimize damage and save lives.",
    },
    {
      question: "How does the fire alarm work?",
      answer: "Fire alarm systems work through four main steps: Detection (sensors detect smoke/heat), Communication (signals sent to control panel), Notifying (alarms and sirens activated), and Action (suppression systems activated and occupants notified).",
    },
    {
      question: "What are the three types of fire alarms?",
      answer: "The main types of fire alarm systems are: Conventional systems (cost-effective, suitable for smaller buildings), Addressable systems (provide precise location information, ideal for larger installations), and Hybrid systems (combine both conventional and addressable features).",
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
  const [expandedCategory, setExpandedCategory] = useState("Fire Alarm");

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
              {/* Main Category - Fire Alarm */}
              <Box
                p={3}
                cursor="pointer"
                onClick={() => setExpandedCategory(expandedCategory === "Fire Alarm" ? null : "Fire Alarm")}
                bg={expandedCategory === "Fire Alarm" ? "red.50" : "transparent"}
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Flex justify="space-between" align="center">
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color={expandedCategory === "Fire Alarm" ? "red.600" : "gray.800"}
                  >
                    Fire Alarm
                  </Text>
                  {expandedCategory === "Fire Alarm" ? (
                    <FaChevronUp size={14} color="gray.600" />
                  ) : (
                    <FaChevronDown size={14} color="gray.600" />
                  )}
                </Flex>
              </Box>

              {/* Sub-categories */}
              {expandedCategory === "Fire Alarm" && (
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

export default function FireAlarmListing() {
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
    ? allFireAlarmProducts.filter(
        (product) => product.brand && product.brand.toLowerCase() === selectedBrand.toLowerCase()
      )
    : allFireAlarmProducts;

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
    if (!selectedBrand) return fireAlarmListingCategories;
    
    const brandProducts = allFireAlarmProducts.filter(
      (product) => product.brand && product.brand.toLowerCase() === selectedBrand.toLowerCase()
    );
    
    const categorySet = new Set();
    brandProducts.forEach((product) => {
      if (product.category) categorySet.add(product.category);
      if (product.subCategory) categorySet.add(product.subCategory);
    });
    
    return fireAlarmListingCategories.filter((cat) => categorySet.has(cat.name));
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
            Fire Alarm
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
              {selectedBrand ? `${selectedBrand} Categories` : `Fire Alarm (${availableCategories.length} Categories)`}
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
                {selectedBrand ? `${selectedBrand} Fire Alarm Products` : "Fire Alarm"}
              </Heading>
              <Text color="gray.600" fontSize="xs" lineHeight="tall" mb={4}>
                A fire alarm system is a collection of devices installed in a
                building or society, or an industrial plant, to detect a fire
                outbreak and alert all the occupants about it so that immediate
                measures can be taken. The system uses detection devices like
                smoke detectors and heat detectors to judge if a fire has started
                and communicate it to the main control panel. The panel uses a
                series of notification devices to trigger alarms like sirens and
                mobile alerts. There are various types of fire detection and notification
                devices with smart features that help to suppress the fire
                instantly before it causes any damage. There are even detectors
                that can transmit the exact location where a fire has broken out.
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
                {fireAlarmBrands.map((brand, index) => (
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
                    {brand.name} Fire Alarm
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
                Source Reliable and High-Efficiency Fire Alarm Systems in Bulk Quantity at Best Prices
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={6}>
                Fire alarm systems help by detecting the fire signal early, so it could cause major destruction. They use a combination of various devices that detect these signals and help to suppress the fire like a water sprinkler. Both the detecting and safety devices are connected to the main control panel, which is responsible for effective communication between them. A fire alarm system can locate the exact spot where the fire has originated through addressable detection devices. Whereas the conventional devices are easier to install and less expensive.
              </Text>

              <Heading
                as="h3"
                fontSize="md"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                How Does the Fire Alarm System Work?
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                The working of a fire alarm system can be explained in four major steps:
              </Text>
              <VStack align="stretch" spacing={3} mb={6}>
                  <Box>
                    <Text color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Detection:</Text>  When a fire breaks out, the detectors immediately sense the signals, like heat or smoke.
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Communication:</Text> The detectors instantly send the positive fire signal to the main control panel.
                    </Text>
                  </Box>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Notifying:</Text>  After receiving the fire signals, the control panel sounds the sirens and other audible devices.
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Action:</Text> Another command control panel sends to the action device, like water sprinklers, and notifies the occupants to leave the building.
                    </Text>
                  </Box>
              </VStack>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Major Components of a Fire Alarm System
              </Heading>
              <VStack align="stretch" spacing={3} mb={6}>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Fire Alarm Control Panel:</Text> It receives the signal from the devices and activates the alarms or sirens.
                    </Text>
                  </Box>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Detectors:</Text> Fire alarm systems have different types of detectors that catch the very first signs of fire, including smoke and heat, and convey it to the control panel.
                    </Text>
                  </Box>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Alarms:</Text> There are different types of fire alarms, including audible and visual, that alert the building occupants and emergency services to fire.
                    </Text>
                  </Box>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Power Supply:</Text> These devices transmit safe levels of electricity to power the various devices, including detectors and alarms.
                    </Text>
                  </Box>
                  <Box>
                    <Text  color="gray.800" mb={1} fontSize="sm">
                      <Text as="span" fontWeight="bold">Integrated Systems:</Text> There are various other fire suppression systems that are connected to fire alarm systems to suppress the fire instantly, like water sprinklers and HVAC systems.
                    </Text>
                  </Box>
              </VStack>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Reasons Why Fire Alarms are So Reliable for Every Space
              </Heading>
              <VStack align="stretch" spacing={4} mb={6}>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={2} fontSize="sm">
                    Early Fire Detection
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="tall">
                    Fire alarm systems use detectors that help detect the fire threat as soon as the smoke and heat reach them. The alarm gets triggered, and people can evacuate the building as early as possible to save their lives. Now, fire alarms use various types of detectors, and out of all, the addressable detectors that even send the exact location of the fire.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={2} fontSize="sm">
                    Suppressing Damage
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="tall">
                    Fire alarm systems have control panels that are smartly designed to activate the fire-suppressing systems, like water sprinklers. This helps control the fire quickly as soon as it breaks out which prevents damage to the property and saves valuable items.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={2} fontSize="sm">
                    Immediate Response from Emergency Services
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="tall">
                    Fire alarm systems are also connected to notification devices that alert emergency services about the fire breakout. It not only helps people evacuate the building, but also notifies the services to get professional help, in case the fire suppression system cannot control the breakout.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={2} fontSize="sm">
                    Discounts on Insurance
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="tall">
                    Many insurance companies offer lower premium rates when they see you have reliable fire alarm systems installed on your property. They consider you a low-risk customer who has minimal chances of claiming the insurance.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={2} fontSize="sm">
                    Help Comply Legally
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="tall">
                    In many facilities, fire alarm systems are mandatory to install for the safety of people. Installing a reliable system that has the ability to suppress the fire helps owners comply with rules and regulations directed by the government.
                  </Text>
                </Box>
              </VStack>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Things to Consider When You Source Fire Alarm Systems in Bulk
              </Heading>
              <VStack align="stretch" spacing={3} mb={6}>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={1} fontSize="sm">
                    Check Quality Standards
                  </Text>
                  <Text color="gray.600" fontSize="xs">
                    Check whether the fire alarm system is certified by the quality standards required for large buildings and spaces. You can look for these certifications, including UL, EN, ISI, or BIS.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={1} fontSize="sm">
                    Type of Fire Alarm System
                  </Text>
                  <Text color="gray.600" fontSize="xs">
                    There are various types of devices used in fire alarm systems that affect their functioning. For instance, if you are using conventional detectors, then you cannot exactly locate the spot where the fire has broken out. However, addressable detectors have a unique ID, which the control panel can easily locate and convey the exact location of the fire.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={1} fontSize="sm">
                    Source Compatible Devices and Parts
                  </Text>
                  <Text color="gray.600" fontSize="xs">
                    Make sure that all the devices and parts of the fire alarm system are compatible with each other so that you don't have to replace them later. You should have reliable control panels that easily connect with detectors and alarms.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={1} fontSize="sm">
                    Scalable
                  </Text>
                  <Text color="gray.600" fontSize="xs">
                    When you source the complete setup of fire alarm systems. You should install them zone-wise and ensure that they are compatible with other common devices in the market, so that if you expand your business or add floors to the building, the system can expand with it.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="rgb(14,71,96)" mb={1} fontSize="sm">
                    Check Total Cost
                  </Text>
                  <Text color="gray.600" fontSize="xs">
                    Consider the complete cost of a fire alarm system, which will also include purchase cost, installation charges, and maintenance. This will provide you with more clarification about how much you will be spending at the time of purchase and in the coming years.
                  </Text>
                </Box>
              </VStack>

              <Heading
                as="h3"
                fontSize="sm"
                fontWeight="bold"
                color="rgb(14,71,96)"
                mb={3}
                mt={6}
              >
                Why Should You Source Fire Alarms and Its Components in Bulk from DigiMRO?
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="tall" mb={4}>
                Sourcing fire alarms in bulk from DigiMRO is not just a purchase but a smart investment choice. We offer quality and cost savings in one place. We have partnered with trusted brands like Bosch, Agni, Apollo, and ABES. These brands offer certified and genuine products that meet the safety standards. Buying in bulk from DigiMRO means you will get better prices and a hassle-free purchasing experience. With DigiMRO, you can be confident that your bulk fire alarm purchases are safe and backed by reliable services for long-term benefits.
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

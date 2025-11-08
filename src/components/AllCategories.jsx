import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { allCategoriesData } from "../data/data";

function CategoryItem({ category, level = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = category.children && category.children.length > 0;
  const isMainCategory = level === 0;
  const isSubCategory = level === 1;

  if (isMainCategory) {
    return (
      <Box 
        mb={6}
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Category - Bold Heading with Hover Effect */}
        <Box
          as="h4"
          fontSize="sm"
          fontWeight="bold"
          color="red.600"
          mb={hasChildren ? 3 : 0}
          position="relative"
          display="inline-block"
          cursor="pointer"
          pb={1}
          _hover={{
            borderBottom: "2px solid",
            borderColor: "red.600",
          }}
        >
          {category.name}
        </Box>
        
        {/* Sub-categories - Hidden by default, shown on hover */}
        {hasChildren && (
          <Box 
            pl={0} 
            mt={2}
            opacity={isHovered ? 1 : 0}
            maxH={isHovered ? "5000px" : "0"}
            overflow="hidden"
            transition="opacity 0.3s ease, max-height 0.3s ease"
            pointerEvents={isHovered ? "auto" : "none"}
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {category.children.map((child, index) => (
              <CategoryItem key={index} category={child} level={1} />
            ))}
          </Box>
        )}
      </Box>
    );
  }

  if (isSubCategory) {
    const hasGrandChildren = category.children && category.children.length > 0;
    
    return (
      <Box mb={3}>
        <Box
          px={2}
          py={1}
          borderRadius="sm"
          cursor="pointer"
          transition="background-color 0.2s"
          _hover={{
            bg: "gray.100",
          }}
        >
          <Text
            fontSize="xs"
            fontWeight="normal"
            color="gray.800"
            as="span"
          >
            {category.name}
            {hasGrandChildren && "  "}
          </Text>
          {/* Child items listed inline */}
          {hasGrandChildren && (
            <>
              {category.children.map((grandChild, idx) => (
                <Text
                  key={idx}
                  as="span"
                  fontSize="xs"
                  color="gray.800"
                  fontWeight="normal"
                >
                  {grandChild.name}
                  {idx < category.children.length - 1 && " "}
                </Text>
              ))}
            </>
          )}
        </Box>
      </Box>
    );
  }

  // For deeper levels (shouldn't happen based on data structure)
  return (
    <Box mb={1} pl={4}>
      <Text fontSize="xs" color="gray.800">
        {category.name}
      </Text>
    </Box>
  );
}

export default function AllCategories() {
  // Split categories into 3 columns
  const categoriesPerColumn = Math.ceil(allCategoriesData.length / 3);
  const column1 = allCategoriesData.slice(0, categoriesPerColumn);
  const column2 = allCategoriesData.slice(categoriesPerColumn, categoriesPerColumn * 2);
  const column3 = allCategoriesData.slice(categoriesPerColumn * 2);

  return (
    <Box bg="rgb(239,239,244)" minH="100vh">
      {/* Dark Red Header */}
      <Box bg="red.800" w="100%" py={6}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <Heading
            as="h1"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            All Categories
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.xl" px={{ base: 4, md: 6 }} py={8}>
        {/* Breadcrumb */}
        <HStack spacing={2} mb={6} fontSize="sm" color="gray.600">
          <ChakraLink
            as={Link}
            to="/"
            color="gray.600"
            _hover={{ color: "red.500", textDecoration: "none" }}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <FaHome size={14} />
            Home
          </ChakraLink>
          <FaChevronRight size={10} />
          <Text color="gray.800" fontWeight="medium">
            All Categories
          </Text>
        </HStack>

        {/* Categories List - Multi Column Grid */}
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          p={6}
          mb={8}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
          >
            {/* Column 1 */}
            <Box>
              {column1.map((category, index) => (
                <CategoryItem key={index} category={category} level={0} />
              ))}
            </Box>

            {/* Column 2 */}
            <Box>
              {column2.map((category, index) => (
                <CategoryItem key={index} category={category} level={0} />
              ))}
            </Box>

            {/* Column 3 */}
            <Box>
              {column3.map((category, index) => (
                <CategoryItem key={index} category={category} level={0} />
              ))}
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

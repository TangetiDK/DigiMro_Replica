import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Link as ChakraLink,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { FaChevronRight, FaPlay, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { blogPosts, knowledgeHubVideos, blogCategories } from "../data/data";

export default function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam ? parseInt(tabParam) : 0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(6);
  const [videoDisplayCount, setVideoDisplayCount] = useState(6);

  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam !== null) {
      const tabValue = parseInt(tabParam);
      if (tabValue === 0 || tabValue === 1) {
        setActiveTab(tabValue);
      }
    }
  }, [tabParam]);

  const filteredBlogPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const filteredVideos =
    selectedCategory === "all"
      ? knowledgeHubVideos
      : knowledgeHubVideos.filter(
          (video) => video.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const displayedBlogs = filteredBlogPosts.slice(0, displayCount);
  const displayedVideos = filteredVideos.slice(0, videoDisplayCount);

  const handleShowMore = () => {
    if (activeTab === 0) {
      setDisplayCount(displayCount + 6);
    } else {
      setVideoDisplayCount(videoDisplayCount + 6);
    }
  };

  const hasMoreBlogs = displayCount < filteredBlogPosts.length;
  const hasMoreVideos = videoDisplayCount < filteredVideos.length;

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.xl">
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
            Blogs
          </Text>
        </HStack>

        <Flex gap={6} align="flex-start">
          <Box
            minW="200px"
            bg="gray.200"
            borderRadius="lg"
            p={4}
            position="sticky"
            top="20px"
          >
            <Heading
              as="h3"
              fontSize="md"
              fontWeight="bold"
              color="gray.800"
              mb={3}
            >
              Categories
            </Heading>
            <VStack align="stretch" spacing={0.5}>
              {blogCategories.map((category) => (
                <Box
                  key={category.value}
                  as="button"
                  color={
                    selectedCategory === category.value ? "red.500" : "gray.700"
                  }
                  fontWeight={
                    selectedCategory === category.value ? "semibold" : "normal"
                  }
                  fontSize="xs"
                  py={1}
                  px={2}
                  bg="transparent"
                  border="none"
                  outline="none"
                  textAlign="left"
                  w="100%"
                  cursor="pointer"
                  _hover={{ color: "red.500" }}
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category.value);
                    setDisplayCount(6);
                    setVideoDisplayCount(6);
                  }}
                >
                  {category.label}
                </Box>
              ))}
            </VStack>
          </Box>

          <Box flex="1">
            <Flex justify="flex-start" mb={6}>
              <HStack spacing={0} border="1px solid" borderColor="gray.300" borderRadius="md" overflow="hidden">
                <Button
                  bg={activeTab === 0 ? "red.500" : "white"}
                  color={activeTab === 0 ? "white" : "gray.800"}
                  fontSize="md"
                  fontWeight="semibold"
                  px={8}
                  py={3}
                  border="none"
                  borderRadius="none"
                  _hover={{
                    bg: activeTab === 0 ? "red.600" : "gray.50",
                  }}
                  onClick={() => {
                    setActiveTab(0);
                    setDisplayCount(6);
                    setVideoDisplayCount(6);
                    setSearchParams({ tab: '0' });
                  }}
                >
                  Our Blogs
                </Button>
                <Button
                  bg={activeTab === 1 ? "red.500" : "white"}
                  color={activeTab === 1 ? "white" : "gray.800"}
                  fontSize="md"
                  fontWeight="semibold"
                  px={8}
                  py={3}
                  border="none"
                  borderRadius="none"
                  _hover={{
                    bg: activeTab === 1 ? "red.600" : "gray.50",
                  }}
                  onClick={() => {
                    setActiveTab(1);
                    setDisplayCount(6);
                    setVideoDisplayCount(6);
                    setSearchParams({ tab: '1' });
                  }}
                >
                  Knowledge Hub
                </Button>
              </HStack>
            </Flex>
            {activeTab === 0 ? (
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
              >
                {displayedBlogs.map((post, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    display="flex"
                    flexDirection="column"
                    _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    <Box
                      w="100%"
                      h="200px"
                      bg="gray.200"
                      position="relative"
                      overflow="hidden"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        fallback={
                          <Box
                            bg="gray.300"
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

                    <Box p={4} flex="1" display="flex" flexDirection="column">
                      <HStack spacing={2} mb={3} align="center" flexWrap="wrap">
                        <Box
                          bg="pink.100"
                          px={2}
                          py={1}
                          borderRadius="sm"
                          display="inline-block"
                        >
                          <Text fontSize="xs" color="gray.700" fontWeight="medium">
                            {post.category}
                          </Text>
                        </Box>
                        <Text fontSize="xs" color="gray.600">
                          {post.date}
                        </Text>
                      </HStack>

                      {/* Title */}
                      <Heading
                        as="h3"
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.800"
                        mb={3}
                        lineHeight="tall"
                        noOfLines={2}
                      >
                        {post.title}
                      </Heading>

                      {post.excerpt && (
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          mb={4}
                          lineHeight="tall"
                          noOfLines={3}
                        >
                          {post.excerpt}
                        </Text>
                      )}

                      <ChakraLink
                        as={Link}
                        to={post.link}
                        color="blue.500"
                        fontSize="sm"
                        fontWeight="medium"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        textDecoration="none"
                        _hover={{ color: "blue.500" }}
                        transition="all 0.2s"
                        mt="auto"
                      >
                        Read More <FaChevronRight size={12} />
                      </ChakraLink>
                    </Box>
                  </Box>
                ))}
              </Grid>
            ) : (
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
              >
                {displayedVideos.map((video, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    display="flex"
                    flexDirection="column"
                    cursor="pointer"
                    _hover={{
                      boxShadow: "lg",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    <Box
                      w="100%"
                      h="200px"
                      bg="gray.200"
                      position="relative"
                      overflow="hidden"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        fallback={
                          <Box
                            bg="gray.300"
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
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="60px"
                        h="60px"
                        bg="white"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="lg"
                        opacity={0.9}
                        _hover={{
                          opacity: 1,
                          transform: "translate(-50%, -50%) scale(1.1)",
                          transition: "all 0.2s",
                        }}
                      >
                        <FaPlay size={24} color="#DC2626" style={{ marginLeft: "4px" }} />
                      </Box>
                    </Box>

                    <Box p={4} flex="1" display="flex" flexDirection="column">
                      <HStack spacing={2} mb={3} align="center" flexWrap="wrap">
                        <Box
                          bg="red.100"
                          px={2}
                          py={1}
                          borderRadius="sm"
                          display="inline-block"
                        >
                          <Text fontSize="xs" color="gray.700" fontWeight="medium">
                            {video.category}
                          </Text>
                        </Box>
                      </HStack>

                      {/* Title */}
                      <Heading
                        as="h3"
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.800"
                        mb={4}
                        lineHeight="tall"
                        noOfLines={3}
                      >
                        {video.title}
                      </Heading>

                      <ChakraLink
                        as={Link}
                        to={video.videoLink}
                        color="red.500"
                        fontSize="sm"
                        fontWeight="medium"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        textDecoration="none"
                        _hover={{ color: "red.500" }}
                        transition="all 0.2s"
                        mt="auto"
                      >
                        Watch Video <FaChevronRight size={12} />
                      </ChakraLink>
                    </Box>
                  </Box>
                ))}
              </Grid>
            )}

            {(activeTab === 0 ? hasMoreBlogs : hasMoreVideos) && (
              <Flex justify="center" mt={8}>
                <Button
                  bg="red.500"
                  color="white"
                  size="lg"
                  px={8}
                  py={6}
                  fontWeight="bold"
                  fontSize="md"
                  borderRadius="md"
                  _hover={{ bg: "red.600" }}
                  onClick={handleShowMore}
                >
                  Show More
                </Button>
              </Flex>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}


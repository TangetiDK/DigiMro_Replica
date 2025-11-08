import { Box, Flex, Text, Image, Container, Heading, Link as ChakraLink, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaPlay } from "react-icons/fa";
import { useState } from "react";
import { blogPosts, knowledgeHubVideos } from "../data/data";

export default function TechnicalResources() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box bg="#282738" position="relative" py={12}>
      <Container maxW="container.xl" px={{ base: 2, md: 6 }}>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={8}
        >
          Technical Resources
        </Heading>

        <Flex justify="center" mb={8}>
          <HStack spacing={8}>
            <Box
              as="button"
              color={activeTab === 0 ? "white" : "gray.400"}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="semibold"
              px={4}
              py={2}
              borderBottom={activeTab === 0 ? "3px solid red.500" : "3px solid transparent"}
              bg="transparent"
              border="none"
              borderRadius="none"
              outline="none"
              boxShadow="none"
              _hover={{ 
                color: 'white',
                borderBottom: '3px solid red.500'
              }}
              _focus={{
                boxShadow: 'none',
                outline: 'none'
              }}
              cursor="pointer"
              onClick={() => setActiveTab(0)}
              transition="color 0.2s ease-in-out, border-color 0.2s ease-in-out"
            >
              Our Blogs
            </Box>
            <Box
              as="button"
              color={activeTab === 1 ? "white" : "gray.400"}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="semibold"
              px={4}
              py={2}
              borderBottom={activeTab === 1 ? "3px solid red.500" : "3px solid transparent"}
              bg="transparent"
              border="none"
              borderRadius="none"
              outline="none"
              boxShadow="none"
              _hover={{ 
                color: 'white',
                borderBottom: '3px solid red.500'
              }}
              _focus={{
                boxShadow: 'none',
                outline: 'none'
              }}
              cursor="pointer"
              onClick={() => setActiveTab(1)}
              transition="color 0.2s ease-in-out, border-color 0.2s ease-in-out"
            >
              Knowledge Hub
            </Box>
          </HStack>
        </Flex>

        <Box>
          {activeTab === 0 && (
            <Box>
              <Box position="relative" mb={8}>
                <Box
                  overflowX="auto"
                  overflowY="hidden"
                  py={4}
                  sx={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <Flex 
                    gap={8} 
                    display="inline-flex" 
                    minW="max-content"
                    px={2}
                  >
              {blogPosts.slice(0, 4).map((post, index) => (
                <Box
                  key={index}
                  className="blog-card"
                  minW={{ base: '300px', md: '300px' }}
                  maxW={{ base: '300px', md: '300px' }}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    w="100%"
                    h={{ base: '180px', md: '170px' }}
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
                          <Text color="gray.500" fontSize="sm">No Image</Text>
                        </Box>
                      }
                    />
                  </Box>

                  <Box p={4} flex="1" display="flex" flexDirection="column">
                    <HStack spacing={2} mb={3} align="center" justify="space-between" flexWrap="wrap">
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

                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontWeight="semibold"
                      color="gray.800"
                      mb={3}
                      lineHeight="shorter"
                      flex="1"
                      noOfLines={2}
                    >
                      {post.title}
                    </Text>

                    <ChakraLink
                      as={Link}
                      to={post.link}
                      color="red.500"
                      fontSize="sm"
                      fontWeight="medium"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      textDecoration="none"
                      _hover={{ 
                        textDecoration: 'none', 
                        color: 'red.600'
                      }}
                      mt="auto"
                    >
                      Read More <FaChevronRight size={12} />
                    </ChakraLink>
                  </Box>
                </Box>
              ))}
                  </Flex>
                </Box>
              </Box>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Box position="relative" mb={8}>
                <Box
                  overflowX="auto"
                  overflowY="hidden"
                  py={4}
                  sx={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <Flex 
                    gap={8} 
                    display="inline-flex" 
                    minW="max-content"
                    px={2}
                  >
              {knowledgeHubVideos.slice(0, 4).map((video, index) => (
                <Box
                  key={index}
                  className="blog-card"
                  minW={{ base: '300px', md: '300px' }}
                  maxW={{ base: '300px', md: '300px' }}
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
                >
                  {/* Video Thumbnail with Play Button */}
                  <Box
                    w="100%"
                    h={{ base: '180px', md: '170px' }}
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
                          <Text color="gray.500" fontSize="sm">No Image</Text>
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
                      _hover={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1.1)', transition: 'all 0.2s' }}
                    >
                      <FaPlay size={24} color="#DC2626" style={{ marginLeft: '4px' }} />
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

                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontWeight="semibold"
                      color="gray.800"
                      mb={3}
                      lineHeight="shorter"
                      flex="1"
                      noOfLines={2}
                    >
                      {video.title}
                    </Text>

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
                      _hover={{ 
                        textDecoration: 'none', 
                        color: 'red.600'
                      }}
                      mt="auto"
                    >
                      Watch Video <FaChevronRight size={12} />
                    </ChakraLink>
                  </Box>
                </Box>
              ))}
                  </Flex>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <Flex justify="center" mt={8}>
          <Button
            as={Link}
            to="/blogs"
            bg="red.600"
            color="white"
            size="md"
            px={6}
            py={4}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="md"
            _hover={{ 
              bg: 'red.700',
              color: 'white'
            }}
            _active={{
              bg: 'red.700',
              color: 'white'
            }}
            _focus={{
              boxShadow: 'none',
              outline: 'none'
            }}
            textTransform="uppercase"
          >
            VIEW ALL
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}


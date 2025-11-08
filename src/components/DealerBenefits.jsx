import { Box, Flex, Text, Container, Heading, Button, VStack } from "@chakra-ui/react";
import { 
  FaAward,
  FaTruck,
  FaHeadset,
  FaMoneyBillWave,
  FaRupeeSign,
  FaPercent,
} from "react-icons/fa";
import { dealerBenefits } from "../data/data";
import { useState } from "react";
import SignUpModal from "./SignUpModal";

export default function DealerBenefits() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW="container.xl" py={{ base: 4, md: 6 }} px={{ base: 2, md: 4 }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        bg="#282A3A"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="xl"
        gap={4}
        align="stretch"
      >
        <Box
          flex={{ base: '1', lg: '0.4' }}
          px={{ base: 4, md: 6, lg: 8 }}
          py={{ base: 5, md: 6, lg: 7 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <VStack align="flex-start" spacing={2} mb={4}>
            <Heading
              as="h2"
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
            >
              LOGIN / Become A Customer
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
              color="white"
              fontWeight="medium"
            >
              to Unlock the Dealer Benefits
            </Text>
          </VStack>
          <Button
            bg="red.600"
            color="white"
            size="sm"
            px={5}
            fontWeight="bold"
            fontSize={{ base: 'sm', md: 'sm' }}
            borderRadius="lg"
            _hover={{ bg: 'red.700' }}
            textTransform="uppercase"
            w={{ base: '100%', md: 'auto' }}
            py={{ base: 4, md: 3 }}
            onClick={handleOpenModal}
          >
            LOGIN / Become A Customer
          </Button>
        </Box>

        <Flex
          flex={{ base: '1', lg: '0.6' }}
          direction={{ base: 'column', md: 'row' }}
          gap={3}
          p={4}
          align="stretch"
        >
          {dealerBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Box
                key={index}
                flex="1"
                bg={benefit.bgColor}
                borderRadius="xl"
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minH={{ base: '120px', md: '160px' }}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
              >
                {/* Icon Container */}
                <Box
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  bg="white"
                  border={`2px solid ${benefit.borderColor}`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={3}
                  position="relative"
                >
                  {index === 0 ? (
                    <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                      <FaAward size={22} color="#374151" />
                      <Box
                        position="absolute"
                        top="40%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                      >
                        <FaRupeeSign size={10} color="#DC2626" style={{ fontWeight: 'bold' }} />
                      </Box>
                    </Box>
                  ) : index === 1 ? (
                    <Box position="relative">
                      <FaTruck size={24} color="#DC2626" />
                      <Box
                        position="absolute"
                        bottom="-6px"
                        left="50%"
                        transform="translateX(-50%)"
                        w="12px"
                        h="10px"
                        bg="#374151"
                        borderRadius="sm"
                      />
                    </Box>
                  ) : index === 2 ? (
                    <Box position="relative">
                      <FaHeadset size={24} color="#374151" />
                      <Box
                        position="absolute"
                        top="2px"
                        left="2px"
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg="red.500"
                      />
                      <Box
                        position="absolute"
                        top="2px"
                        right="2px"
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg="red.500"
                      />
                    </Box>
                  ) : index === 3 ? (
                    <Box position="relative">
                      <FaMoneyBillWave size={24} color="#374151" />
                      <Box
                        position="absolute"
                        top="-4px"
                        right="-8px"
                        bg="red.500"
                        color="white"
                        borderRadius="sm"
                        px={1}
                        py={0.5}
                        fontSize="9px"
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                      >
                        GST<FaPercent size={7} />
                      </Box>
                    </Box>
                  ) : null}
                </Box>

                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="bold"
                  color="gray.800"
                  textAlign="center"
                  mt={1}
                >
                  {benefit.title}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  );
}


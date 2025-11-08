import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAward, FaTruck, FaShieldAlt, FaHeadset, FaCheckCircle } from "react-icons/fa";

export default function GIPipes() {
  const [formData, setFormData] = useState({
    organizationName: "",
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    requirement: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: FaAward,
      title: "Great Value",
      description: "Most popular brands with widest range of selection at best prices.",
    },
    {
      icon: FaTruck,
      title: "Nationwide Delivery",
      description: "Over 19,000 pincodes serviceable across India.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      description: "Partnered with India's most renowned and secure payment solutions.",
    },
    {
      icon: FaCheckCircle,
      title: "Buyer Protection",
      description: "Committed to buyer interests to provide smooth shopping experience.",
    },
    {
      icon: FaHeadset,
      title: "365 Days Help Desk",
      description: "Email on:- info@digimro.com",
    },
  ];

  return (
    <Box bg="rgb(239,239,244)" minH="100vh" py={8}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        {/* Hero Section */}
        <Box
          bg="linear-gradient(135deg, #dc2626 0%, #991b1b 100%)"
          borderRadius="xl"
          p={{ base: 6, md: 12 }}
          mb={8}
          color="white"
          textAlign="center"
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            mb={4}
          >
            Get GI Pipes at Unbelievable Prices
          </Heading>
        </Box>

        {/* Form Section */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={8}
          mb={8}
        >
          {/* Left Side - Form */}
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            p={{ base: 6, md: 8 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={6}
              color="gray.800"
            >
              Please Fill The Form
            </Heading>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                {/* Organization Name */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="organizationName"
                    position="absolute"
                    left={3}
                    top={formData.organizationName ? "-8px" : "12px"}
                    fontSize={formData.organizationName ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.organizationName ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    Organization Name <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.organizationName ? 4 : 2}
                    pb={2}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.organizationName) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.organizationName) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* Full Name */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="fullName"
                    position="absolute"
                    left={3}
                    top={formData.fullName ? "-8px" : "12px"}
                    fontSize={formData.fullName ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.fullName ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    Full Name <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.fullName ? 4 : 2}
                    pb={2}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.fullName) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.fullName) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* Email */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="email"
                    position="absolute"
                    left={3}
                    top={formData.email ? "-8px" : "12px"}
                    fontSize={formData.email ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.email ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    Email ID <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.email ? 4 : 2}
                    pb={2}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.email) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.email) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* Contact Number */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="contactNumber"
                    position="absolute"
                    left={3}
                    top={formData.contactNumber ? "-8px" : "12px"}
                    fontSize={formData.contactNumber ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.contactNumber ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    Contact Number <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.contactNumber ? 4 : 2}
                    pb={2}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.contactNumber) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.contactNumber) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* City */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="city"
                    position="absolute"
                    left={3}
                    top={formData.city ? "-8px" : "12px"}
                    fontSize={formData.city ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.city ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    City <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.city ? 4 : 2}
                    pb={2}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.city) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.city) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* Requirement Description */}
                <Box position="relative">
                  <Text
                    as="label"
                    htmlFor="requirement"
                    position="absolute"
                    left={3}
                    top={formData.requirement ? "-8px" : "12px"}
                    fontSize={formData.requirement ? "xs" : "sm"}
                    fontWeight="medium"
                    color={formData.requirement ? "red.500" : "gray.600"}
                    bg="white"
                    px={1}
                    pointerEvents="none"
                    transition="all 0.2s"
                    zIndex={1}
                  >
                    Describe the Requirement <span style={{ color: '#e53e3e' }}>*</span>
                  </Text>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    size="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    color="black"
                    pt={formData.requirement ? 4 : 2}
                    pb={2}
                    rows={4}
                    required
                    _focus={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    _focusVisible={{
                      borderColor: "red.500",
                      boxShadow: "0 0 0 1px red.500",
                    }}
                    onFocus={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.requirement) {
                        label.style.top = "-8px";
                        label.style.fontSize = "12px";
                        label.style.color = "#e53e3e";
                      }
                    }}
                    onBlur={(e) => {
                      const label = e.target.previousElementSibling;
                      if (label && !formData.requirement) {
                        label.style.top = "12px";
                        label.style.fontSize = "14px";
                        label.style.color = "#718096";
                      }
                    }}
                  />
                </Box>

                {/* File Upload */}
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="medium" color="gray.700">
                    Upload the Requirement (Attach the Document with all your requirement.)
                  </Text>
                  <Box
                    border="2px dashed"
                    borderColor="gray.300"
                    borderRadius="md"
                    p={6}
                    textAlign="center"
                    _hover={{ borderColor: "red.500" }}
                    transition="all 0.2s"
                  >
                    <Input
                      type="file"
                      accept=".pdf,.csv,.xlsx"
                      onChange={handleFileChange}
                      display="none"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Text
                        as="span"
                        color="red.500"
                        cursor="pointer"
                        fontWeight="medium"
                        textDecoration="underline"
                      >
                        Browse file
                      </Text>{" "}
                      or drag & drop
                    </label>
                    <Text fontSize="xs" color="gray.500" mt={2}>
                      Max file Size: 1 MB | Supporting files: PDF, CSV, XLSX
                    </Text>
                    {formData.file && (
                      <Text fontSize="sm" color="green.600" mt={2}>
                        Selected: {formData.file.name}
                      </Text>
                    )}
                  </Box>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  bg="red.600"
                  color="white"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  _hover={{ bg: "red.700" }}
                  mt={4}
                >
                  SUBMIT
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Right Side - Benefits */}
          <Box>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                >
                  <Flex align="start" gap={4}>
                    <Box
                      bg="red.50"
                      borderRadius="full"
                      p={4}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      {(() => {
                        const IconComponent = benefit.icon;
                        return <IconComponent size={24} color="#dc2626" />;
                      })()}
                    </Box>
                    <Box flex={1}>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        fontWeight="bold"
                        mb={2}
                        color="gray.800"
                      >
                        {benefit.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600">
                        {benefit.description}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}


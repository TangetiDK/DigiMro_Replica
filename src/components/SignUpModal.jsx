import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Input,
  IconButton,
  VStack,
  HStack,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { FaTimes, FaBox, FaTruck, FaHeadset, FaChevronLeft, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function SignUpModal({ isOpen, onClose, onOpenLogin }) {
  const [currentStep, setCurrentStep] = useState(1); // 1: Personal Details, 2: Company Details, 3: Almost Done, 4: Success
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    customerType: "",
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    gstin: "",
    panCard: "",
    state: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    // Validate personal details
    if (formData.fullName && formData.mobileNumber && formData.customerType) {
      setCurrentStep(2);
    }
  };

  const handleCompanyDetailsSubmit = (e) => {
    e.preventDefault();
    // Validate company details
    if (formData.companyName && formData.companyEmail && formData.companyAddress) {
      setCurrentStep(3);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Validate final details
    if (formData.gstin && formData.panCard && formData.state) {
      console.log("Final Form Data:", formData);
      setCurrentStep(4);
      // Here you would typically send the data to your backend
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      fullName: "",
      mobileNumber: "",
      customerType: "",
      companyName: "",
      companyEmail: "",
      companyAddress: "",
      gstin: "",
      panCard: "",
      state: "",
    });
    onClose();
  };

  // Render left section (same for all steps)
  const renderLeftSection = () => (
    <Box
      flex={{ base: "1", md: "0.65" }}
      bg="rgb(240,240,245)"
      p={6}
      borderRadius={{ base: "xl 0 0 0", md: "xl 0 0 xl" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      <Box position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="gray.800"
          mb={6}
          lineHeight="shorter"
        >
          Empower Your Business with Unparalleled Advantage
        </Heading>

        <VStack align="flex-start" spacing={6}>
          <Flex align="flex-start" gap={4}>
            <Box
              w="40px"
              h="40px"
              borderRadius="md"
              bg="white"
              border="2px solid"
              borderColor="gray.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <FaBox size={20} color="#8B4513" />
            </Box>
              <Text fontSize="md" fontWeight="medium" color="gray.700">
                Placed bulk orders and avail exclusive pricing
              </Text>
            <Box flex="1">
            </Box>
          </Flex>

          <Flex align="flex-start" gap={4}>
            <Box
              w="40px"
              h="40px"
              borderRadius="md"
              bg="white"
              border="2px solid"
              borderColor="gray.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <FaTruck size={20} color="#DC2626" />
            </Box>
            <Box flex="1">
              <Text fontSize="md" fontWeight="medium" color="gray.700">
                Nationwide delivery with over 19,000 serviceable pincodes
              </Text>
            </Box>
          </Flex>

          <Flex align="flex-start" gap={4}>
            <Box
              w="40px"
              h="40px"
              borderRadius="md"
              bg="white"
              border="2px solid"
              borderColor="gray.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <FaHeadset size={20} color="#374151" />
            </Box>
            <Box flex="1">
              <Text fontSize="md" fontWeight="medium" color="gray.700">
                365 Days help desk support
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );

  // Render Step 1: Personal Details
  const renderPersonalDetails = () => (
    <Box
      flex={{ base: "1", md: "0.35" }}
      bg="white"
      p={{ base: 4, md: 8 }}
      borderRadius={{ base: 0, md: "0 xl xl 0" }}
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      position="relative"
      minH={{ base: "100vh", md: "auto" }}
    >
      <Box as="form" onSubmit={handlePersonalDetailsSubmit}>
        <Flex
          align="center"
          justify="space-between"
          mb={{ base: 4, md: 6 }}
          mt={{ base: 10, md: 0 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            Sign Up
          </Heading>
          <IconButton
            aria-label="Close"
            bg="black"
            color="white"
            size="sm"
            borderRadius="full"
            w={{ base: "28px", md: "32px" }}
            h={{ base: "28px", md: "32px" }}
            minW={{ base: "28px", md: "32px" }}
            border="none"
            outline="none"
            _hover={{
              bg: "gray.800",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _active={{
              bg: "gray.800",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focusVisible={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            onClick={handleClose}
          >
            <FaTimes size={12} />
          </IconButton>
        </Flex>

        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          <Box position="relative">
            <Text
              as="label"
              htmlFor="fullName"
              position="absolute"
              left={3}
              top={formData.fullName ? "-8px" : "12px"}
              fontSize={formData.fullName ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.fullName ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Full Name*
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
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.fullName) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
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
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="mobileNumber"
              position="absolute"
              left={3}
              top={formData.mobileNumber ? "-8px" : "12px"}
              fontSize={formData.mobileNumber ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.mobileNumber ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Mobile Number*
            </Text>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={formData.mobileNumber ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.mobileNumber) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.mobileNumber) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="customerType"
              position="absolute"
              left={3}
              top={formData.customerType ? "-8px" : "12px"}
              fontSize={formData.customerType ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.customerType ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Customer Type*
            </Text>
            <Box
              as="select"
              id="customerType"
              name="customerType"
              value={formData.customerType}
              onChange={handleInputChange}
              w="100%"
              h="48px"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              pl={4}
              pr={10}
              fontSize="md"
              color={formData.customerType ? "black" : "transparent"}
              cursor="pointer"
              pt={formData.customerType ? 4 : 2}
              pb={2}
              _hover={{ borderColor: "gray.400" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
                outline: "none",
                color: "black",
              }}
              sx={{
                "& option": {
                  color: "gray.700",
                  bg: "white",
                  padding: "8px",
                },
                "& option:checked": {
                  bg: "blue.50",
                  color: "gray.800",
                },
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.customerType) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.customerType) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              style={{
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '12px',
              }}
              required
            >
              <option value="" style={{ color: "#9CA3AF" }}>
                Select Customer Type
              </option>
              <option value="dealer" style={{ color: "#374151" }}>End Customer</option>
              <option value="distributor" style={{ color: "#374151" }}>System Integrator</option>
              <option value="retailer" style={{ color: "#374151" }}>Reseller</option>
            </Box>
          </Box>

          <Button
            type="submit"
            w="100%"
            bg="red.600"
            color="white"
            size="lg"
            fontWeight="bold"
            fontSize="md"
            borderRadius="md"
            border="none"
            outline="none"
            _hover={{ bg: "red.700", border: "none", outline: "none", boxShadow: "none" }}
            _active={{ 
              bg: "red.800",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focusVisible={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            mt={2}
          >
            Continue
          </Button>

          <HStack justify="center" mt={2}>
            <Text fontSize="sm" color="gray.600">
              Already have an account?{" "}
            </Text>
            <Link
              href="#"
              color="blue.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
              onClick={(e) => {
                e.preventDefault()
                if (onOpenLogin) onOpenLogin()
              }}
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );

  // Render Step 2: Company Details
  const renderCompanyDetails = () => (
    <Box
      flex={{ base: "1", md: "0.35" }}
      bg="white"
      p={{ base: 4, md: 8 }}
      borderRadius={{ base: 0, md: "0 xl xl 0" }}
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      position="relative"
      minH={{ base: "100vh", md: "auto" }}
    >
      <IconButton
        aria-label="Close"
        position="absolute"
        top={{ base: 2, md: 4 }}
        right={{ base: 2, md: 4 }}
        zIndex={10}
        bg="black"
        color="white"
        size="sm"
        borderRadius="full"
        w={{ base: "28px", md: "32px" }}
        h={{ base: "28px", md: "32px" }}
        minW={{ base: "28px", md: "32px" }}
        border="none"
        outline="none"
        _hover={{
          bg: "gray.800",
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _active={{
          bg: "gray.800",
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _focus={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _focusVisible={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        onClick={handleClose}
        display={{ base: "flex", md: "none" }}
      >
        <FaTimes size={12} />
      </IconButton>
      <Box as="form" onSubmit={handleCompanyDetailsSubmit}>
        <Flex align="center" gap={1} mb={{ base: 4, md: 6 }} mt={{ base: 10, md: 0 }}>
          <Button
            aria-label="Back"
            variant="ghost"
            size="sm"
            border="none"
            outline="none"
            onClick={handleBack}
            _hover={{ 
              bg: "black",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _active={{
              bg: "gray.100",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focusVisible={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
          ><FaChevronLeft color="white"/></Button>Button>
          <Heading
            fontSize={{ base: "lg", md: "md", lg: "lg" }}
            fontWeight="bold"
            color="gray.800"
          >
            Enter Your Company Details
          </Heading>
        </Flex>

        <VStack spacing={4} align="stretch">
          <Box position="relative">
            <Text
              as="label"
              htmlFor="companyName"
              position="absolute"
              left={3}
              top={formData.companyName ? "-8px" : "12px"}
              fontSize={formData.companyName ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.companyName ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Company Name*
            </Text>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={formData.companyName ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyName) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyName) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="companyEmail"
              position="absolute"
              left={3}
              top={formData.companyEmail ? "-8px" : "12px"}
              fontSize={formData.companyEmail ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.companyEmail ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Company Email*
            </Text>
            <Input
              id="companyEmail"
              name="companyEmail"
              type="email"
              value={formData.companyEmail}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={formData.companyEmail ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyEmail) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyEmail) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="companyAddress"
              position="absolute"
              left={3}
              top={formData.companyAddress ? "-8px" : "12px"}
              fontSize={formData.companyAddress ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.companyAddress ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Company Address*
            </Text>
            <Textarea
              id="companyAddress"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              minH="100px"
              resize="vertical"
              pt={formData.companyAddress ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyAddress) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.companyAddress) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Button
            type="submit"
            w="100%"
            bg="red.500"
            color="white"
            size="lg"
            fontWeight="bold"
            fontSize="md"
            borderRadius="md"
            border="none"
            outline="none"
            _hover={{ bg: "red.600", border: "none", outline: "none", boxShadow: "none" }}
            _active={{ 
              bg: "red.700",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focusVisible={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            mt={2}
          >
            Continue
          </Button>

          <HStack justify="center" mt={2}>
            <Text fontSize="sm" color="gray.600">
              Already have an account?{" "}
            </Text>
            <Link
              href="#"
              color="blue.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
              onClick={(e) => {
                e.preventDefault()
                if (onOpenLogin) onOpenLogin()
              }}
            >
              LOGIN
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );

  // Render Step 2: Almost Done
  const renderAlmostDone = () => (
    <Box
      flex={{ base: "1", md: "0.35" }}
      bg="white"
      p={{ base: 4, md: 8 }}
      borderRadius={{ base: 0, md: "0 xl xl 0" }}
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      position="relative"
      minH={{ base: "100vh", md: "auto" }}
    >
      <IconButton
        aria-label="Close"
        position="absolute"
        top={{ base: 2, md: 4 }}
        right={{ base: 2, md: 4 }}
        zIndex={10}
        bg="black"
        color="white"
        size="sm"
        borderRadius="full"
        w={{ base: "28px", md: "32px" }}
        h={{ base: "28px", md: "32px" }}
        minW={{ base: "28px", md: "32px" }}
        _hover={{
          bg: "gray.800",
        }}
        onClick={handleClose}
        display={{ base: "flex", md: "none" }}
      >
        <FaTimes size={12} />
      </IconButton>
      <Box as="form" onSubmit={handleFinalSubmit}>
        <Flex align="center" gap={3} mb={4}>
          <IconButton
            aria-label="Back"
            icon={<FaChevronLeft />}
            variant="ghost"
            size="sm"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
            onClick={handleBack}
          />
        </Flex>

        <Heading
          as="h2"
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          color="gray.800"
          mb={2}
          mt={{ base: 10, md: 0 }}
        >
          Almost Done!
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb={{ base: 4, md: 6 }}>
          Just a few more details
        </Text>

        <VStack spacing={4} align="stretch">
          <Box position="relative">
            <Text
              as="label"
              htmlFor="gstin"
              position="absolute"
              left={3}
              top={formData.gstin ? "-8px" : "12px"}
              fontSize={formData.gstin ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.gstin ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter GSTIN Number*
            </Text>
            <Input
              id="gstin"
              name="gstin"
              value={formData.gstin}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={formData.gstin ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.gstin) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.gstin) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="panCard"
              position="absolute"
              left={3}
              top={formData.panCard ? "-8px" : "12px"}
              fontSize={formData.panCard ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.panCard ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Pan Card Number*
            </Text>
            <Input
              id="panCard"
              name="panCard"
              value={formData.panCard}
              onChange={handleInputChange}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={formData.panCard ? 4 : 2}
              pb={2}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              _focusVisible={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.panCard) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.panCard) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              required
            />
          </Box>

          <Box position="relative">
            <Text
              as="label"
              htmlFor="state"
              position="absolute"
              left={3}
              top={formData.state ? "-8px" : "12px"}
              fontSize={formData.state ? "xs" : "sm"}
              fontWeight="medium"
              color={formData.state ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              State*
            </Text>
            <Box
              as="select"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              w="100%"
              h="48px"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              pl={4}
              pr={10}
              fontSize="md"
              color={formData.state ? "black" : "transparent"}
              cursor="pointer"
              pt={formData.state ? 4 : 2}
              pb={2}
              _hover={{ borderColor: "gray.400" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue.500",
                outline: "none",
                color: "black",
              }}
              sx={{
                "& option": {
                  color: "gray.700",
                  bg: "white",
                  padding: "8px",
                },
                "& option:checked": {
                  bg: "blue.50",
                  color: "gray.800",
                },
              }}
              onFocus={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.state) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !formData.state) {
                  label.style.top = "12px";
                  label.style.fontSize = "14px";
                  label.style.color = "#718096";
                }
              }}
              style={{
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '12px',
              }}
              required
            >
              <option value="" style={{ color: "#9CA3AF" }}>
                Select any State
              </option>
              <option value="andhra-pradesh">Andhra Pradesh</option>
              <option value="arunachal-pradesh">Arunachal Pradesh</option>
              <option value="assam">Assam</option>
              <option value="bihar">Bihar</option>
              <option value="chhattisgarh">Chhattisgarh</option>
              <option value="goa">Goa</option>
              <option value="gujarat">Gujarat</option>
              <option value="haryana">Haryana</option>
              <option value="himachal-pradesh">Himachal Pradesh</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="madhya-pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="manipur">Manipur</option>
              <option value="meghalaya">Meghalaya</option>
              <option value="mizoram">Mizoram</option>
              <option value="nagaland">Nagaland</option>
              <option value="odisha">Odisha</option>
              <option value="punjab">Punjab</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="sikkim">Sikkim</option>
              <option value="tamil-nadu">Tamil Nadu</option>
              <option value="telangana">Telangana</option>
              <option value="tripura">Tripura</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="west-bengal">West Bengal</option>
            </Box>
          </Box>

          <Button
            type="submit"
            w="100%"
            bg="red.500"
            color="white"
            size="lg"
            fontWeight="bold"
            fontSize="md"
            borderRadius="md"
            border="none"
            outline="none"
            _hover={{ bg: "red.600", border: "none", outline: "none", boxShadow: "none" }}
            _active={{ 
              bg: "red.700",
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            _focusVisible={{
              border: "none",
              outline: "none",
              boxShadow: "none"
            }}
            mt={2}
          >
            Submit
          </Button>

          <HStack justify="center" mt={2}>
            <Text fontSize="sm" color="gray.600">
              Already have an account?{" "}
            </Text>
            <Link
              href="#"
              color="blue.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
              onClick={(e) => {
                e.preventDefault()
                if (onOpenLogin) onOpenLogin()
              }}
            >
              LOGIN
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );

  // Render Step 3: Success
  const renderSuccess = () => (
    <Box
      flex={{ base: "1", md: "0.35" }}
      bg="white"
      p={{ base: 4, md: 8 }}
      borderRadius={{ base: 0, md: "0 xl xl 0" }}
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      alignItems="center"
      position="relative"
      textAlign="center"
      minH={{ base: "100vh", md: "auto" }}
    >
      <IconButton
        aria-label="Close"
        position="absolute"
        top={{ base: 2, md: 4 }}
        right={{ base: 2, md: 4 }}
        zIndex={10}
        bg="black"
        color="white"
        size="sm"
        borderRadius="full"
        w={{ base: "28px", md: "32px" }}
        h={{ base: "28px", md: "32px" }}
        minW={{ base: "28px", md: "32px" }}
        border="none"
        outline="none"
        _hover={{
          bg: "gray.800",
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _active={{
          bg: "gray.800",
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _focus={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        _focusVisible={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        onClick={handleClose}
        display={{ base: "flex", md: "none" }}
      >
        <FaTimes size={12} />
      </IconButton>
      <Box
        w={{ base: "60px", md: "80px" }}
        h={{ base: "60px", md: "80px" }}
        borderRadius="full"
        bg="green.500"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={{ base: 4, md: 6 }}
        mt={{ base: 10, md: 0 }}
      >
        <FaCheck size={{ base: 30, md: 40 }} color="white" />
      </Box>

      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="green.500"
        mb={2}
      >
        Thank You!
      </Heading>

      <Text fontSize={{ base: "sm", md: "md" }} color="gray.700" mb={{ base: 4, md: 6 }}>
        for your interest in becoming a customer
      </Text>

      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" lineHeight="tall" px={{ base: 2, md: 0 }}>
        An email has been sent to{" "}
        <Link
          href="#"
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          {formData.companyEmail || "your email"}
        </Link>
        {" "}Providing you with the next steps for onboarding
      </Text>
    </Box>
  );

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.5)"
      zIndex={1000}
      display="flex"
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="center"
      p={{ base: 0, md: 4 }}
      overflowY="auto"
    >
      <Box
        bg="white"
        borderRadius={{ base: 0, md: "xl" }}
        maxW="1000px"
        w="100%"
        minH={{ base: "100vh", md: "auto" }}
        maxH={{ base: "100vh", md: "90vh" }}
        overflow="auto"
        position="relative"
        boxShadow={{ base: "none", md: "2xl" }}
        onClick={(e) => e.stopPropagation()}
        display="flex"
        direction={{ base: "column", md: "row" }}
      >
        {renderLeftSection()}

        {currentStep === 1 && renderPersonalDetails()}
        {currentStep === 2 && renderCompanyDetails()}
        {currentStep === 3 && renderAlmostDone()}
        {currentStep === 4 && renderSuccess()}
      </Box>
    </Box>
  );
}

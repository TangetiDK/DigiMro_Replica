
import {
  Drawer,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

// Indian states list
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const customerTypes = [
  "Dealer",
  "Distributor",
  "System Integrator",
  "End User",
  "Reseller",
];

export default function QuoteDrawer({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    quantity: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    state: "",
    customerType: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { product, ...formData });
    // Reset form
    setFormData({
      quantity: "",
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      state: "",
      customerType: "",
    });
    onClose();
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={(details) => { if (!details.open) onClose(); }} placement="end" size="md">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          {/* Custom Header */}
          <Box
            bg="gray.700"
            px={6}
            py={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading
              as="h2"
              fontSize="lg"
              fontWeight="bold"
              color="white"
            >
              Send Query to Us
            </Heading>
            <IconButton
              onClick={onClose}
              color="white"
              aria-label="Close drawer"
              size="sm"
              borderRadius="full"
            >
              <FaTimes />
            </IconButton>
          </Box>

          <Drawer.Body>
            <Box p={6}>
            {/* Product Information Section */}
            {product && (
              <Box mb={6} pb={6} borderBottom="1px solid" borderColor="gray.200">
                <Flex gap={4}>
                  <Box
                    w="80px"
                    h="80px"
                    bg="gray.100"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                      fallback={
                        <Text fontSize="xs" color="gray.500">
                          No Image
                        </Text>
                      }
                    />
                  </Box>
                  <Box flex="1">
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color="gray.800"
                      mb={1}
                      lineHeight="tall"
                    >
                      {product.name}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      By: {product.brand || "Unknown"}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            )}

            <form onSubmit={handleSubmit}>
              <VStack align="stretch" spacing={6}>
                <Box>
                  <Heading
                    as="h3"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.800"
                    mb={3}
                  >
                    Product Quantity
                  </Heading>
                  <Box position="relative">
                    <Text
                      as="label"
                      htmlFor="quantity"
                      position="absolute"
                      left={3}
                      top={formData.quantity ? "-8px" : "12px"}
                      fontSize={formData.quantity ? "xs" : "sm"}
                      fontWeight="medium"
                      color={formData.quantity ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Enter Qty*
                    </Text>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleChange("quantity", e.target.value)}  
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={formData.quantity ? 4 : 2}
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
                        if (label && !formData.quantity) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !formData.quantity) {
                          label.style.top = "12px";
                          label.style.fontSize = "14px";
                          label.style.color = "#718096";
                        }
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.800"
                    mb={3}
                  >
                    Personal Details
                  </Heading>
                  <VStack align="stretch" spacing={8} gap={8}>
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
                        Full Name*
                      </Text>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        border="1px solid"
                        borderColor="gray.300"
                        color="black"
                        borderRadius="md"
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
                      />
                    </Box>
                    <Box position="relative">
                      <Text
                        as="label"
                        htmlFor="email"
                        position="absolute"
                        left={3}
                        top={formData.email ? "-8px" : "12px"}
                        fontSize={formData.email ? "xs" : "sm"}
                        fontWeight="medium"
                        color={formData.email ? "blue.500" : "gray.600"}
                        bg="white"
                        px={1}
                        pointerEvents="none"
                        transition="all 0.2s"
                        zIndex={1}
                      >
                        Email*
                      </Text>
                      <Input
                        id="email"
                        type="email"
                        color="black"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}   
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="md"
                        pt={formData.email ? 4 : 2}
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
                          if (label && !formData.email) {
                            label.style.top = "-8px";
                            label.style.fontSize = "12px";
                            label.style.color = "#3182ce";
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
                        Mobile Number*
                      </Text>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        color="black"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          handleChange("mobileNumber", e.target.value)
                        }
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="md"
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
                      />
                    </Box>
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
                        Company Name*
                      </Text>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleChange("companyName", e.target.value)
                        }
                        border="1px solid"
                        borderColor="gray.300"
                        color="black"
                        borderRadius="md"
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
                      />
                    </Box>
                    <Box
                      as="select"
                      placeholder="Select State"
                      value={formData.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      bg="white"
                      color="black"
                      px={4}
                      py={2}
                      w="100%"
                      minH="40px"
                      fontSize="sm"
                      cursor="pointer"
                      _focus={{
                        borderColor: "red.500",
                        boxShadow: "0 0 0 1px red.500",
                        outline: "none",
                      }}
                      style={{
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '12px',
                      }}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Box>
                    <Box
                      as="select"
                      placeholder="Select Customer Type"
                      value={formData.customerType}
                      onChange={(e) =>
                        handleChange("customerType", e.target.value)
                      }
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      bg="white"
                      color="black"
                      px={4}
                      py={2}
                      w="100%"
                      minH="40px"
                      fontSize="sm"
                      cursor="pointer"
                      _focus={{
                        borderColor: "red.500",
                        boxShadow: "0 0 0 1px red.500",
                        outline: "none",
                      }}
                      style={{
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '12px',
                      }}
                    >
                      <option value="">Select Customer Type</option>
                      {customerTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Box>
                  </VStack>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  bg="red.500"
                  color="white"
                  size="lg"
                  w="100%"
                  fontWeight="bold"
                  borderRadius="md"
                  _hover={{ bg: "red.600" }}
                  mt={4}
                >
                  SUBMIT
                </Button>
              </VStack>
            </form>
          </Box>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

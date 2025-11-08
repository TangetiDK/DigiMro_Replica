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
} from "@chakra-ui/react";
import { FaTimes, FaBox, FaTruck, FaHeadset, FaEye, FaEyeSlash, FaArrowLeft, FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import SignUpModal from "./SignUpModal";

export default function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Handle login submission here
  };

  const handleOTPLogin = () => {
    console.log("OTP Login clicked");
    // Handle OTP login here
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
    // Handle Google login here
  };

  const handleClose = () => {
    setFormData({
      email: "",
      password: "",
      rememberMe: false,
    });
    setForgotPasswordEmail("");
    setShowPassword(false);
    setShowForgotPassword(false);
    onClose();
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setForgotPasswordEmail("");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password Email:", forgotPasswordEmail);
    // Handle forgot password submission here
  };

  // Render Forgot Password View
  const renderForgotPassword = () => (
    <>
      <Flex
        align="center"
        justify="space-between"
        mb={{ base: 4, md: 6 }}
        mt={{ base: 10, md: 0 }}
        spacing={3}
      >
        <Flex align="center" gap={3}>
          <Button
            w={{ base: "32px", md: "36px" }}
            h={{ base: "32px", md: "36px" }}
            bg="transparent"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            cursor="pointer"
            onClick={handleBackToLogin}
            transition="all 0.2s"
          >
            <FaArrowLeft size={12} color="black"/>
          </Button>
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            Forgot/Reset Password
          </Heading>
        </Flex>
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

      <Text fontSize="sm" color="gray.600" mb={4}>
        Enter register Email ID to receive verification code
      </Text>

      <Box as="form" onSubmit={handleForgotPasswordSubmit}>
        <VStack spacing={{ base: 3, md: 4 }} align="stretch" gap={4}>
          <Box position="relative">
            <Text
              as="label"
              htmlFor="forgotPasswordEmail"
              position="absolute"
              left={3}
              top={forgotPasswordEmail ? "-8px" : "12px"}
              fontSize={forgotPasswordEmail ? "xs" : "sm"}
              fontWeight="medium"
              color={forgotPasswordEmail ? "blue.500" : "gray.600"}
              bg="white"
              px={1}
              pointerEvents="none"
              transition="all 0.2s"
              zIndex={1}
            >
              Enter Registered Email ID
            </Text>
            <Input
              id="forgotPasswordEmail"
              name="forgotPasswordEmail"
              type="email"
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
              size="lg"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              color="black"
              pt={forgotPasswordEmail ? 4 : 2}
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
                if (label && !forgotPasswordEmail) {
                  label.style.top = "-8px";
                  label.style.fontSize = "12px";
                  label.style.color = "#3182ce";
                }
              }}
              onBlur={(e) => {
                const label = e.target.previousElementSibling;
                if (label && !forgotPasswordEmail) {
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

          <HStack justify="center" mt={4}>
            <Link
              href="#"
              color="blue.500"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
              onClick={(e) => {
                e.preventDefault();
                handleBackToLogin();
              }}
            >
              BACK TO LOGIN
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
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
        {/* Left Section - Business Advantages */}
        <Box
          flex={{ base: "0 0 auto", md: "0.65" }}
          bg="gray.50"
          p={{ base: 4, md: 8 }}
          borderRadius={{ base: 0, md: "xl 0 0 xl" }}
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          justifyContent="center"
          position="relative"
        >
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
                bg="red.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                position="relative"
              >
                <Box
                  position="absolute"
                  w="12px"
                  h="12px"
                  bg="white"
                  borderRadius="sm"
                  top="8px"
                  left="8px"
                />
                <Box
                  position="absolute"
                  w="12px"
                  h="12px"
                  bg="white"
                  borderRadius="sm"
                  top="8px"
                  left="20px"
                />
                <Box
                  position="absolute"
                  w="12px"
                  h="12px"
                  bg="white"
                  borderRadius="sm"
                  top="20px"
                  left="8px"
                />
              </Box>
              <Box flex="1">
                <Text fontSize="md" fontWeight="medium" color="gray.700">
                  Placed bulk orders and avail exclusive pricing
                </Text>
              </Box>
            </Flex>

            <Flex align="flex-start" gap={4}>
              <Box
                w="40px"
                h="40px"
                borderRadius="md"
                bg="yellow.400"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <FaTruck size={20} color="white" />
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
                bg="blue.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <FaHeadset size={20} color="white" />
              </Box>
              <Box flex="1">
                <Text fontSize="md" fontWeight="medium" color="gray.700">
                  365 Days help desk support
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Box>

        {/* Right Section - Login Form */}
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
          {showForgotPassword ? (
            renderForgotPassword()
          ) : (
            <>
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
                  Login
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
                  _hover={{
                    bg: "gray.800",
                  }}
                  onClick={handleClose}
                >
                  <FaTimes size={12} />
                </IconButton>
              </Flex>

              <Box as="form" onSubmit={handleLogin}>
            <VStack spacing={{ base: 3, md: 4 }} align="stretch" gap={2}>
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
                  Enter Email ID
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
                  required
                />
              </Box>

              <Box position="relative">
                <Text
                  as="label"
                  htmlFor="password"
                  position="absolute"
                  left={3}
                  top={formData.password ? "-8px" : "12px"}
                  fontSize={formData.password ? "xs" : "sm"}
                  fontWeight="medium"
                  color={formData.password ? "blue.500" : "gray.600"}
                  bg="white"
                  px={1}
                  pointerEvents="none"
                  transition="all 0.2s"
                  zIndex={1}
                >
                  Enter Password
                </Text>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  size="lg"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="md"
                  color="black"
                  pt={formData.password ? 4 : 2}
                  pb={2}
                  pr={12}
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
                    if (label && !formData.password) {
                      label.style.top = "-8px";
                      label.style.fontSize = "12px";
                      label.style.color = "#3182ce";
                    }
                  }}
                  onBlur={(e) => {
                    const label = e.target.previousElementSibling;
                    if (label && !formData.password) {
                      label.style.top = "12px";
                      label.style.fontSize = "14px";
                      label.style.color = "#718096";
                    }
                  }}
                  required
                />
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  color="black"
                  _hover={{ bg: "transparent", color: "gray.800" }}
                  _active={{ 
                    bg: "transparent",
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
                  border="none"
                  outline="none"
                  boxShadow="none"
                  zIndex={2}
                  minW="auto"
                  w="auto"
                  h="auto"
                  p={0}
                >
                  {showPassword ? (
                    <FaEyeSlash style={{ color: "black", fontSize: "18px" }} />
                  ) : (
                    <FaEye style={{ color: "black", fontSize: "18px" }} />
                  )}
                </IconButton>
              </Box>

              <Flex justify="space-between" align="center">
                <Flex
                  align="center"
                  gap={2}
                  cursor="pointer"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      rememberMe: !prev.rememberMe,
                    }))
                  }
                >
                  <Box
                    w="18px"
                    h="18px"
                    borderRadius="sm"
                    border="2px solid"
                    borderColor={formData.rememberMe ? "blue.500" : "gray.400"}
                    bg={formData.rememberMe ? "blue.500" : "white"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    {formData.rememberMe && (
                      <Box color="white" fontSize="xs">
                        <FaCheck />
                      </Box>
                    )}
                  </Box>
                  <Text fontSize="sm" color="gray.700" userSelect="none">
                    Remember Me
                  </Text>
                </Flex>
                <Link
                  href="#"
                  color="blue.500"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </Link>
              </Flex>

              <Button
                type="submit"
                w="100%"
                bg="red.500"
                color="white"
                size="lg"
                fontWeight="bold"
                fontSize="md"
                borderRadius="md"
                _hover={{ bg: "red.600" }}
                _active={{ bg: "red.700" }}
                mt={2}
              >
                Continue
              </Button>

              <Button
                type="button"
                variant="ghost"
                w="100%"
                size="sm"
                fontSize="sm"
                color={formData.email ? "blue.500" : "gray.400"}
                fontWeight="medium"
                isDisabled={!formData.email}
                cursor={formData.email ? "pointer" : "not-allowed"}
                bg="transparent"
                border="none"
                outline="none"
                boxShadow="none"
                _hover={{ 
                  bg: "transparent",
                  border: "none",
                  outline: "none",
                  boxShadow: "none"
                }}
                _active={{ 
                  bg: "transparent",
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
                _disabled={{
                  opacity: 1,
                  cursor: "not-allowed",
                  bg: "transparent",
                  border: "none",
                  outline: "none",
                  boxShadow: "none"
                }}
                onClick={handleOTPLogin}
              >
                LOGIN WITH OTP
              </Button>

              <Flex align="center" gap={2} my={2}>
                <Box flex="1" h="1px" bg="gray.300" />
                <Text fontSize="sm" color="gray.500" px={2}>
                  OR
                </Text>
                <Box flex="1" h="1px" bg="gray.300" />
              </Flex>

              <Button
                type="button"
                variant="outline"
                w="100%"
                size="lg"
                borderColor="gray.300"
                bg="white"
                _hover={{ bg: "gray.50", borderColor: "gray.400" }}
                onClick={handleGoogleLogin}
              >
                <HStack spacing={2}>
                  <FcGoogle size={20} />
                  <Text>Login With Google</Text>
                </HStack>
              </Button>

              <HStack justify="center" mt={4}>
                <Text fontSize="sm" color="gray.600">
                  Don't have an account?{" "}
                </Text>
                <Link
                  href="#"
                  color="blue.500"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                  onClick={handleOpenModal}
                >
                  Become A Customer
                </Link>
              </HStack>
            </VStack>
          </Box>
            </>
          )}
        </Box>
      </Box>
      <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
}


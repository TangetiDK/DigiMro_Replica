import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function SmartSurveillanceCalculator() {
  const [videoStandard, setVideoStandard] = useState('PAL')
  const [encodingMode, setEncodingMode] = useState('H.264')
  const [resolution, setResolution] = useState('')
  const [frameRate, setFrameRate] = useState('')
  const [bitrate, setBitrate] = useState('0')
  const [savingPeriod, setSavingPeriod] = useState('')
  const [storageSpace, setStorageSpace] = useState('0')
  const [activeTab, setActiveTab] = useState(0)
  const [cameraCount, setCameraCount] = useState('')
  const [bandwidth, setBandwidth] = useState('0')

  // Calculate storage space based on inputs
  useEffect(() => {
    if (bitrate && savingPeriod && bitrate !== '0') {
      const bitrateNum = parseFloat(bitrate)
      if (!isNaN(bitrateNum) && bitrateNum > 0) {
        // Hours per period
        const hoursPerPeriod = savingPeriod === 'day' ? 24 : savingPeriod === 'week' ? 168 : 720 // 30 days for month
        
        // Calculate storage in GB
        // Formula: (Bitrate in Kbps × 3600 seconds × hours) / (8 × 1024 × 1024) to convert to GB
        const storageGB = (bitrateNum * 3600 * hoursPerPeriod) / (8 * 1024 * 1024)
        
        // Format the result
        let formattedValue = ''
        if (storageGB >= 1024) {
          // Convert to TB
          const storageTB = storageGB / 1024
          formattedValue = storageTB.toFixed(2) + 'TB'
        } else if (storageGB >= 1) {
          // Keep in GB
          formattedValue = storageGB.toFixed(2) + 'GB'
        } else {
          // Convert to MB
          const storageMB = storageGB * 1024
          formattedValue = storageMB.toFixed(2) + 'MB'
        }
        
        setStorageSpace(formattedValue)
      }
    } else {
      setStorageSpace('0')
    }
  }, [bitrate, savingPeriod])

  // Calculate bandwidth based on camera count and bitrate
  useEffect(() => {
    if (cameraCount && bitrate && bitrate !== '0') {
      const cameraCountNum = parseFloat(cameraCount)
      const bitrateNum = parseFloat(bitrate)
      if (!isNaN(cameraCountNum) && !isNaN(bitrateNum) && cameraCountNum > 0 && bitrateNum > 0) {
        // Calculate bandwidth in Mbps
        // Formula: (Bitrate in Kbps × Camera Count) / 1000 to convert to Mbps
        const bandwidthMbps = (bitrateNum * cameraCountNum) / 1000
        
        // Format the result to 2 decimal places
        const formattedValue = bandwidthMbps.toFixed(2)
        setBandwidth(formattedValue)
      }
    } else {
      setBandwidth('0')
    }
  }, [cameraCount, bitrate])

  return (
    <Box minH="100vh" bg="rgb(239,239,244)" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          bg="white"
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
        >
          {/* Left Panel - Dark Red Section */}
          <Box
            bg="#7A1A1A"
            w={{ base: '100%', lg: '33.33%' }}
            p={{ base: 6, md: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            minH={{ base: 'auto', lg: '600px' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="white"
              mb={6}
              lineHeight="1.2"
            >
              Smart Surveillance Calculator
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="white"
              mb={8}
              lineHeight="1.6"
            >
              Estimate Your Storage & Bandwidth Needs For Your Setup. Provide
              Your Specifications To Calculate The Storage Space And Bandwidth
              Required For Your Needs.
            </Text>

            <VStack align="flex-start" spacing={4}>
              <Flex align="flex-start" gap={3}>
                <Box
                  color="#48BB78"
                  fontSize="xl"
                  mt={1}
                  flexShrink={0}
                >
                  <FaCheck />
                </Box>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="white" lineHeight="1.6">
                  Storage Estimation : Calculate How Much Storage You Need Based
                  On Recording Duration And Quality.
                </Text>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Box
                  color="#48BB78"
                  fontSize="xl"
                  mt={1}
                  flexShrink={0}
                >
                  <FaCheck />
                </Box>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="white" lineHeight="1.6">
                  Bandwidth Calculation : Determine The Required Network Speed
                  For Smooth Video Transmission.
                </Text>
              </Flex>
            </VStack>
          </Box>

          {/* Right Panel - White Section */}
          <Box
            w={{ base: '100%', lg: '66.67%' }}
            p={8}
            borderLeft={{ base: 'none', lg: '1px solid' }}
            borderColor="gray.200"
          >
            <VStack align="stretch" spacing={8}>
              {/* Add Device Settings Section */}
              <Box>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  mb={6}
                >
                  Add Device Settings
                </Heading>

                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  gap={4}
                  flexWrap="wrap"
                >
                  <Box flex={{ base: '1 1 100%', md: '1 1 calc(50% - 8px)' }} position="relative">
                    <Text
                      as="label"
                      htmlFor="videoStandard"
                      position="absolute"
                      left={3}
                      top={videoStandard ? "-8px" : "12px"}
                      fontSize={videoStandard ? "xs" : "sm"}
                      fontWeight="medium"
                      color={videoStandard ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Video Standard
                    </Text>
                    <Input
                      id="videoStandard"
                      value={videoStandard}
                      onChange={(e) => setVideoStandard(e.target.value)}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={videoStandard ? 4 : 2}
                      pb={2}
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      _focusVisible={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !videoStandard) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !videoStandard) {
                          label.style.top = "12px";
                          label.style.fontSize = "14px";
                          label.style.color = "#718096";
                        }
                      }}
                    />
                  </Box>

                  <Box flex={{ base: '1 1 100%', md: '1 1 calc(50% - 8px)' }} position="relative">
                    <Text
                      as="label"
                      htmlFor="encodingMode"
                      position="absolute"
                      left={3}
                      top={encodingMode ? "-8px" : "12px"}
                      fontSize={encodingMode ? "xs" : "sm"}
                      fontWeight="medium"
                      color={encodingMode ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Encoding Mode
                    </Text>
                    <Input
                      id="encodingMode"
                      value={encodingMode}
                      onChange={(e) => setEncodingMode(e.target.value)}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={encodingMode ? 4 : 2}
                      pb={2}
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      _focusVisible={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !encodingMode) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !encodingMode) {
                          label.style.top = "12px";
                          label.style.fontSize = "14px";
                          label.style.color = "#718096";
                        }
                      }}
                    />
                  </Box>

                  <Box flex={{ base: '1 1 100%', md: '1 1 calc(50% - 8px)' }} position="relative">
                    <Text
                      as="label"
                      htmlFor="resolution"
                      position="absolute"
                      left={3}
                      top={resolution ? "-8px" : "12px"}
                      fontSize={resolution ? "xs" : "sm"}
                      fontWeight="medium"
                      color={resolution ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Resolution <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Box
                      as="select"
                      id="resolution"
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={resolution ? 4 : 2}
                      pb={2}
                      pl={3}
                      pr={10}
                      w="100%"
                      minH="40px"
                      fontSize="sm"
                      cursor="pointer"
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                        outline: 'none',
                      }}
                      _focusVisible={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !resolution) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !resolution) {
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
                    >
                      <option value="">Select Resolution*</option>
                      <option value="1920x1080">1920x1080 (Full HD)</option>
                      <option value="1280x720">1280x720 (HD)</option>
                      <option value="640x480">640x480 (SD)</option>
                      <option value="320x240">320x240 (QVGA)</option>
                    </Box>
                  </Box>

                  <Box flex={{ base: '1 1 100%', md: '1 1 calc(50% - 8px)' }} position="relative">
                    <Text
                      as="label"
                      htmlFor="frameRate"
                      position="absolute"
                      left={3}
                      top={frameRate ? "-8px" : "12px"}
                      fontSize={frameRate ? "xs" : "sm"}
                      fontWeight="medium"
                      color={frameRate ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Frame Rate (fps) <Text as="span" color="red.500">*</Text>
                    </Text>
                    <Box
                      as="select"
                      id="frameRate"
                      value={frameRate}
                      onChange={(e) => setFrameRate(e.target.value)}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={frameRate ? 4 : 2}
                      pb={2}
                      pl={3}
                      pr={10}
                      w="100%"
                      minH="40px"
                      fontSize="sm"
                      cursor="pointer"
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                        outline: 'none',
                      }}
                      _focusVisible={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !frameRate) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && !frameRate) {
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
                    >
                      <option value="">Select Frame Rate(FPS)*</option>
                      <option value="30">30 fps</option>
                      <option value="25">25 fps</option>
                      <option value="15">15 fps</option>
                      <option value="10">10 fps</option>
                      <option value="5">5 fps</option>
                    </Box>
                  </Box>

                  <Box flex={{ base: '1 1 100%', md: '1 1 calc(50% - 8px)' }} position="relative">
                    <Text
                      as="label"
                      htmlFor="bitrate"
                      position="absolute"
                      left={3}
                      top={bitrate && bitrate !== '0' ? "-8px" : "12px"}
                      fontSize={bitrate && bitrate !== '0' ? "xs" : "sm"}
                      fontWeight="medium"
                      color={bitrate && bitrate !== '0' ? "blue.500" : "gray.600"}
                      bg="white"
                      px={1}
                      pointerEvents="none"
                      transition="all 0.2s"
                      zIndex={1}
                    >
                      Bitrate (Kbps)
                    </Text>
                    <Input
                      id="bitrate"
                      type="number"
                      value={bitrate}
                      onChange={(e) => setBitrate(e.target.value)}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      color="black"
                      pt={bitrate && bitrate !== '0' ? 4 : 2}
                      pb={2}
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      _focusVisible={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px blue.500',
                      }}
                      onFocus={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && (!bitrate || bitrate === '0')) {
                          label.style.top = "-8px";
                          label.style.fontSize = "12px";
                          label.style.color = "#3182ce";
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.previousElementSibling;
                        if (label && (!bitrate || bitrate === '0')) {
                          label.style.top = "12px";
                          label.style.fontSize = "14px";
                          label.style.color = "#718096";
                        }
                      }}
                    />
                  </Box>
                </Flex>
              </Box>

              {/* Calculate Disk Space & Bandwidth Section */}
              <Box>
                <Heading
                  as="h2"
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  mb={6}
                >
                  {activeTab === 0 ? 'Calculate Disk Space' : 'Calculate Bandwidth'}
                </Heading>

                {/* Tabs */}
                <Box mb={0} borderBottom="1px solid" borderColor="gray.200">
                  <HStack spacing={0}>
                    <Box
                      as="button"
                      px={4}
                      py={3}
                      color={activeTab === 0 ? 'red.500' : 'gray.600'}
                      fontWeight={activeTab === 0 ? 'semibold' : 'medium'}
                      fontSize="sm"
                      bg="transparent"
                      cursor="pointer"
                      border="none"
                      borderBottom={activeTab === 0 ? '2px solid' : 'none'}
                      borderColor={activeTab === 0 ? 'red.500' : 'transparent'}
                      outline="none"
                      mb={activeTab === 0 ? '-1px' : '0'}
                      _hover={{
                        bg: 'transparent',
                        border: activeTab === 0 ? '2px solid' : 'none',
                        borderBottom: activeTab === 0 ? '2px solid' : 'none',
                        borderColor: activeTab === 0 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _focus={{
                        bg: 'transparent',
                        border: activeTab === 0 ? '2px solid' : 'none',
                        borderBottom: activeTab === 0 ? '2px solid' : 'none',
                        borderColor: activeTab === 0 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _active={{
                        bg: 'transparent',
                        border: activeTab === 0 ? '2px solid' : 'none',
                        borderBottom: activeTab === 0 ? '2px solid' : 'none',
                        borderColor: activeTab === 0 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _focusVisible={{
                        border: activeTab === 0 ? '2px solid' : 'none',
                        borderBottom: activeTab === 0 ? '2px solid' : 'none',
                        borderColor: activeTab === 0 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      onClick={() => setActiveTab(0)}
                    >
                      Storage Space
                    </Box>
                    <Box
                      as="button"
                      px={4}
                      py={3}
                      color={activeTab === 1 ? 'red.500' : 'gray.600'}
                      fontWeight={activeTab === 1 ? 'semibold' : 'medium'}
                      fontSize="sm"
                      bg="transparent"
                      cursor="pointer"
                      border="none"
                      borderBottom={activeTab === 1 ? '2px solid' : 'none'}
                      borderColor={activeTab === 1 ? 'red.500' : 'transparent'}
                      outline="none"
                      mb={activeTab === 1 ? '-1px' : '0'}
                      _hover={{
                        bg: 'transparent',
                        border: activeTab === 1 ? '2px solid' : 'none',
                        borderBottom: activeTab === 1 ? '2px solid' : 'none',
                        borderColor: activeTab === 1 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _focus={{
                        bg: 'transparent',
                        border: activeTab === 1 ? '2px solid' : 'none',
                        borderBottom: activeTab === 1 ? '2px solid' : 'none',
                        borderColor: activeTab === 1 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _active={{
                        bg: 'transparent',
                        border: activeTab === 1 ? '2px solid' : 'none',
                        borderBottom: activeTab === 1 ? '2px solid' : 'none',
                        borderColor: activeTab === 1 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      _focusVisible={{
                        border: activeTab === 1 ? '2px solid' : 'none',
                        borderBottom: activeTab === 1 ? '2px solid' : 'none',
                        borderColor: activeTab === 1 ? 'red.500' : 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      onClick={() => setActiveTab(1)}
                    >
                      Bandwidth
                    </Box>
                  </HStack>
                </Box>

                {/* Tab Panels */}
                <Box pt={6}>
                  {activeTab === 0 && (
                    <VStack align="stretch" spacing={6}>
                      <Box>
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.700"
                          mb={3}
                        >
                          Saving Period<Text as="span" color="red.500">*</Text>
                        </Text>
                        <HStack spacing={6}>
                          <Flex
                            align="center"
                            gap={2}
                            cursor="pointer"
                            onClick={() => setSavingPeriod('day')}
                          >
                            <Box
                              w="20px"
                              h="20px"
                              borderRadius="full"
                              border="2px solid"
                              borderColor={savingPeriod === 'day' ? 'red.500' : 'gray.400'}
                              bg={savingPeriod === 'day' ? 'red.500' : 'white'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              position="relative"
                            >
                              {savingPeriod === 'day' && (
                                <Box
                                  w="8px"
                                  h="8px"
                                  borderRadius="full"
                                  bg="white"
                                />
                              )}
                            </Box>
                            <Text fontSize="sm" color="gray.700" userSelect="none">
                              Day
                            </Text>
                          </Flex>
                          <Flex
                            align="center"
                            gap={2}
                            cursor="pointer"
                            onClick={() => setSavingPeriod('week')}
                          >
                            <Box
                              w="20px"
                              h="20px"
                              borderRadius="full"
                              border="2px solid"
                              borderColor={savingPeriod === 'week' ? 'red.500' : 'gray.400'}
                              bg={savingPeriod === 'week' ? 'red.500' : 'white'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              position="relative"
                            >
                              {savingPeriod === 'week' && (
                                <Box
                                  w="8px"
                                  h="8px"
                                  borderRadius="full"
                                  bg="white"
                                />
                              )}
                            </Box>
                            <Text fontSize="sm" color="gray.700" userSelect="none">
                              Week
                            </Text>
                          </Flex>
                          <Flex
                            align="center"
                            gap={2}
                            cursor="pointer"
                            onClick={() => setSavingPeriod('month')}
                          >
                            <Box
                              w="20px"
                              h="20px"
                              borderRadius="full"
                              border="2px solid"
                              borderColor={savingPeriod === 'month' ? 'red.500' : 'gray.400'}
                              bg={savingPeriod === 'month' ? 'red.500' : 'white'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              position="relative"
                            >
                              {savingPeriod === 'month' && (
                                <Box
                                  w="8px"
                                  h="8px"
                                  borderRadius="full"
                                  bg="white"
                                />
                              )}
                            </Box>
                            <Text fontSize="sm" color="gray.700" userSelect="none">
                              Month
                            </Text>
                          </Flex>
                        </HStack>
                      </Box>

                      <Box position="relative">
                        <Text
                          as="label"
                          htmlFor="storageSpace"
                          position="absolute"
                          left={3}
                          top={storageSpace && storageSpace !== '0' ? "-8px" : "12px"}
                          fontSize={storageSpace && storageSpace !== '0' ? "xs" : "sm"}
                          fontWeight="medium"
                          color={storageSpace && storageSpace !== '0' ? "blue.500" : "gray.600"}
                          bg="white"
                          px={1}
                          pointerEvents="none"
                          transition="all 0.2s"
                          zIndex={1}
                        >
                          Storage Space:
                        </Text>
                        <Input
                          id="storageSpace"
                          type="text"
                          value={storageSpace}
                          readOnly
                          bg="white"
                          border="1px solid"
                          borderColor="gray.300"
                          borderRadius="md"
                          color="black"
                          fontWeight="bold"
                          fontSize="md"
                          pt={storageSpace && storageSpace !== '0' ? 4 : 2}
                          pb={2}
                          _focus={{
                            borderColor: 'gray.300',
                            boxShadow: 'none',
                          }}
                          _focusVisible={{
                            borderColor: 'gray.300',
                            boxShadow: 'none',
                          }}
                          onFocus={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && (!storageSpace || storageSpace === '0')) {
                              label.style.top = "-8px";
                              label.style.fontSize = "12px";
                              label.style.color = "#3182ce";
                            }
                          }}
                          onBlur={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && (!storageSpace || storageSpace === '0')) {
                              label.style.top = "12px";
                              label.style.fontSize = "14px";
                              label.style.color = "#718096";
                            }
                          }}
                        />
                      </Box>
                    </VStack>
                  )}

                  {activeTab === 1 && (
                    <VStack align="stretch" spacing={6}>
                      <Box position="relative">
                        <Text
                          as="label"
                          htmlFor="cameraCount"
                          position="absolute"
                          left={3}
                          top={cameraCount ? "-8px" : "12px"}
                          fontSize={cameraCount ? "xs" : "sm"}
                          fontWeight="medium"
                          color={cameraCount ? "blue.500" : "gray.600"}
                          bg="white"
                          px={1}
                          pointerEvents="none"
                          transition="all 0.2s"
                          zIndex={1}
                        >
                          Enter Required Camera Count<Text as="span" color="red.500">*</Text>
                        </Text>
                        <Input
                          id="cameraCount"
                          type="number"
                          value={cameraCount}
                          onChange={(e) => setCameraCount(e.target.value)}
                          bg="white"
                          border="1px solid"
                          borderColor="gray.300"
                          borderRadius="md"
                          color="black"
                          pt={cameraCount ? 4 : 2}
                          pb={2}
                          _focus={{
                            borderColor: 'blue.500',
                            boxShadow: '0 0 0 1px blue.500',
                          }}
                          _focusVisible={{
                            borderColor: 'blue.500',
                            boxShadow: '0 0 0 1px blue.500',
                          }}
                          onFocus={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && !cameraCount) {
                              label.style.top = "-8px";
                              label.style.fontSize = "12px";
                              label.style.color = "#3182ce";
                            }
                          }}
                          onBlur={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && !cameraCount) {
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
                          htmlFor="bandwidth"
                          position="absolute"
                          left={3}
                          top={bandwidth && bandwidth !== '0' ? "-8px" : "12px"}
                          fontSize={bandwidth && bandwidth !== '0' ? "xs" : "sm"}
                          fontWeight="medium"
                          color={bandwidth && bandwidth !== '0' ? "blue.500" : "gray.600"}
                          bg="white"
                          px={1}
                          pointerEvents="none"
                          transition="all 0.2s"
                          zIndex={1}
                        >
                          BandWidth:
                        </Text>
                        <Input
                          id="bandwidth"
                          type="text"
                          value={bandwidth && bandwidth !== '0' ? `${bandwidth} Mbps` : ''}
                          readOnly
                          bg="white"
                          border="1px solid"
                          borderColor="gray.300"
                          borderRadius="md"
                          fontWeight="bold"
                          fontSize="md"
                          color="black"
                          pt={bandwidth && bandwidth !== '0' ? 4 : 2}
                          pb={2}
                          _focus={{
                            borderColor: 'gray.300',
                            boxShadow: 'none',
                          }}
                          _focusVisible={{
                            borderColor: 'gray.300',
                            boxShadow: 'none',
                          }}
                          onFocus={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && (!bandwidth || bandwidth === '0')) {
                              label.style.top = "-8px";
                              label.style.fontSize = "12px";
                              label.style.color = "#3182ce";
                            }
                          }}
                          onBlur={(e) => {
                            const label = e.target.previousElementSibling;
                            if (label && (!bandwidth || bandwidth === '0')) {
                              label.style.top = "12px";
                              label.style.fontSize = "14px";
                              label.style.color = "#718096";
                            }
                          }}
                        />
                      </Box>
                    </VStack>
                  )}
                </Box>
              </Box>
            </VStack>

            {/* Footer */}
            <Box mt={8} pt={6} borderTop="1px solid" borderColor="gray.200">
              <Text fontSize="xs" color="gray.500" textAlign="center">
                *This estimation tool is for illustrative purposes only.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default SmartSurveillanceCalculator


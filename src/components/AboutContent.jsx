import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react'

function AboutContent() {
  return (
    <Box bg="white" py={{ base: 6, md: 10 }} px={{ base: 4, md: 4 }}>
      <Container maxW="container.xl">
        <VStack align="stretch" spacing={8}>
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Welcome to DigiMRO - Your Trusted ELV Systems Partner
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.700" lineHeight="tall">
              <span style={{ fontWeight: 'bold' }}>DigiMRO</span> is your one-stop solution for all ELV (Extra-Low Voltage) systems
              procurement needs. We simplify the process for system integrators and resellers
              by offering a comprehensive range of ELV systems at competitive prices. As a
              leading distributor, we connect you to top brands across India, providing you
              with premium discounts and a seamless procurement experience.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              What Are ELV Systems?
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.700" lineHeight="tall">
              ELV systems are crucial components of modern infrastructure, enabling the efficient
              operation of low-power electrical devices. These systems are commonly used in
              residential, commercial, and industrial projects for various applications,
              including CCTV surveillance, fire alarms, access control, and public address
              systems. ELV systems are designed to enhance safety, security, and communication
              while minimizing energy consumption, making them essential for sustainable and
              smart building development.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Why Choose Us?
            </Heading>
            <Box as="ul" color="gray.700" listStyleType="disc" pl={6}>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Wide Product Range:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  From CCTV Surveillance Systems to Fire Alarms, Access Control, Intrusion
                  Detection, and Public Address Systems, we ensure all your needs for robust ELV
                  setups are met.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Top Discounts:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  We offer exclusive deals for system engineers, helping you maximize your
                  profits.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Quality You Can Trust:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  We partner with top brands, giving you access to certified ELV systems that
                  ensure safety, efficiency, and durability.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Seamless Procurement:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Our user-friendly platform is designed to save you time and effort in
                  sourcing.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Our Product Categories
            </Heading>
            <Box as="ol" color="gray.700" listStyleType="decimal" pl={6}>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  CCTV and Surveillance Systems:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Secure your properties with our advanced cameras, DVRs, and NVRs. We offer
                  tailored solutions for various needs.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Fire Alarm Systems:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Equip your projects with reliable fire detection and alarm systems, ensuring
                  safety compliance and protection of lives and assets.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Access Control Solutions:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Implement cutting-edge access management using biometric devices, card
                  readers, and integrated software for enhanced security.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Intrusion Detection Systems:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Protect against unauthorized access with our high-performance motion detectors,
                  sensors, and alarms.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Public Address Systems:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Enable effective communication and emergency announcements with our
                  state-of-the-art public address and voice evacuation systems.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Designed for System Integrators & Resellers
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.700" lineHeight="tall">
              Our platform is specifically built for ELV industry professionals. Whether you're
              working on small-scale installations or handling large bulk orders, we provide
              you with the solutions and best prices you need.
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Why Choose Us?
            </Heading>
            <Box as="ul" color="gray.700" listStyleType="disc" pl={6}>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Dedicated Support:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  Our knowledgeable team is ready to assist you with product selection,
                  technical queries, and order management.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Fast Delivery:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  We assure timely deliveries to keep your projects on schedule.
                </Text>
              </Box>
              <Box as="li" mb={4} lineHeight="tall">
                <Text as="span" fontWeight="bold" color="gray.800" fontSize={{ base: 'xs', md: 'sm' }}>
                  Customized Solutions:{' '}
                </Text>
                <Text as="span" fontSize={{ base: 'xs', md: 'sm' }}>
                  We offer tailored packages to match your specific requirements.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Get Started Today
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.700" lineHeight="tall">
              Experience hassle-free ELV procurement with DigiMRO. Explore our extensive product
              catalog, unlock exclusive discounts, and partner with us for success in the ELV
              industry.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default AboutContent


import {
  Box,
  Container,
  Flex,
  Image,
} from '@chakra-ui/react'
import { promotionalBanners } from '../data/data';

function PromotionalBanners() {
  return (
    <Container maxW="container.xl" mb={10} px={{ base: 2, md: 4 }} gap={6}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 6 }}
          align="stretch"
        >
          {promotionalBanners.map((banner, index) => (
            <Box
              key={index}
              flex="1"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              minH={{ base: '200px', md: 'auto' }}
            >
              <Image
                src={banner.image}
                alt={`Banner ${index + 1}`}
                w="100%"
                h={{ base: 'auto', md: '100%' }}
                objectFit={{ base: 'contain', md: 'cover' }}
                borderRadius="lg"
              />
            </Box>
          ))}
        </Flex>
      </Container>
  )
}

export default PromotionalBanners


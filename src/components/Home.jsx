import { Box } from '@chakra-ui/react'
import HeroSection from './HeroSection'
import TrendingBrands from './TrendingBrands'
import PromotionalBanners from './PromotionalBanners'
import Newsletter from './Newsletter'
import AboutContent from './AboutContent'
import TechnicalResources from './TechnicalResources'
import DealerBenefits from './DealerBenefits'
import CCTVProducts from './CCTVProducts'
import FireAlarmProducts from './FireAlarmProducts'
import HoneywellProductCarousel from './HoneywellProductCarousel'
import ProductCarousel from './ProductCaurosel'
import ClearanceSale from './ClearanceSale'

export default function Home() {
  return (
    <Box w="100%" maxW="100vw" overflowX="hidden">
      <HeroSection />
      <TrendingBrands />
      <ClearanceSale />
      <DealerBenefits />
      <CCTVProducts />
      <FireAlarmProducts />
      <TechnicalResources />
      <HoneywellProductCarousel />
      <ProductCarousel />
      <PromotionalBanners />
      <Newsletter />
      <AboutContent />
    </Box>
  )
}


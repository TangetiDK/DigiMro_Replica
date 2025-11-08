import {
  Box,
  Heading,
  Button,
  Grid,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { brands, stats } from "../data/data";
import { useState, useEffect, useRef } from "react";
import cardBack from "../assets/cardBack.png";

function CountUpStat({ value, label, delay = 0, isVisible }) {
  const parseValue = (val) => {
    if (val.includes('K')) {
      return parseFloat(val.replace('K+', '').replace('+', '')) * 1000;
    } else if (val.includes('+')) {
      return parseFloat(val.replace('+', ''));
    }
    return parseFloat(val);
  };

  // Format the number back to display format
  const formatValue = (num, originalValue) => {
    if (originalValue.includes('K')) {
      const kValue = Math.floor(num / 1000);
      return `${kValue}K+`;
    } else if (originalValue.includes('+')) {
      return `${Math.floor(num)}+`;
    }
    return `${Math.floor(num)}`;
  };

  const targetValue = parseValue(value);
  const startValue = value.includes('K') ? 1000 : 1; 
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    if (!isVisible) {
      setCount(startValue);
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const increment = (targetValue - startValue) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    let interval = null;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          startValue + increment * currentStep,
          targetValue
        );
        setCount(newValue);

        if (currentStep >= steps || newValue >= targetValue) {
          setCount(targetValue);
          if (interval) clearInterval(interval);
        }
      }, stepDuration);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [isVisible, targetValue, startValue, delay]);

  return (
    <Box
      textAlign="center"
      px={{ base: 2, md: 8 }}
      py={{ base: 1, md: 0 }}
    >
      <Text fontSize={{ base: 'md', md: '3xl', lg: '4xl' }} fontWeight="bold" letterSpacing={{ base: 'tight', md: 'wide' }} color="white" whiteSpace="nowrap">
        {formatValue(count, value)}
      </Text>
      <Text fontSize={{ base: '10px', md: 'lg' }} color="#b0bfd0" whiteSpace="nowrap">
        {label}
      </Text>
    </Box>
  );
}

export default function TrendingBrands() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      bg="rgb(239, 239, 244)"
      borderRadius={{ base: "16px", md: "24px" }}
      position="relative"
      px={{ base: 4, md: 10 }}
      py={{ base: 6, md: 8 }}
      boxShadow="md"
      minH={{ base: "auto", md: "520px" }}
      mb={{ base: 20, md: 20 }}
      mx={{ base: 2, md: 0 }}
    >
      <Heading
        as="h2"
        fontSize={{ base: 'md', md: 'lg' }}
        mb={4}
        color="gray.800"
        fontWeight="bold"
        letterSpacing={0.5}
        px={2}
      >
        Our Trending Brands
      </Heading>
      <Box px={{ base: 2, md: 4 }} mb={8}>
         <Grid 
           templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
           gap={{ base: 3, md: 6 }}
           rowGap={{ base: 3, md: 6 }}
           columnGap={{ base: 3, md: 6 }}
         >
           {brands.map(({ label, src }) => (
             <Flex
               key={label}
               align="center"
               justify="center"
               h={{ base: "80px", md: "100px" }}
               bg="white"
               borderRadius={{ base: "12px", md: "16px" }}
               boxShadow="sm"
               border="2px solid"
               borderColor="#fff"
               px={{ base: 2, md: 3 }}
               w="100%"
             >
            <Image
              src={src}
              alt={label}
              maxH={{ base: "35px", md: "45px" }}
              maxW={{ base: "90px", md: "110px" }}
              objectFit="contain"
              fallback={<Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">{label}</Text>}
            />
          </Flex>
        ))}
      </Grid>
      </Box>
      <Flex justify="center" mb={4}>
        <Button
          as={Link}
          to="/brands"
          colorScheme="red"
          bg="#dc3338"
          color="white"
          px={10}
          py={6}
          fontWeight="bold"
          fontSize="lg"
          borderRadius="12px"
          boxShadow="sm"
          _hover={{ 
            bg: "#c1272d",
            color: "white"
          }}
          _focus={{
            boxShadow: "none",
            outline: "none"
          }}
          _active={{
            bg: "#c1272d",
            color: "white"
          }}
          textDecoration="none"
        >
          VIEW ALL BRANDS
        </Button>
      </Flex>
      <Flex
        ref={statsRef}
        position="absolute"
        bottom={{ base: "-70px", md: "-60px" }}
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "95%", md: "90%" }}
        bg="linear-gradient(89deg, #161933 0%, #181B3F 100%)"
        borderRadius={{ base: "16px", md: "70px" }}
        boxShadow="xl"
        py={{ base: 3, md: 6 }}
        px={{ base: 2, md: 6 }}
        justify="space-around"
        align="center"
        zIndex={10}
        direction="row"
        wrap="nowrap"
        gap={{ base: 1, md: 0 }}
        overflowX="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {stats.map(({ value, label }, idx) => (
          <Box
            key={label}
            bgImage={`url(${cardBack})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRight={{
              base: idx < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : undefined,
              md: idx < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : undefined
            }}
            flex={{ base: '0 0 auto', md: '1' }}
            minW={{ base: 'auto', md: '0' }}
          >
            <CountUpStat value={value} label={label} delay={idx * 200} isVisible={isVisible} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

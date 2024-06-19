import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" mb={4}>
        <Heading as="h1" size="lg">SVENSKA HEM</Heading>
        <HStack spacing={4}>
          <Text>HEM</Text>
          <Text>MÖBLER</Text>
          <Text>SÄNGAR</Text>
          <Text>SOVRUM</Text>
          <Text>BELYSNING</Text>
          <Text>INREDNING</Text>
          <Text>VARUMÄRKEN</Text>
          <Text>INSPIRATION</Text>
          <Text>BUTIKER</Text>
          <FaHeart />
          <FaShoppingCart />
        </HStack>
      </Flex>

      {/* Breadcrumb */}
      <Text mb={4}>HEM &gt; HALLMÖBLER &gt; BYRÅ &gt; ESSENCE BYRÅ</Text>

      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        {/* Product Image Gallery */}
        <Box flex="1">
          <Image src="/images/product-main.jpg" alt="Product Image" mb={4} />
          <HStack spacing={2}>
            <Image src="/images/product-thumb1.jpg" alt="Thumbnail 1" boxSize="50px" />
            <Image src="/images/product-thumb2.jpg" alt="Thumbnail 2" boxSize="50px" />
            <Image src="/images/product-thumb3.jpg" alt="Thumbnail 3" boxSize="50px" />
            <Image src="/images/product-thumb4.jpg" alt="Thumbnail 4" boxSize="50px" />
          </HStack>
        </Box>

        {/* Product Details */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={2}>ESSENCE - Byrå</Heading>
          <Text fontSize="lg" mb={2}>Massiv ek Oljad, Varmgrå</Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.500" mb={2}>9 995 kr <Text as="span" textDecoration="line-through" color="gray.500">12 495 kr</Text></Text>
          <Button colorScheme="pink" mb={4}>Betala SEK1 764,19/månad i 6 månader. Läs mer</Button>
          <Button colorScheme="gray" size="lg" mb={4}>Lägg i varukorgen</Button>
          <Text mb={2}>1-3 veckor / Expressleverans kan erbjudas</Text>
          <Text mb={2}>Fri frakt till butik</Text>
          <Text mb={4}>36 butiker</Text>
          <Text mb={4}>
            ESSENCE byrå har en tidlös design med sitt eleganta formspråk och diskreta detaljer. Med stommar i en varmgrå kulör och lådfronter i massiv oljad ek skapar den ett varmt och trendigt intryck i inredningen. Utöver det estetiska har byrån, med sina fyra stora och två mindre lådor, gott om förvaring för alla dina saker.
          </Text>
        </Box>
      </Flex>

      {/* Additional Sections */}
      <Box mt={8}>
        <Heading as="h3" size="md" mb={2}>SPECIFIKATIONER</Heading>
        <Text mb={4}>Detaljerad information om produkten.</Text>
        <Heading as="h3" size="md" mb={2}>SKÖTSELRÅD</Heading>
        <Text mb={4}>Information om hur du tar hand om produkten.</Text>
        <Heading as="h3" size="md" mb={2}>DOKUMENT</Heading>
        <Text mb={4}>Ladda ner produktdokument.</Text>
      </Box>
    </Container>
  );
};

export default Index;
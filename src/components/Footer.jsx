/* eslint-disable react/prop-types */

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Image
      cursor={"pointer"}
      onClick={() => window.open("https://medialab.uy", "_blank")}
      src="https://media.discordapp.net/attachments/990652909534449714/1221558532034396210/LogoOnlyText.webp?ex=66130409&is=66008f09&hm=e66c9b712e3e5cd7cb0e50eaf6df2265b7bd474832e1f581f9d806d39bad1c12&=&format=webp"
      w="60%"
    />
  );
};

const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© {currentYear} MediaLab Solutions.</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Producto</ListHeader>
            <Box as="a" href={"#"}>
              MeliSync
            </Box>
            <Box as="a" href={"#"}>
              Beneficios
            </Box>
            <Box as="a" href={"#"}>
              Contacto
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Compania</ListHeader>
            <Box as="a" href={"https://medialab.uy"}>
              MediaLab Solutions
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contacto</ListHeader>
            <Box as="a" href={"https://medialab.uy"}>
              MediaLab Solutions
            </Box>
            <Box as="a" href={"https://wa.link/g8uvwa"}>
              WhatsApp
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Redes Sociales</ListHeader>
            <Box as="a" href={"https://www.instagram.com/medialab.solutions/"}>
              Instagram
            </Box>
            <Box as="a" href={"https://wa.link/g8uvwa"}>
              WhatsApp
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

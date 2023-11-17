/* eslint-disable react/prop-types */

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const Logo = () => {
  return (
    <Image src='https://media.discordapp.net/attachments/576208504226971648/1174654113762517072/LogoOnlyText.png?ex=656860e4&is=6555ebe4&hm=9322152bef9eac7c797cda18efcfb3affffa6b028bb871453cb3d0a49d44433e' w='60%'/>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2023 MediaLab Solutions.</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Producto</ListHeader>
            <Box as="a" href={'#'}>
              MeliSync
            </Box>
            <Box as="a" href={'#'}>
              Beneficios
            </Box>
            <Box as="a" href={'#'}>
              Contacto
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Compania</ListHeader>
            <Box as="a" href={'https://medialab.uy'}>
              MediaLab Solutions
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contacto</ListHeader>
            <Box as="a" href={'https://medialab.uy'}>
              MediaLab Solutions
            </Box>
            <Box as="a" href={'https://wa.link/g8uvwa'}>
              WhatsApp
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociales</ListHeader>
            <Box as="a" href={'https://www.instagram.com/medialab.solutions/'}>
              Instagram
            </Box>
            <Box as="a" href={'https://wa.link/g8uvwa'}>
              WhatsApp
            </Box>
           
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
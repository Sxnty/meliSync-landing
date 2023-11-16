/* eslint-disable react/prop-types */
'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      bg={useColorModeValue('gray.200', 'gray.900')}
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}
//https://wa.link/g8uvwa

export default function ThreeTierPricing() {
  return (
    <Box py={12} bg={useColorModeValue('gray.200', 'gray.500')}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Nuestros Planes
        </Heading>
        <Text fontSize='lg' color={'gray.500'}>
          Los planes son de libre permanencia, pueden cancelar cuando deseen.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              Basico
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='3xl' fontWeight='600'>
                $
              </Text>
              <Text fontSize='5xl' fontWeight='900'>
                12
              </Text>
              <Text fontSize='3xl' color='gray.500'>
                /mes
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Una Cuenta de MercadoLibre.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Una plataforma conectada.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                50 Publicaciones por mes.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Soporte 24/7.
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button w='full' colorScheme='cyan' variant='outline' onClick={() => window.open('https://wa.link/g8uvwa', '_blank')}>
                Adquirir
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper >
          <Box position='relative' >
            <Box
              position='absolute'
              top='-16px'
              left='50%'
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform='uppercase'
                bg={useColorModeValue('cyan.300', 'cyan.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize='sm'
                fontWeight='600'
                rounded='xl'
              >
                Más Vendido
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='2xl'>
                Avanzado
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='3xl' fontWeight='600'>
                  $
                </Text>
                <Text fontSize='5xl' fontWeight='900'>
                  20
                </Text>
                <Text fontSize='3xl' color='gray.500'>
                  /mes
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Hasta dos cuentas de Mercado Libre.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Una plataforma conectada.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  100 Publicaciones por mes.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Soporte 24/7.
                </ListItem>
                <ListItem>
                  <Text fontWeight='bold'>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Reportes diarios y semanales de ventas.
                  </Text>
                </ListItem>
              </List>
              <Box w='80%' pt={7}>
                <Button w='full' colorScheme='cyan' color='white' variant={useColorModeValue('solid', 'outline')} onClick={() => window.open('https://wa.link/g8uvwa', '_blank')} >
                 Adquirir
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='2xl'>
              Profesional
            </Text>
            <Text fontSize='lg'>
              Desde
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='3xl' fontWeight='600'>
                $
              </Text>
              <Text fontSize='5xl' fontWeight='900'>
                30
              </Text>
              <Text fontSize='3xl' color='gray.500'>
                /mes
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12} >
              <ListItem >
                <ListIcon as={FaCheckCircle} color='green.500' />
                Hasta 10 cuentas de MercadoLibre.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Hasta 20 Integraciones.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Soporte Personalizado 24/7.
              </ListItem>
              <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' />
                Sin limite de publicaciones.
                </ListItem>
              <ListItem>
                  <Text fontWeight='bold'>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Reportes diarios y semanales de ventas.
                  </Text>
                </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button w='full' colorScheme='cyan' variant='outline' onClick={() => window.open('https://wa.link/g8uvwa', '_blank')}>
                Adquirir
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}

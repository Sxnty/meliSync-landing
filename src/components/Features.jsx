/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4} bg={useColorModeValue('gray.100', 'gray.700')} py='5rem'>
      <Stack spacing={4} as={Container} maxW={'full'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Beneficios
        </Heading>
        <Text
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={{ base: 'sm', sm: 'lg' }}
          w
        >
          Descubre cómo nuestra plataforma simplifica, optimiza y potencia tu
          negocio para que alcances tus metas sin complicaciones.
        </Text>
      </Stack>

      <Container maxW={'full'} mt={12}>
        <Flex flexWrap='wrap' gridGap={'2rem'} justify='center'>
          <Card
            heading={'Optimización Total'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              'Unifica y optimiza tu eCommerce en tiempo real. Gestiona inventario y precios sin complicaciones.'
            }
            href={'#'}
          />
          <Card
            heading={'Aumenta la Eficiencia'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'Automatización inteligente para liberarte de tareas repetitivas. Enfócate en hacer crecer tu negocio.'
            }
            href={'#'}
          />
          <Card
            heading={'Maximiza tu Alcance'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Sincroniza tu catálogo fácilmente en Mercado Libre, Woocommerce, Wix y Shopify. Alcanza nuevos mercados sin complicaciones.'
            }
            href={'#'}
          />
          <Card
            heading={'Soporte Personalizado 24/7'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Recibe atención personalizada en cualquier momento. Nuestro equipo está disponible las 24 horas, los 7 días de la semana.'
            }
            href={'#'}
          />
          <Card
            heading={'Escalabilidad sin limites'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              'Haz crecer tu negocio sin preocupaciones. Nuestra plataforma se adapta a tus necesidades, sin límites de escalabilidad.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}

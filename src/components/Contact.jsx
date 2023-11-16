'use client';

import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { contactMessage } from '../utils/discordLog';
import { toast } from 'react-hot-toast';

export default function JoinOurTeam() {
  const [contactForm, setContactForm] = useState({});

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack
          spacing={{ base: 10, md: 20 }}
          alignItems='center'
          justifyContent='center'
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            ¿Alguna Consulta?
            <Text
              as={'span'}
              bgGradient='linear(to-r, cyan.400,pink.400)'
              bgClip='text'
            >
              ¿Que estas esperando?
            </Text>{' '}
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Formulario de Contacto
              <Text
                as={'span'}
                bgGradient='linear(to-r, cyan.400,pink.400)'
                bgClip='text'
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              ¡Hablemos de tu tienda en línea! Deja tus datos y nos pondremos en
              contacto a la brevedad.
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder='Nombre Completo'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => {
                  setContactForm({ ...contactForm, name: e.target.value });
                }}
              />
              <Input
                placeholder='correo@electronico.com'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => {
                  setContactForm({ ...contactForm, email: e.target.value });
                }}
              />
              <Input
                placeholder='+(598) __-___-___'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                type='number'
                onChange={(e) => {
                  setContactForm({ ...contactForm, number: e.target.value });
                }}
              />
              <Textarea
                placeholder='Mensaje'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                resize='none'
                onChange={(e) => {
                  setContactForm({ ...contactForm, message: e.target.value });
                }}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient='linear(to-r, cyan.400,pink.400)'
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, cyan.400,pink.400)',
                boxShadow: 'xl',
              }}
              onClick={() => {
                contactMessage(contactForm);
                if (contactMessage) {
                  toast.success('Formulario enviado con exito!');
                }
              }}
            >
              Enviar
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}

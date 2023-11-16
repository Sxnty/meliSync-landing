import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Input,
} from '@chakra-ui/react';
import Nav from '../components/Navbar';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { toast, Toaster } from 'react-hot-toast';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { contactMessage, discordReport } from '../utils/discordLog';
import SucessModal from '../components/SucessModal';

export default function CallToActionWithIllustration() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailContact, setEmailContact] = useState('');

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  console.log(code);

  useEffect(() => {
    if (code) {
      onOpen();
      discordReport(code);
    }
  }, [code]);

  return (
    <>
      <Nav />
      <Container maxW={'5xl'}>
        <SucessModal isOpen={isOpen} onClose={onClose} code={code} />
        <Toaster />
        <Flex height={'100vh'} alignItems={'center'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 15 }}
          >
            <Heading
              fontSize='5rem'
              border='1px solid white'
              p='1rem'
              rounded='lg'
            >
              Meli
              <Text as='span' color='cyan.400'>
                Sync
              </Text>
            </Heading>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Sincronizar MercadoLibre con{' '}
              <Text as={'span'} color={'cyan.400'}>
                WooCommerce, Shopify y Wix
              </Text>
            </Heading>

            <Text color={'gray.500'} maxW={'2xl'}>
              Olvídate de malabares entre múltiples plataformas; centraliza tu
              negocio y ahorra tiempo. <br />
              ¡La practicidad que tu tienda merece!
            </Text>
            <Stack spacing={6} direction={'row'}>
              <Input
                placeholder='Numero o correo electronico'
                type='text'
                onChange={(e) => setEmailContact(e.target.value)}
              />
              <Button
                p='1rem 2rem'
                colorScheme={'cyan'}
                bg={'cyan.400'}
                _hover={{ bg: 'cyan.500' }}
                color='white'
                onClick={() => {
                  contactMessage({ email: emailContact + ' Email' });
                  if (contactMessage) {
                    toast.success('Mensaje enviado correctamente');
                  }
                }}
              >
                Mas Información
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

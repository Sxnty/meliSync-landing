import {
  Box,
  Flex,
  // Image,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Text,
} from '@chakra-ui/react';
import { GoMoon, GoSun } from 'react-icons/go';
import { Link } from 'react-router-dom';
/* const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};
 */
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        w='100%'
        bg='red.600'
        justifyContent='center'
        alignItems='center'
        py='.4rem'
      >
        <Text fontWeight='bold' fontSize='1rem' color='white'>
          ¡Calienta tu verano con un descuento exclusivo! Las primeras 15
          empresas obtienen un 20% OFF.
        </Text>
      </Flex>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        position={'absolute'}
        w={'100%'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to={'/'}>
            <Heading color={'cyan.500'}>MeliSync</Heading>
          </Link>
          {/*             <Image
            src={
              'https://cdn.discordapp.com/attachments/576208504226971648/1174654113762517072/LogoOnlyText.png?ex=656860e4&is=6555ebe4&hm=9322152bef9eac7c797cda18efcfb3affffa6b028bb871453cb3d0a49d44433e&'
            }
            w={{ base: '35%', md: '10%' }}
          /> */}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <GoMoon /> : <GoSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

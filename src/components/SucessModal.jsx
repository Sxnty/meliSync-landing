/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Heading,
  Divider
} from '@chakra-ui/react';

import { useState } from 'react';

const SucessModal = ({ isOpen, onClose, code }) => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'4xl'}>
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent>
        <ModalHeader>Finalizar Integración</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Text>
            ¡Estás a punto de completar la integración y comenzar a ahorrar
            tiempo! Solo falta un paso. ¡Estamos casi allí! 🚀
          </Text>

          <Divider my='1rem'/>

          <Text>
            Si te piden un código de acceso, asegúrate de proporcionarles el
            siguiente código:
          </Text>

          <Heading>{isVisible ? code : '******'}</Heading>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='linkedin'
            mr={3}
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {isVisible ? 'Ocultar Codigo' : 'Mostrar Codigo'}
          </Button>
          <Button onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SucessModal;

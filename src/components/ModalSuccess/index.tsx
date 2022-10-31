import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button as ChakraButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ModalSuccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🎉Compra Exitosa!🎊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Te enviaremos un email al correo que ingresaste o puedes
              contactarnos a través de whatsapp{" "}
            </Text>
          </ModalBody>

          <ModalFooter>
            <ChakraButton
              colorScheme="green"
              mr={3}
              // onClick={onClose}
            >
              Cerrar
            </ChakraButton>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default ModalSuccess;

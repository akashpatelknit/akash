import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home',onclose }) => {
  return (
    <Link to={url} onClick={onclose}>
      <Button  variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />
      <Button
        width={'12'}
        height={'12'}
        rounded={'full'}
        // position={'fixed'}
        top={'6'}
        left={'6'}
        colorScheme='linkedin'
        onClick={onOpen}
       
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose} 
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={'10'} alignItems={['center','center']}
              justifyContent={'center'}   
              mt={'10rem'}   
             
            >
              <LinkButton onclose={onClose}  url="/" title="Home" />
              <LinkButton onclose={onClose} url="/courses" title="All Projects" />
              <LinkButton onclose={onClose} url="/contact" title="Contact " />
              <LinkButton onclose={onClose} url="/about" title="About Me" />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
              >
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

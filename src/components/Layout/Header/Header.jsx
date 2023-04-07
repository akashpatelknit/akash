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
import { RiDashboard2Fill, RiLoginBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home',onclose }) => {
  return (
    <Link to={url} onClick={onclose}>
      <Button  variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {
  const isAuthenticated = false;
  
  const user={
    role:'admin'
  }

  const logoutHandler=()=>{
    console.log('logout')
  }

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />
      <Button
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        colorScheme='linkedin'
        onClick={onOpen}
        // fontSize={'1.3rem'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={['center','flex-start']}>
              <LinkButton onclose={onClose} url="/" title="Home" />
              <LinkButton onclose={onClose} url="/courses" title="All Projects" />
              <LinkButton onclose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onclose={onClose} url="/about" title="About Us" />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button colorScheme="yellow" variant={'ghost'}>Profile</Button>
                        </Link>
                        <Button  variant={'ghost'} onClick={logoutHandler}>
                          <RiLoginBoxLine/>
                          Logout</Button>
                      </HStack>
                      {
                        user && user.role==='admin' && <Link>
                        <Button>
                          <RiDashboard2Fill/>
                          Dashboard
                        </Button>
                        </Link>
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    {/* <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>Or</p>
                    <Link to="/signup">
                      <Button colorScheme="green">SignUp</Button>
                    </Link> */}
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

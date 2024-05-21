import React from 'react';
import { Box, Flex, Link, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems="center">
          <Box fontSize="2xl" fontWeight="bold" color="white">Outreach Tool</Box>
        </Flex>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7} display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/" color="white">Home</Link>
            <Link as={RouterLink} to="/search" color="white">Search</Link>
            <Link as={RouterLink} to="/messages" color="white">Messages</Link>
            <Link as={RouterLink} to="/settings" color="white">Settings</Link>
          </Stack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
            <Link as={RouterLink} to="/search" onClick={onClose}>Search</Link>
            <Link as={RouterLink} to="/messages" onClick={onClose}>Messages</Link>
            <Link as={RouterLink} to="/settings" onClick={onClose}>Settings</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
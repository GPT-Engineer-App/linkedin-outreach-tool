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
          <Box color="white" fontWeight="bold" fontSize="xl">Outreach Tool</Box>
        </Flex>
        <Flex alignItems="center">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.600' }} color="white">
              Home
            </Link>
            <Link as={RouterLink} to="/search" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.600' }} color="white">
              Search
            </Link>
            <Link as={RouterLink} to="/messages" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.600' }} color="white">
              Messages
            </Link>
            <Link as={RouterLink} to="/settings" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.600' }} color="white">
              Settings
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
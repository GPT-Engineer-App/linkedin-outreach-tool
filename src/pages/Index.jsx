import React, { useState } from 'react';
import { Box, Button, Checkbox, Flex, Input, Text, Textarea, VStack, useBreakpointValue } from '@chakra-ui/react';
import { FaSearch, FaPaperPlane } from 'react-icons/fa';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = () => {
    // Mock search results
    const mockResults = [
      { id: 1, first_name: 'John', last_name: 'Doe' },
      { id: 2, first_name: 'Jane', last_name: 'Smith' },
      { id: 3, first_name: 'Alice', last_name: 'Johnson' },
    ];
    setMatches(mockResults);
  };

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleSendMessages = () => {
    selectedUsers.forEach((userId) => {
      const user = matches.find((user) => user.id === userId);
      const personalizedMessage = message.replace('{first_name}', user.first_name);
      console.log(`Sending message to ${user.first_name} ${user.last_name}: ${personalizedMessage}`);
      // Add logic to send message
    });
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8, lg: 16 })}>
      <VStack spacing={4}>
        <Flex>
          <Input
            placeholder="Search for people"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch} ml={2}>
            <FaSearch />
          </Button>
        </Flex>
        <Textarea
          placeholder="Enter your message here. Use {first_name} as a placeholder."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <VStack spacing={2} align="start">
          {matches.map((user) => (
            <Flex key={user.id} align="center">
              <Checkbox
                isChecked={selectedUsers.includes(user.id)}
                onChange={() => handleCheckboxChange(user.id)}
              />
              <Text ml={2}>{user.first_name} {user.last_name}</Text>
            </Flex>
          ))}
        </VStack>
        <Button onClick={handleSendMessages} colorScheme="blue" leftIcon={<FaPaperPlane />}>
          Send Messages
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
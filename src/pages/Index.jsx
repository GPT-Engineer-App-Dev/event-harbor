import { Box, Container, Heading, VStack, Text, Flex, Spacer, Button, HStack } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Header */}
        <Flex w="100%" p={4} bg="blue.500" color="white" align="center">
          <Heading as="h1" size="lg">
            Events Management
          </Heading>
          <Spacer />
          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
        </Flex>

        {/* Upcoming Events Section */}
        <Box w="100%" p={4} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="md" mb={4}>
            Upcoming Events
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <HStack spacing={4}>
                <FaCalendarAlt />
                <Text>Event 1: Conference on Web Development</Text>
              </HStack>
              <Text>Date: 2023-10-15</Text>
              <Text>Location: New York, NY</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <HStack spacing={4}>
                <FaCalendarAlt />
                <Text>Event 2: React Summit</Text>
              </HStack>
              <Text>Date: 2023-11-20</Text>
              <Text>Location: San Francisco, CA</Text>
            </Box>
          </VStack>
        </Box>

        {/* Footer */}
        <Flex w="100%" p={4} bg="blue.500" color="white" align="center" justify="center">
          <Text>&copy; 2023 Events Management. All rights reserved.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
import { VStack, Box, Text } from "@chakra-ui/react";

function MoodLog({ entries }) {
  return (
    <VStack align="stretch" spacing={4}>
      {entries.length === 0 ? (
        <Text color="gray.500">No moods logged yet. 😶</Text>
      ) : (
        entries.map(({ id, mood, note, date }) => (
          <Box
            key={id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
          >
            <Text fontSize="2xl">{mood}</Text>
            <Text fontSize="sm" color="gray.500">
              {date}
            </Text>
            {note && <Text mt={2}>{note}</Text>}
          </Box>
        ))
      )}
    </VStack>
  );
}

export default MoodLog;
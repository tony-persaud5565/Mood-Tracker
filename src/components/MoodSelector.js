import { useState } from 'react';
import { HStack, Button, Input, VStack} from '@chakra-ui/react';

const moods = ["😊", "😔", "😠", "😐", "😴"];


function MoodSelector({ onAddMood }) {
    const [selected, setSelected] = useState("");
    const [note, setNote] = useState("");
  
    const handleSubmit = () => {
      if (!selected) return;
      onAddMood(selected, note);
      setSelected("");
      setNote("");
    };
  
    return (
      <VStack spacing={4} align="stretch" mb={6}>
        <HStack>
          {moods.map((mood) => (
            <Button
              key={mood}
              onClick={() => setSelected(mood)}
              variant={selected === mood ? "solid" : "outline"}
              colorScheme="teal"
            >
              {mood}
            </Button>
          ))}
        </HStack>
        <Input
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button onClick={handleSubmit} colorScheme="teal">
          Add Mood
        </Button>
      </VStack>
    );
  }
  
  export default MoodSelector;
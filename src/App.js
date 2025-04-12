import { useState } from 'react';
import {Box, Heading} from '@chakra-ui/react';
import MoodSelector from './components/MoodSelector.js';
import MoodLog from './components/MoodLog.js';


function App () {

    const [entries, setEntries] = useState([]);

    const handleAddMood =(mood, note)=> {
        const newEntry = {
            id: Date.now(),
            mood,
            note,
            date: new Date().toLocaleString(),
        };
            setEntries([newEntry, ...entries]);
        };
        return (
            <Box p={(4)}>
            <Heading mb={4} textAlign ='center'>Mood Tracker</Heading>
            <MoodSelector onAddMood = {handleAddMood} />
            <MoodLog entries = {entries} />
            </Box>
        )
    }

    export default App;
// ./Components/Lyrics.js
// Ici, sera l'activité qui présentera la chanson et ses paroles

import React from 'react';
import {
    Text, Heading, Box, VStack, HStack, FlatList
} from 'native-base';

import data from '../DataBase/songs';

function Lyrics (props){
    const header=props.navigation.getParent(),
        [recueil, cant]=props.route.params.ref;
    
    header.setOptions({headerShown: false});

    let song = data[recueil].songs[cant];
    props.navigation.setOptions({headerTitle : props => <Text>{song.title}</Text>});
    
    return (
        <Box m={1}>
            <VStack>
                <HStack>
                    <Heading size='sm' mr={2}>{song.n+'.'}</Heading>
                    <Heading size='sm'>{song.title}</Heading>
                </HStack>
                
                <FlatList
                    mx={2}
                    mt={3}
                    data={song.lyrics}
                    keyExtractor={(item)=>(item.split("\\n")[0])}
                    renderItem={({item, index})=>(
                        <Text textAlign='center' mb={4}>{item}</Text>
                    )}/>

                <Box m={2}>
                    <Text fontStyle="italic">{song.author}</Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default Lyrics;
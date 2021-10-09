// ./Components/Home.js
// Page d'accueil de l'application

import React from 'react'
import {
    Text, Box, VStack, HStack, InputGroup, Input, Icon, IconButton, FlatList, Pressable, Center,
    Heading
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';

import songs from '../DataBase/songs';
import {gridAutoColumns} from 'styled-system';

const data = songs[0].songs;

function Song ({item}){
    return (
        <Pressable
            onPress={()=>{console.log("Hello word !")}}
        >
            <Box>
                <HStack>
                    <Box flex={1}>
                        <Heading size='md'>{item.n}</Heading>
                    </Box>
                    <Box flex={5}>
                       <VStack>
                            <Heading size='sm'>{item.title}</Heading>
                            <Text fontFamily='fantasy' fontStyle='italic'>{item.author}</Text>  
                        </VStack> 
                    </Box>
                </HStack>
            </Box>
        </Pressable>
    )
}

function Home (props){
    return (
        <Box safeArea>
            <VStack>
                <HStack mb={3} pb={2} shadow={5}>
                    <Input placeholder='title'
                        mx={2}
                        isFullWidth={true}
                        InputRightElement={<Icon as={<MaterialIcons name='search'/>}/>}/>
                </HStack>
                
                <HStack marginTop='md'>
                    <FlatList 
                        data={data}
                        renderItem={Song}/>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Home;
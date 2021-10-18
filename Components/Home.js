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

const Song = function (props){
    return (
        <Pressable
            onPress={()=>{
                props.navigation.navigate('Lyrics', {ref: props.item.ref})
                }}
        >
            <Box>
                <HStack>
                    <Box flex={1}>
                        <Heading size='md'>{props.item.n}</Heading>
                    </Box>
                    <Box flex={5}>
                       <VStack>
                            <Heading size='sm'>{props.item.title}</Heading>
                            <Text fontFamily='cursive' fontStyle='italic'
                                fontSize='xs' color='grey'>{props.item.author}</Text>  
                        </VStack> 
                    </Box>
                </HStack>
            </Box>
        </Pressable>
    )
}

const Home = function (props){
    props.navigation.addListener('focus', ()=>{
        props.navigation.getParent().setOptions({headerShown : true});
    });

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
                        keyExtractor={item => item.id}
                        renderItem={(params)=> <Song {...params} {...props}/>}/>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Home;
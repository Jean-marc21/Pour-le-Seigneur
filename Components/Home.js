// ./Components/Home.js
// Page d'accueil de l'application

import React from 'react'
import {Text, Box, VStack, HStack, InputGroup, Input, Icon, IconButton, FlatList} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function Home (props){
    return (
        <Box safeArea>
            <VStack>
                <HStack>
                    <InputGroup>
                        <Input />
                        <IconButton
                            icon={<Icon as={<MaterialCommunityIcons name="research"/>}/>}/>
                    </InputGroup>
                </HStack>

                <HStack>
                    <Text>Les chansons</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Home;
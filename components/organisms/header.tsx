import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'

type HeaderType = {
    active: string
    pt: string
}

function Headers({ pt, active }: HeaderType) {
    return (
        <Flex pt={pt}>
            <Box pl={{ base: '10px', md: '20px', lg: '20px' }}>
                <Image src='/images/logo.png' w={{ base: '100px', md: '200px', lg: '200px' }} />
            </Box>
            <Spacer minW={{ base: '50px', md: '0px', lg: '0px' }} />
            <Nav active={active} pr={{ base: '10px', md: '20px', lg: '20px' }} />
        </Flex>
    )


}

export default Headers
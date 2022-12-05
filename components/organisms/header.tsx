import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'

type HeaderType = {
    active: string
    pt: string
}

function Headers({ pt, active }: HeaderType) {
    return (
        <Flex pt={pt}>
            <Box pl={{ base: '5', md: '12', lg: '15' }}>
                <Image src='/images/logo.png' w={200} />
            </Box>
            <Spacer minW={{ base: '50px', md: '0px', lg: '0px' }} />
            <Nav active={active} pr={{ base: '5', md: '12', lg: '15' }} />
        </Flex>
    )


}

export default Headers
import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'

type HeaderType = {
    active: string
    pt: string
}

function Headers({ pt, active }: HeaderType) {
    return (
        <Flex pt={pt}>
            <Box pl="10">
                <Image src='/images/logo.png' w={200} />
            </Box>
            <Spacer />
            <Nav active={active} pr='10' />
        </Flex>
    )


}

export default Headers
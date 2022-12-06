import { Flex, Box, Spacer, Image } from '@chakra-ui/react'
import Nav from '../molecules/nav'
import Menus from './menu'

type HeaderType = {
    active: string
    pt: string
}

let windouWidth = 1500
if (typeof window !== 'undefined') {
    windouWidth = window.innerWidth
    console.log(windouWidth)
}

function Headers({ pt, active }: HeaderType) {
    let menu = null
    if (windouWidth < 600) {
        menu = <Menus pr={{ base: '10px', md: '20px', lg: '20px' }} />
    }
    else {
        menu = <Nav active={active} pr={{ base: '10px', md: '20px', lg: '20px' }} />
    }

    return (
        <Flex pt={pt}>
            <Box pl={{ base: '10px', md: '20px', lg: '20px' }}>
                <Image src='/images/logo.png' w={{ base: '100px', md: '200px', lg: '200px' }} />
            </Box>
            <Spacer minW={{ base: '50px', md: '0px', lg: '0px' }} />
            {menu}
        </Flex>
    )


}

export default Headers

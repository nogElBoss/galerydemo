import { Flex, Box, Spacer, Image, useMediaQuery } from '@chakra-ui/react'
import Nav from '../molecules/nav'
import Menus from './menu'



type HeaderType = {
    active: string
    pt: string
}

function Headers({ pt, active }: HeaderType) {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    let menu = null
    if (!isLargerThan1280) {
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

import { HamburgerIcon } from "@chakra-ui/icons"
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

type MenusType = {
    pr: {}
}

function Menus({ pr }: MenusType) {
    return (
        <Menu>
            <MenuButton pr={pr}>
                <Icon as={HamburgerIcon} boxSize="30px" color="white" />
            </MenuButton>
            <MenuList w="full" borderRadius={0} bgColor="#111111" borderColor="#111111" fontFamily="Bodoni TM">
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    HOME
                </MenuItem>
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    GALLERY
                </MenuItem>
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    CONTACT
                </MenuItem>
            </MenuList>
        </Menu >
    )
}
export default Menus

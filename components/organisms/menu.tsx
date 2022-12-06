import { HamburgerIcon } from "@chakra-ui/icons"
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import Link from "next/link"
import Links from "../atoms/link"

type MenusType = {
    pr: {}
}

function Menus({ pr }: MenusType) {
    return (
        <Menu>
            <MenuButton pr={pr}>
                <Icon as={HamburgerIcon} boxSize="30px" color="white" />
            </MenuButton>
            <MenuList w="full" borderRadius={0} bgColor="#111111" borderColor="#111111">
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    <Links href={"/"} color={"white"} text={"HOME"} />
                </MenuItem>
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    <Links href={"/gallery"} color={"white"} text={"GALLERY"} />
                </MenuItem>
                <MenuItem
                    bgColor="#111111"
                    color="whiteAlpha.900"
                    _hover={{
                        backgroundColor: "#222222",
                    }}
                >
                    <Links href={"/contact"} color={"white"} text={"CONTACT"} />
                </MenuItem>
            </MenuList>
        </Menu >
    )
}
export default Menus

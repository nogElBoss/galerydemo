import { Link } from '@chakra-ui/react'
import Texts from './text'

type Links = {
    color: string
    href: string
    text: string
}


function Links({ color, href, text }: Links) {
    return (
        <Link color={color} href={href} _hover={{
            textDecoration: "none",
        }}>
            <Texts color={color} text={text} />
        </Link>
    )


}

export default Links
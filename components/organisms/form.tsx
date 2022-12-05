import { Input, InputGroup, } from '@chakra-ui/react'
import Buttons from '../atoms/button'
import Inputs from "../atoms/input"

type InputType = {
    margin: string


}


function Forms({ margin }: InputType) {
    return (
        <form action="/api/signup" method="post">
            <Inputs width="full" color="white" placeholder="NAME" type='text' margin={margin} />
            <Inputs width="full" color="white" placeholder="EMAIL" type="email" margin={margin} />
            <Inputs width="full" color="white" placeholder="MESSAGE" type="text" margin={margin} />
            <Buttons label="SEND MESSAGE" width="full" />
        </form>
    )


}

export default Forms
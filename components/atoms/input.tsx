import { Input } from '@chakra-ui/react'

type InputType = {
    width: string
    color: string
    placeholder: string
    type: string
    margin: string

}


function Inputs({ width, color, placeholder, type, margin }: InputType) {
    return (
        <Input
            fontFamily="Bodoni MT"
            fontWeight="light"
            fontSize="20px"
            mb={margin}
            type={type}
            minW="100px"
            width={width}
            variant='outline'
            placeholder={placeholder}
            borderRadius={0}
            borderWidth="3px"
            color={color}
            focusBorderColor={color}
            _placeholder={{
                color: "white",
            }}

        />
    )


}

export default Inputs
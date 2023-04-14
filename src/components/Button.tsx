import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
type Props = IButtonProps & {
    tittle:string
}

export function Button({tittle, ...rest}: Props) {
  return (
    <ButtonNativeBase
        bgColor="pink.400"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{bg:"pink.900"}}
        mt={5}
        {...rest}>
        <Heading
            color="gray.100"
            fontSize="md"

        >{tittle}</Heading>
    </ButtonNativeBase>
    
  );
  
}
import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input } from "@chakra-ui/react";

const Login = () => { 
    return (
        <VStack
            as="form"
            w={{ base: "90", md: "500px" }}
            m="auto"
            justify="center"
            h="100vh">
        
        <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input name="username" placeholder="Enter username" autoComplete="off" />
            <FormErrorMessage>Invalid username</FormErrorMessage>

            </FormControl>
            
        <FormControl>
            <FormLabel>PassWord</FormLabel>
            <Input name="password" placeholder="Enter Password" autoComplete="off" />
            <FormErrorMessage>Invalid Password</FormErrorMessage>

        </FormControl>

        <ButtonGroup>
            <Button colorScheme="teal" type="submit">Login</Button>
                <Button>Login</Button>
                <Button>Create Acoount</Button>
        </ButtonGroup>
    </VStack>
    );
};
export default Login;

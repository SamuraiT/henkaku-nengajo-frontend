import { useState } from 'react'
import type { NextPage } from 'next'
import {
  Box,
  Container,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useMounted } from '../hooks'
import { Connect } from '../components/Connect'
import { useAccount } from 'wagmi'

const Home: NextPage = () => {
  const isMounted = useMounted()
  const { address, isConnected } = useAccount()

  const submitGenerateImage = async () => {
    console.log('submitGenerateImage')
  }
  const handleImageChange = async (e: any) => {
    console.log(e.target.value)
  }

  return (
    <Box>
      <Container maxW="container.sm" mt="4em">
        <Heading as="h1" size="4xl">
          Henkaku Nengajo
        </Heading>
        {isMounted && (
          <Box mt="2em">
            <Connect />
          </Box>
        )}
        {isMounted && isConnected && (
          <>
            <Heading as="h2" color="white.600">
              Register a new nengajo
            </Heading>
            <FormControl color="white.700">
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="imageFile">Picture</FormLabel>
                <Input
                  variant="outline"
                  id="imageFile"
                  type="file"
                  accept={'image/*'}
                  isRequired={true}
                  placeholder="Your nengajo"
                  name="profilePicture"
                  onChange={handleImageChange}
                />
              </FormControl>
              <Button
                mt={10}
                colorScheme="green"
                type="submit"
                onClick={submitGenerateImage}
              >
                Register
              </Button>
            </FormControl>
          </>
        )}
      </Container>
    </Box>
  )
}

export default Home
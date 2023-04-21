import { Box , Image,Text } from '@chakra-ui/react'
import React from 'react'

const Ads = ({data}) => {
   
  return (
    <Box color="white" key={data._id} bg="gray" borderRadius="10px" _hover={{
        transform: 'scale(1.2)' ,
        transition: 'all 0.2s ease-in-out',
        color:"gold"
      }}
     padding="10px" textAlign="center" boxShadow="2xl" >
        <Image height={[ "200px" ,"200px", "300px", "300px"]} width="100%" src={data.imageUrl} alt={data.name} />
        <Text fontWeight="bold" fontSize="2xl">{data.name}</Text>
      </Box>
  )
}

export default Ads

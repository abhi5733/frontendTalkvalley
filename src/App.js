import logo from './logo.svg';
import './App.css';
import { Box, Button, Flex, Grid, Image, Input , Text } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios"
function App() {

  const[query,setQuery] = useState("")
const[data,setData] = useState([])


  const handleSubmit = ()=>{
  axios.get("https://beautiful-bull-crown.cyclic.app/",{
    params:{name:query}
  }).then((res)=>{console.log(res);setData(res.data)})
  .catch((err)=>console.log(err))
    setQuery("")
  }



  return (
    <Box position="fixed" top="0" right="0" bottom="0" left="0" overflow="auto" bg="gray.100"  >

<Flex borderRadius="20px" bgColor="white" padding="10px" width="400px" margin="auto" mt="100px"> 
    <Input border="1px solid blue" value={query} type="text" onChange={(e)=>setQuery(e.target.value)} />
  <Button bgColor="blue" _hover={{bgColor:"blue.300"}} color="white" onClick={handleSubmit} >Search</Button>   
  </Flex>
    
<Grid gap="10px" width="80%"  margin="auto"  mt="100px" gridTemplateColumns="repeat(2,1fr)" > 
{data.length>0?data.map((el)=>{
  
  return <Box bg="white" borderRadius="10px" _hover={{
    transform: 'scale(1.2)' ,
    transition: 'all 0.2s ease-in-out'
  }}
 padding="10px" textAlign="center" boxShadow="2xl" >
    <Image height="300px" width="100%" src={el.imageUrl} alt={el.name} />
    <Text fontWeight="bold" fontSize="2xl">{el.name}</Text>
  </Box>

})  :<Box width="100%" ml="450px" fontWeight="bold" fontSize="2xl" >Search something new...</Box> }
</Grid>

    </Box>
  );
}

export default App;

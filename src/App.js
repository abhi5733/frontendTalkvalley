import logo from './logo.svg';
import './App.css';
import { Box, Button, Flex, Grid, Image, Input , Text , useToast } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios"
import Ads from './components/Ads';
function App() {

  const[query,setQuery] = useState("")
const[data,setData] = useState([])

const toast = useToast()

  const handleSubmit = ()=>{
    if(query!==""){
  axios.get("https://beautiful-bull-crown.cyclic.app/",{
    params:{name:query}
  }).then((res)=>{console.log(res);setData(res.data)})
  .catch((err)=>console.log(err))
    setQuery("")
}else{
  toast({
    title: 'enter some queries in search bar.',
   
    status: 'error',
    duration: 2000,
    isClosable: true,
    position:"top"
  })
}
  }



  return (
    <Box position="fixed" top="0" right="0" bottom="0" left="0" overflow="auto" bg="white.100"  >
<Box position="absolute" top="0" right="0" bottom="0" left="0"   height="200px" width="100%" backgroundImage="https://cutewallpaper.org/27/black-gif-wallpaper-tumblr/brooklyn-photo-astronaut-wallpaper-desktop-wallpaper-art-aesthetic-desktop-wallpaper.gif"  > 
<Flex borderRadius="20px" bgColor="white" padding="10px" width={[ "250px" ,"300px" ,  "400px" , "400px"]} margin="auto" mt="100px"> 
    <Input border="1px solid blue" value={query} type="text" onChange={(e)=>setQuery(e.target.value)} />
  <Button bgColor="blue" _hover={{bgColor:"blue.300" , color:"gold"}} color="white" onClick={handleSubmit} >Search</Button>   
  </Flex>
  </Box>
    
<Grid  gap="20px" width={[ "90%", "90%", "80%","80%"]}  margin="auto"  mt="220px" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} > 
 {data.length>0?data.map((el)=>{
 
  return <Ads data={el} />

})  :<Box width="100%" ml={[ "auto" , "auto", "auto","450px"]} fontWeight="bold" fontSize="2xl" >Search something new...</Box> }
</Grid>

    </Box>
  );
}

export default App;

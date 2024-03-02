
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';


const Display = (props) => {
    const {data} = props;

    
  return (
   

    <>
    <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" color="black" fontWeight="600">{data?.location?.name}, {data?.location?.country}</Typography>
    </Box>
    <Box id="display-box" sx={{width:"600px",m:"20px auto",padding:"15px 0px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
    <Stack m={2}>
        <img src={data.current.condition.icon} height="100px" width="100px" />
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1} alignItems="center">
        <Typography fontWeight="bold" color="black">Temperature</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.temp_c}&#176;C / {data.current.temp_f}&#176;F</Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1} alignItems="center">
        <Typography fontWeight="bold" color="black">Condition</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.condition.text}</Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1} alignItems="center">
        <Typography fontWeight="bold" color="black">Wind Speed</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.wind_kph} km/h</Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1}  alignItems="center">
        <Typography fontWeight="bold" color="black">Humidity</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.humidity}%</Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1} alignItems="center">
        <Typography fontWeight="bold" color="black">Cloud Coverage</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.cloud}%</Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mx={2} my={1} spacing={1}  alignItems="center">
        <Typography fontWeight="bold" color="black">Last Updated</Typography>
        <Typography fontWeight="bold" color="black" textAlign="end">{data.current.last_updated}</Typography>
    </Stack>
</Box>
   
    </>
  )
}

export default Display
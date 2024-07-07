import React from 'react'
import {Box , Stack , Typography} from '@mui/material'

function ExerciseVideos({exerciseVideos , name}) {
  return (
    <Box sx={{mt : {lg : '200px' , xs: '20px'}}} p='20px'> 
      <Typography variant='h3' mb= '33px'>
        Watch <span style={{color : '#ff2625' , textTransform : 'capitalize'}}>{name}</span>  exercise Videos 
      </Typography>
        <Stack justifyContent='flex-start' flexWrap= 'wrap' alignItems='center'
            sx={{flexDirection : {lg : 'row'} , gap : {lg : '110px' , xs : '0px'}}}
        >
            {exerciseVideos?.slice(0,6).map((item , index) => (
                <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  className='exercise-video'
                  target='_blank'
                  rel='noreferrer'
                >
                    <img src= {item.video.thumbnails[0].url} alt="" />
                    <Box>
                      <Typography variant='h5' color='#000' >
                        {item.video.title}
                      </Typography>
                      <br />
                      <Typography variant='h6' color='red' >
                        @{item.video.channelName}
                      </Typography>
                    </Box>
                </a>
            ))}

        </Stack>

    </Box>
  )
}

export default ExerciseVideos

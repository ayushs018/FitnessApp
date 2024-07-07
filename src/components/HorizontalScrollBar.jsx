import React from 'react'
import {Box , Stack , Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination' 
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
function HorizontalScrollBar({data , bodyPart , setBodyPart}) {
    const bodyPartsData = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']

  return (
    
    <Box display='flex' flexWrap='wrap'>
      {bodyPartsData.slice(0,4).map((item, index) => (
        <React.Fragment key={item.id || item}
        >
          <Box
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
          >        
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
          {(index + 1) % 3 === 0 && <br />}
        </React.Fragment>

        
      ))}
    </Box>
  )
}

export default HorizontalScrollBar

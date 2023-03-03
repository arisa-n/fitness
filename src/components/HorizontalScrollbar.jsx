import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext  } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import LeftArrowIcon from "../assets/left-arrow.png"
import RightArrowIcon from "../assets/right-arrow.png"
import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography  className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" onClick={() => scrollPrev()}/>
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow"onClick={() => scrollNext()} />
      </Typography>
    );
  };
const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
            <Box
            key={item.id || item}
            title={item.id || item}
            itemID={item.id || item}
            m='10px 40px'>
                {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
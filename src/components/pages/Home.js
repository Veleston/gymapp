import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../HeroBanner'
import SearchExercises from '../SearchExercises'
import Exercises from '../Exercises'


const Home = () => {
    const [bodyPart,setBodyPart] = useState('all');
    const [exercise,setExercises]=useState([]) ;

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercise}/>
        </Box>
    )
}

export default Home
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardScreen from '../components/common/CardScreen'
import { readDoneTask, readTask,readFinishedTask } from '../utils/APIs'

const HomeScreen = () => {

    const [state, setState] = useState<any>([])
    const [stateI, setStateI] = useState<any>([])
    const [stateII, setStateII] = useState<any>([])

    useEffect(() => {
        readTask().then((res: any) => {
            return setState(res)
        })
        readDoneTask().then((res: any) => {
            return setStateI(res)
        })
        readFinishedTask().then((res:any)=>{
            return setStateII(res)
        })
    }, [])
    console.log(state)
    console.log(stateI)



    return (
        <div>
            <Container>
                <CardScreen
                    title="Todo Task"
                    data={state}
                />
                <CardScreen
                    title="In Progress"
                    data={stateI}
                />
                <CardScreen
                    title="Done"
                    data={stateII}
                />
            </Container>
        </div>
    )
}

export default HomeScreen

const Container = styled.div`
display: flex;
justify-content:center;
margin-top: 40px

`
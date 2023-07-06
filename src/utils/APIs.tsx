import axios from "axios";


const RealURL : string ="http://localhost:2233/api/v1/"
const  DoneURL : string="http://localhost:2233/api/v2/done"
const  FinishedURL : string="http://localhost:2233/api/v3/finished"

export const createTask = async (data: any) => {
    try {
        await axios.post(RealURL, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readTask = async () => {
    try {
        return await axios.get(RealURL).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (id: string) => {
    try {
        return await axios.patch(`${RealURL}/${id}`, { completed: true }).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (id: string) => {
    try {
        return await axios.delete(`${RealURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

// DONE PART


export const createDoneTask = async (data: any) => {
    try {
        await axios.post(DoneURL, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const readDoneTask = async () => {
    try {
        return await axios.get(DoneURL).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteDoneTask = async (id: string) => {
    try {
        return await axios.delete(`${DoneURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


// Finished Part
export const createFinishedTask = async (data: any) => {
    try {
        await axios.post(FinishedURL, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const readFinishedTask = async () => {
    try {
        return await axios.get(FinishedURL).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteFinishedTask = async (id: string) => {
    try {
        return await axios.delete(`${FinishedURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
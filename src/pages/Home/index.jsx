import { Box, Button, Container, List, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";


export default function Home() {

    const [task, setTask] = useState();
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { id:uuidv4(), description: task};
        setTasks([...tasks, newTask]);
        setTask('');
    } 

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

  return (
    <Container maxWidth='md' >
        <Paper sx={{marginTop:'100px', display:'flex', justifyContent:'center', alignItems:'center'}} elevation={3}>
            <Box p={10} m={5}>
                <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="Task" variant="outlined" 
                    type='text' value={task} onChange={handleInput}/>    
                    <Button sx={{color:'#222', border:'1px solid #222'}} 
                    type='submit' variant="outlined" 
                    startIcon={<FaCheckCircle />}>
                    ADD
                    </Button>
                </Stack>
                </form>
                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography variant='h6' fontWeight='bold'>Tasks</Typography>
                    {tasks.map((task) => (
                        <ListItem key={task.id}>
                            <Box>
                            <Typography variant='p'>{task.description}</Typography>
                            <Button sx={{margin:'10px', color:'#222', border:'1px solid #222'}} 
                            type='button' onClick={() => handleDelete(task.id)} variant="outlined" 
                            startIcon={<FaTrashAlt />}>
                            DEl
                            </Button>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Paper>
    </Container>
  )
}

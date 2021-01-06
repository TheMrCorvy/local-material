import React, { Fragment, useState } from 'react';
import AppNavBar from '../components/layout/AppNavBar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TaskRows } from '../components/tasks/TaskRows';

const useStyles = makeStyles(() => ({
    container: {
        height: '100vh',
        paddingTop: 100
    },
    table: {
        minWidth: 650
    }
}));

export default function Landing() {
    const [userName, setUserName] = useState('gonzalo');

    const [taskItems, setTaskItems] = useState([
        {
            name: 'tarea 1',
            id: 1,
            done: false
        },
        {
            name: 'tarea 2',
            id: 2,
            done: false
        },
        {
            name: 'tarea 3',
            id: 3,
            done: true
        },
        {
            name: 'tarea 4',
            id: 4,
            done: false
        }
    ]);

    const toggleTask = (task) => {
        setTaskItems(taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)));
    };

    const classes = useStyles();

    return (
        <Fragment>
            <Container maxWidth="lg" className={classes.container}>
                <TableContainer component={Paper} elevation={2}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Completado</TableCell>
                                <TableCell align="center">Cambiar Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TaskRows taskItems={taskItems} toggleTask={toggleTask} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <AppNavBar userName={userName} taskItems={taskItems.filter((t) => !t.done).length} />
        </Fragment>
    );
}

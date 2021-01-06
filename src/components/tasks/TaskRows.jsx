import React, { Fragment } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
    textSuccess: {
        color: 'rgb(76, 175, 80)'
    },
    textDanger: {
        color: 'rgb(233, 30, 99)'
    }
}));

export const TaskRows = ({ taskItems, toggleTask }) => {
    const classes = useStyles();

    return (
        <Fragment>
            {taskItems.map((task, index) => (
                <TableRow key={index} hover>
                    <TableCell align="center" component="th" scope="row">
                        {task.name}
                    </TableCell>
                    <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={task.done ? classes.textSuccess : classes.textDanger}>
                        {task.done ? 'Tarea completada' : 'Tarea sin completar'}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                        <Checkbox
                            checked={task.done}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            onChange={() => toggleTask(task)}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </Fragment>
    );
};

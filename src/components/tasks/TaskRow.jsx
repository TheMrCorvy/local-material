import React, { Fragment } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textSuccess: {
        color: 'rgb(76, 175, 80)'
    },
    textDanger: {
        color: 'rgb(233, 30, 99)'
    }
}));

export const TaskRow = ({ taskItems }) => {
    const classes = useStyles();
    return (
        <Fragment>
            {taskItems.map((task, index) => (
                <TableRow key={index}>
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
                </TableRow>
            ))}
        </Fragment>
    );
};

import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    btnSuccess: {
        borderColor: 'rgb(76, 175, 80)',
        color: 'rgb(76, 175, 80)',
        marginBottom: 20,
        '&:hover': {
            borderColor: 'rgb(76, 175, 80)'
        }
    }
});

export const TaskCreator = ({ callback }) => {
    const classes = useStyles();

    const [newTaskName, setNewTaskName] = useState('');

    const [error, setError] = useState(false);

    const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = callback(newTaskName);

        if (!hasError) {
            setNewTaskName('');

            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <Fragment>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Card className={classes.root} style={{ textAlign: 'center' }}>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h2">
                                    Task Creator
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="Nombre de la Tarea"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    value={newTaskName}
                                    onChange={updateNewTaskValue}
                                    error={error ? true : false}
                                    helperText={error && 'La tarea ya está agregada'}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.btnSuccess}
                            onClick={(e) => handleSubmit(e)}>
                            Agregar Tarea
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Fragment>
    );
};

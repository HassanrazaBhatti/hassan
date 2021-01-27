import React from 'react';

//Importing Components
//Style Component
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const Form = () => {
    return (
        <div>
            <Form>
            <p>Enter IDCS</p>
            <input type="number" required placeholder="IDCS" className="style"/>
            <p>Enter Numero the telephone</p>
            <input type="number" required placeholder="IDCS" className="style"/>
            <Button variant="contained" color="primary">
            Primary
            </Button>
            </Form>
        </div>
    );
}

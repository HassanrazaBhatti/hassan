import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const Footer = () => {
    
    return (
        <div>
            <a href="./">Vous voulez verroullier votre biometrie?</a>
            <a href="./">Vous voulez deverroullier votre biometrie?</a>
            <Button variant="contained" color="primary">
            Primary
            </Button>
        </div>
    )
}

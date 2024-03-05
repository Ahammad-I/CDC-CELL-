import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DialogBox from './DialogBox';
import { getLink } from '../utils/getLink';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
import logo from '../assets/cdclogo.png';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.16), 0 6px 20px 0 rgba(0, 0, 0, 0.13)',
    },
  },
  contentRoot: {
    paddingBottom: 2,
  },
  content: {
    alignContent: 'center',
    display: 'flex',
    paddingTop: 10,
  },
  icons: {
    paddingInlineEnd: 5,
  },
  description: {
    margin: 0,
  },
  action: {
    justifyContent: 'space-evenly',
  },
});

export default function CDActivityCard({ data }) {
  const classes = useStyles();
  const createText = (text) => {
    return { __html: text };
  };
  return (
    <FadeUpWhenVisible>
      <Card className={classes.root}>
        <div>
          <CardMedia
            component="img"
            alt={data.title}
            height="140"
            style={{ objectFit: data.image === null ? 'contain' : 'cover' }}
            image={data.image === null ? logo : getLink(data.image)}
            title={data.title}
          />
          <CardContent className={classes.contentRoot}>
            <Typography gutterBottom variant="h6" component="h5">
              {data.title}
            </Typography>
            {data.date === null ? null : (
              <Typography className={classes.content} component="p">
                <EventIcon className={classes.icons} /> {data.date}
              </Typography>
            )}
            {data.time === null ? null : (
              <Typography className={classes.content} component="p">
                <ScheduleIcon className={classes.icons} /> {data.time}
              </Typography>
            )}
            {data.description === '' ? (
              ''
            ) : (
              <Typography className={classes.description} component="div">
                <p dangerouslySetInnerHTML={createText(data.description)} />
              </Typography>
            )}
          </CardContent>
        </div>
        <CardActions className={classes.action}>
          <DialogBox
            label={'Details'}
            title={data.title}
            text={data.details === '' ? 'No more details' : data.details}
          />
        </CardActions>
      </Card>
    </FadeUpWhenVisible>
  );
}

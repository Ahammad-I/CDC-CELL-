import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import FadeLeftWhenVisible from '../Animation/FadeLeft';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 345,
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },

  container: {
    borderColor: 'rgb(0,0,0)',
    boxShadow: '0 0 6px',
    maxWidth: 700,
  },

  Header: {
    background: 'rgb(29, 22, 66)',
  },

  HeaderText: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'sans-serif',
    letterSpacing: 1.1,
    marginTop: 7,
    marginBottom: 7,
  },

  newsText: {
    marginTop: 1,
    marginBottom: 1,
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    color: 'black',
    lineHeight: 1.3,
  },
}));

const RecentNews = ({ data }) => {
  const classes = useStyles();
  const getNews = () => {
    let list = [];

    data.map((News) => {
      const doclink = News.document;
      const extlink = News.link;
      return list.push(
        <div key={News.id}>
          <ListItem className="ListItems">
            <div className={classes.newsText}>
              {News.content}{' '}
              <span>
                {doclink != null && (
                  <Link
                    style={{ textDecoration: 'none', fontSize: '1rem' }}
                    to={News.document}
                  >
                    {News.file_title}
                  </Link>
                )}
              </span>{' '}
              <span>
                {' '}
                {extlink != null && (
                  <Link
                    style={{ textDecoration: 'none', fontSize: '1rem' }}
                    to={News.link}
                  >
                    {News.link_title}
                  </Link>
                )}
              </span>
            </div>
          </ListItem>
          <hr width="90%" />
        </div>
      );
    });

    return list;
  };
  return (
    <FadeLeftWhenVisible>
      <div className={classes.container}>
        <ListItem className={classes.Header}>
          <h2 className={classes.HeaderText}>Recent News</h2>
        </ListItem>
        <div className={classes.root}>{getNews()}</div>
      </div>
    </FadeLeftWhenVisible>
  );
};

export default RecentNews;

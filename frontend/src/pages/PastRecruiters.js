import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import style from '../styles/pages/PastRecruiters.module.css';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpBigDataWhenVisible from '../components/Animation/FadeUpBigData';
import PaperHeader from '../components/PaperHeader';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import Slider from 'react-slick';
import CardMedia from '@material-ui/core/CardMedia';
import styles from '../components/PastRecruiters/PastRecruiters.module.css';
import { getLink } from '../utils/getLink';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 15,
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    width: 'auto',
    color: '#000',
    fontSize: '1rem',
  },
  text_: {
    color: '#000',
    fontsize: '1rem',
    textAlign: 'center',
  },
  button: {
    marginLeft: '25px',
    color: 'white',
    backgroundColor: '#012970',
    borderRadius: '10px',
    padding: '4px',
    border: 'none',
  },
  bar: {
    marginBottom: '2rem',
  },
  buttondiv: {
    fontsize: '1.5rem',
    borderRadius: '10px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#012970',
  },
  hover: {
    '&:hover': {
      color: '#012970',
      backgroundColor: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  },
}));

const PastRecruiters = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [PR_Objs, setPR_Obj] = useState([]);
  const [searchValue, setSearchValue] = useState('*');
  //past recruiter data
  const data = {
    privatetext: [
      '3DPLM Software Limited',
      'Aasaan Jobs Private Limited',
      'Aakash Educational Service Limited',
      'Allgo Embedded Systems',
      'Amadeus Software Labs',
      'Angara Ecommerce Private Limited',
      'Amazon.com',
      'Anglo Eastern Ship Private Limited',
      'Arm Embedded Technologies Limited',
      'Barclays',
      'Cairn India',
      'Cisco Systems',
      'CMC Limited',
      'Cocubes.com',
      'Cognizant Technology Solution Corporation',
      'CRISIL Limited',
      'C42 Engineering Private Limited',
      'DE Shaw & Company',
      'DIRECTI',
      'Drishti Software Solutions Private Limited',
      'Flipkart.com',
      'Finisar Corporation',
      'Fluidyn Instruments Private Limited',
      'Free Scale Semiconducter',
      'Future Supply Chain Solutions Limited',
      'Futures First',
      'Goldman Sachs',
      'Google',
      'Grofers',
      'Grident Technologies Private Limited',
      'Gyan Central',
      'Havells India Limited',
      'HCL Technologies',
      'Honda Cars',
      'Hyundai',
      'Infosys',
      'Ittiam Systems Private Limited',
      'Ignite World Private Limited',
      'Ishi Systems',
      'Jindal Steel and Power',
      'Kritikal Solutions Private Limited',
      'Larsen & Tourbo',
      'Larsen & Tourbo ECC',
      'Nagarro Software Private Limited',
      'NBC Engineering Industries Limited',
      'National Instruments Corporation',
      'Navyug Solutions Limited',
      'Nucleus Software Exports Limited',
      'Oanda Financial Services',
      'Oracle Financial Service Corporation',
      'Practo Technologies Private Limited',
      'Renault Nissan',
      'Resonance Eduventures Limited',
      'Samsung India Software Operations',
      'Samsung India Software Centre',
      'Samsung Software Engineering Lab',
      'Sigmoid Analytics Limited',
      'Steelwedge Technologies Private Limited',
      'Snapdeal.com',
      'STMicroelectronics',
      'Tata Consultancy Services,',
      'Tata Motors Private Limited',
      'Trident Group',
      'Voyalla Retail Private Limited',
      'Volvo Eicher',
      'Libsys Limited',
      'Mahindra & Mahindra Limited',
      'Maxheap Technologies',
      'Microsoft Corporation',
      'Misys Software Solutions Private Limited',
      'Morgan Stanley',
    ],
    publictext: [
      'Bank of India',
      'Bharat Petroleum Corporation Limited',
      'Bharat Heavy Electrical Limited',
      'Coal India Limited',
      'Defence Research Development Organization',
      'Hindustan Petroleum Corporation Limited',
      'Indian Army',
      'Indian Navy',
      'Indian Space Research Organization',
      'Indian Oil Corporation Limited',
      'Power System Operation Corporation',
    ],
  };
  const getPR_Objs = () => {
    let list = [];

    PR_Objs.map((PR) => {
      return list.push(
        <div key={PR.id}>
          <div
            style={{
              margin: 10,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <CardMedia
              className={styles.PR_image}
              image={getLink(PR.company_logo)}
              title="Contemplative Reptile"
            />
          </div>
        </div>
      );
    });
    return list;
  };
  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  function filter(companies, searchValue) {
    var filteredCompanies = companies;
    if (searchValue === '*') {
      return filteredCompanies;
    } else {
      filteredCompanies = companies.filter(function (company) {
        return (
          company.charAt(0).toLowerCase() ===
          searchValue.charAt(0).toLowerCase()
        );
      });
      return filteredCompanies;
    }
  }
  const onAlphabetClick = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  let result = [];
  result.push(
    <button
      className={`${classes.button} ${classes.hover}`}
      type="button"
      key="*"
      onClick={onAlphabetClick}
      value="*"
    >
      {'*'}
    </button>
  );
  for (let i = 65; i < 91; i++) {
    result.push(
      <button
        className={`${classes.button} ${classes.hover}`}
        type="button"
        key={i}
        onClick={onAlphabetClick}
        value={String.fromCharCode(i)}
      >
        {String.fromCharCode(i)}
      </button>
    );
  }

  useEffect(() => {
    instance
      .get('main/past_recruiters/')
      .then((res) => {
        setPR_Obj(res.data);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaperHeader
            data={{ icon: BusinessRoundedIcon, heading: 'Past Recruiters' }}
          />
          <div style={{ background: '#f6f9ff' }}>
            <div className="py-5">
              <Container
                style={{
                  maxWidth: '100%',
                }}
              >
                <Slider style={{ width: '100%', marginTop: 0 }} {...settings}>
                  {getPR_Objs()}
                </Slider>
              </Container>
            </div>
          </div>
          <Container maxWidth="lg" className={classes.bar}>
            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
              <Grid style={{ marginTop: '30px' }} item xs={12}>
                <FadeInWhenVisible>
                  <div className={`${classes.button} ${classes.buttondiv}`}>
                    {result}
                  </div>
                </FadeInWhenVisible>
              </Grid>
              <Grid item xs={12}>
                <FadeUpBigDataWhenVisible>
                  <Paper className={classes.paper}>
                    <Typography
                      component="h3"
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'rgb(0,0,0)',
                      }}
                    >
                      Private Companies
                    </Typography>
                    <Typography>
                      {data.privatetext ? (
                        <div className={style['list-type3']}>
                          {filter(data.privatetext, searchValue).map(
                            (company, index) => {
                              return <div key={index}>{company}</div>;
                            }
                          )}
                        </div>
                      ) : (
                        <p>Coming soon...</p>
                      )}
                    </Typography>
                    <br />
                    <br />
                    <Typography
                      component="h3"
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'rgb(0,0,0)',
                      }}
                    >
                      Public Sector Companies
                    </Typography>
                    <Typography>
                      {data.publictext ? (
                        <div className={style['list-type3']}>
                          {filter(data.publictext, searchValue).map(
                            (company, index) => {
                              return <div key={index}>{company}</div>;
                            }
                          )}
                        </div>
                      ) : (
                        <p>Coming soon...</p>
                      )}
                    </Typography>
                  </Paper>
                </FadeUpBigDataWhenVisible>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default PastRecruiters;

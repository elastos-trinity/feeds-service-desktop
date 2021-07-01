import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styles from './SignIn.module.scss';
import icon from '../../../assets/feeds-logo.svg';
import logo from '../../../assets/logos/ic_elastos.png';
import Toggle from '../Toggle/Toggle';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <style>
          {`
        body {
          background-image: linear-gradient( 180deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% );
        }
          `}
        </style>
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.welcome}>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
          >
            <img width="200px" alt="icon" src={icon} />
            <h1>{'Feeds Service' /* t('title') */}</h1>
          </Grid>
        </div>
        <div className={styles.glassContainer}>
          <div className={styles.cover}>
            <h3 className={styles.userLogin}>
              <FontAwesomeIcon icon={faUserCircle} className="icon" />
              {'Publisher Account' /* {t('description.publisher')} */}
            </h3>
            <div className={styles.welcome} />
            <Grid
              container
              direction="row"
              justify="center"
              alignContent="center"
            >
              <Toggle />
            </Grid>
            <div className={styles.welcome} />
          </div>
        </div>

        <Grid
          container
          direction="row"
          justify="space-between"
          className={styles.footer}
        >
          <h5>
            {'Powered by Elastos' /* t('description.power') */}
            <img
              width="15px"
              alt="logo"
              src={logo}
              className={styles.elastosLogo}
            />
          </h5>
          <a
            href="https://github.com/elastos-trinity/feeds-service/releases"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className={styles.version}>v2.0.0</h5>
          </a>
        </Grid>
      </div>
    </div>
  );
};

export default SignIn;

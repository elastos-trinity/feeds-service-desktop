import React, { useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QRCode from 'qrcode.react';
import Switch from 'react-switch';
import Tooltip from '@material-ui/core/Tooltip';
import Loader from 'react-loader-spinner';
import { Grid } from '@material-ui/core';
import { useTranslation,Translation } from 'react-i18next';
import i18next from 'i18next';
import styles from './Toggle.module.scss';
import QR from '../QR/QR';

export default function Toggle() {

  const { t, i18n } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState('')
  const [isLoading, setLoading] = useState(false)


  // const handleChange = nextChecked => {

  //   if (nextChecked) {fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
  //    // fetch("http://localhost:10080/")
  //    .then(response => response.json())
  //    .then(responseData => {
  //      console.log(responseData.data.total_cases)
  //      setData(responseData.data.total_cases)
  //  })
  //   }
  //    setChecked(nextChecked);
  //  };

   const handleChange = nextChecked => {
      setChecked(nextChecked);
   }

   const getData = ()=>{
     setLoading(true)
     fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
     .then(response =>response.json())
     .then(responseData =>{
       console.log(responseData.data.total_cases)
       setData(responseData.data.total_cases)
       setLoading(false)
     })
   }

   useEffect(() => {
     if(checked){
     getData()
          }
  }, [checked])

  return (
    <div >
<div className={styles.toggle}>
<Tooltip title={t('server.action')} arrow >
<Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
          >

   <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#3ec928"
        // offColor="#FF4C4C"
        onHandleColor="#FFF"
        onChange={handleChange}
        checked={checked}
        />

          </Grid>
          </Tooltip>
</div>

  {isLoading?
     <Loader
       type="Circles"
       color="#FFF"
       height={100}
       width={100}
       timeout={3000} //3 secs
      /> :
      <div>
        <QR showQR={checked} data={data}/>
      </div>
   }

    </div>
  );
}

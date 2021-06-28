import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import Tooltip from '@material-ui/core/Tooltip';
import Loader from 'react-loader-spinner';
import { Grid } from '@material-ui/core';
// import { useTranslation, Translation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
import styles from './Toggle.module.scss';
import QR from '../QR/QR';

export default function Toggle() {
  // const { t, i18n } = useTranslation();
  const { t }: { t: any } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);
  const [data, setData] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  const getData = ()=>{

    setLoading(true)
    fetch("http://localhost:10080/qrcode")
    .then(response => {
      return response.json()
  }).then(responseData =>{
      setData(responseData.feedsURL)
      setLoading(false)
    }).catch (error => {
      console.log("error:", error)
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

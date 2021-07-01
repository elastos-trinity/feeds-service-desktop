import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';
import { useTranslation } from 'react-i18next';

interface QRProps {
  showQR: boolean;
  data: string;
}

const QR: FC<QRProps> = ({ showQR, data }) => {
  const { t } = useTranslation();
  return (
    <div>
      {showQR ? (
        <div>
          <h5>
            <FontAwesomeIcon icon={faServer} className="icon" color="#3ec928" />
            {'Server is online' /* t('server.onlinestatus') */}
          </h5>
          <QRCode
            id="qrc"
            value={data}
            size={150}
            bgColor="#fff"
            fgColor="#000"
            level="H"
          />
          <h5>{'Scan QR code to bind' /* t('server.qr') */}</h5>
        </div>
      ) : (
        <div>
          <h5>
            <FontAwesomeIcon icon={faServer} className="icon" color="#FF4C4C" />
            {'Server is onffline' /* t('server.offlinestatus') */}
          </h5>
        </div>
      )}
    </div>
  );
};

export default QR;

// export default function QR({ showQR, data }) {
//   const { t, i18n } = useTranslation();
//   return (
//     <div>
//       {showQR ? (
//         <div>
//           <h5>
//             <FontAwesomeIcon icon={faServer} className="icon" color="#3ec928" />
//             {t('server.onlinestatus')}
//           </h5>
//           <QRCode
//             id="qrc"
//             value={data}
//             size={150}
//             bgColor={'#fff'}
//             fgColor={'#000'}
//             level={'H'}
//             includeMargin={true}
//           />
//           <h5>{t('server.qr')}</h5>
//         </div>
//       ) : (
//         <div>
//           <h5>
//             <FontAwesomeIcon icon={faServer} className="icon" color="#FF4C4C" />
//             {t('server.offlinestatus')}
//           </h5>
//         </div>
//       )}
//     </div>
//   );
// }

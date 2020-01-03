import React, { FC } from 'react'
import Clipboard from 'react-clipboard.js'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import styles from '../../styles.css'

interface Props {
  barCodeNumber: string
}

const BarCode: FC<Props> = ({ barCodeNumber }) => (
  <div
    data-testid="bank-invoice-barcode"
    className="flex-l b--muted-4 ba br3 bw1"
  >
    <div
      className={`${styles.barCodeNumber} tc ph7 ph9-m pv4 lh-copy c-on-base`}
    >
      {barCodeNumber}
    </div>
    <Clipboard
      component="div"
      data-clipboard-text={barCodeNumber}
      className="b--muted-4 bl-l bt bt-0-l bw1 flex flex-row-l flex-column"
    >
      <Button variation="tertiary">
        <FormattedMessage id="store/header.bankinvoice.copy" />
      </Button>
    </Clipboard>
  </div>
)

export default BarCode

import React, { Fragment, FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'

import { ProductImage } from 'vtex.order-details'
import Price from '../Payment/FormattedPrice'

interface Props {
  attachmentsInfo: Attachment[]
  bundleInfo: Bundle[]
}

const ProductAttachment: FunctionComponent<Props & InjectedIntlProps> = ({
  bundleInfo,
  attachmentsInfo,
  intl,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      {bundleInfo &&
        bundleInfo.map(bundleItem => (
          <article className="bg-muted-5 pv3 ph5 br2 mv4">
            <div className="flex justify-between">
              {bundleItem.imageUrl && (
                <ProductImage url={bundleItem.imageUrl} alt={bundleItem.name} />
              )}
              <p className="block c-on-base">{bundleItem.name}</p>
              <div className="flex items-center">
                <Price value={bundleItem.price} />
                {bundleItem.attachments && bundleItem.attachments.length > 0 && (
                  <div
                    className="c-action-primary ml5"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <IconCaretUp /> : <IconCaretDown />}
                  </div>
                )}
              </div>
            </div>
            {bundleItem.attachments && bundleItem.attachments.length > 0 && (
              <div hidden={!isOpen}>
                <p className="c-muted-1">
                  {bundleItem.attachments[0].content.text}
                </p>
              </div>
            )}
          </article>
        ))}
      {attachmentsInfo.length > 0 &&
        attachmentsInfo.map(attachmentItem => (
          <article className="bg-muted-5 pv3 ph5 br2 mv4">
            <div className="flex justify-between">
              <p className="block c-on-base">{attachmentItem.name}</p>
              <div className="flex items-center">
                <p className="mr5">
                  {intl.formatMessage({ id: 'order.totals.pickup.free' })}
                </p>
                {attachmentItem.content && (
                  <div
                    className="c-action-primary"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <IconCaretUp /> : <IconCaretDown />}
                  </div>
                )}
              </div>
            </div>
            {attachmentItem.content && (
              <div hidden={!isOpen}>
                {Object.keys(attachmentItem.content).map(key => {
                  const contentLabel = key
                  const contentValue = attachmentItem.content[key]
                  return (
                    <p className="c-muted-1">
                      {`${contentLabel}: ${contentValue}`}
                    </p>
                  )
                })}
              </div>
            )}
          </article>
        ))}
    </Fragment>
  )
}

export default injectIntl(ProductAttachment)

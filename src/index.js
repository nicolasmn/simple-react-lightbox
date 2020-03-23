import React from 'react'
import PropTypes from 'prop-types'
import SRLContextComponent from './SRL/SRLContext'
import SRLWrapper from './SRL/SRLWrapper'
import SRLLightbox from './SRL/SRLLightbox'

import { useLightbox } from './SRL/SRLHooks'
import { Global, css } from '@emotion/core'

const SimpleReactLightbox = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            #lightbox {
              width: 0;
              height: 0;
            }
            &.SRLOpened {
              overflow: hidden;
              #SRLLightbox {
                position: absolute;
                z-index: 9991;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              }
            }
          }
        `}
      />
      <SRLContextComponent>
        {children}
        <SRLLightbox />
      </SRLContextComponent>
    </>
  )
}

SimpleReactLightbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export { useLightbox }
export { SRLWrapper }
export default SimpleReactLightbox

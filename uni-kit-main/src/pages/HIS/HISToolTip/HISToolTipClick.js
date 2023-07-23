import HISToolTip from '@/components/HISToolTip/HISToolTip'
import React from 'react'

function HISToolTipClick(props) {

  return (
    <>
      <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" click="off">
        동해물과 백두산이 마르고 닳도록
      </HISToolTip>
      <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" click="on">
        동해물과 백두산이 마르고 닳도록
      </HISToolTip>
    </>
  )
}

export default HISToolTipClick;


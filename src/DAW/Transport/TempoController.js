import React from 'react'
import useTransportDispatch, { useBpm } from './hooks'
import Gate from '../UI/Gate'

const TempoController = () => {
  const bpm = useBpm();
  const dispatch = useTransportDispatch();

  /* Action Creators */
  const handleAdjustTempo = value => {
    dispatch({ type: 'setBpm', payload: bpm + value })
  }

  const test = () => console.log('test')

  return (
    <div className="controller-tempo">
      <Gate
        callback={test}
        className="tempo-decrement"
        innerText="-"
        interval={250}
      />
      <Gate
        callback={test}
        className="tempo-increment"
        innerText="+"
        interval={250}
      />
    </div>
  )
}

export default TempoController

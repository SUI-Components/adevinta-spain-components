/* eslint-disable */
import React, {useState} from 'react'
import FormBuilder from '../../../../components/form/builder/src/index.js'

import {json as fakeJSON} from './formList'
// import {json as fakeJSON} from './formCCAA'
// import {categories as fakeJSON} from './form'
import {formPTACar as fakeFormPTACarJSON} from './formPTACar'
import {formPTAMiscLite as fakeFormPTAMiscLite} from './formPTAMiscLite'
import {formPTAMotor as fakeFormPTAMotor} from './formPTAMotor'
import {initValues as fakeInit} from './initvalue'

const DemoFormBuilder = () => {
  const [stateFields, setStateFields] = useState({})
  const [stateFieldsPTACar, setStateFieldsPTACar] = useState({})
  const [stateFieldsPTAMotor, setStateFieldsPTAMotor] = useState({})
  const [stateFieldsPTAMiscLite, setStateFieldsPTAMiscLite] = useState({})
  return (
    <div className="DemoFormBuilder">
      <h1>Filters FormBuilder</h1>
      <div style={{padding: '20px'}}>
        <FormBuilder
          initFields={fakeInit}
          json={fakeJSON}
          requestInterceptor={({url, response}) => {
            console.log(url, response)
            return response
          }}
          urlInterceptor={({fieldID, fields}) => {
            console.log({fieldID, fields})
          }}
          onChange={fields => setStateFields(fields)}
        />
      </div>
      <h2>Searching by...</h2>
      <pre
        style={{
          maxHeight: '400px',
          border: '1px solid',
          margin: '5px 5px',
          overflowY: 'scroll'
        }}
      >
        <code>{JSON.stringify(stateFields, null, 2)}</code>
      </pre>
      <br />
      <h1>PTA FormBuilder Car</h1>
      <div style={{padding: '20px'}}>
        <FormBuilder
          json={fakeFormPTACarJSON}
          onChange={fields => setStateFieldsPTACar(fields)}
        />
      </div>
      <h2>Searching by...</h2>
      <pre
        style={{
          maxHeight: '400px',
          border: '1px solid',
          margin: '5px 5px',
          overflowY: 'scroll'
        }}
      >
        <code>{JSON.stringify(stateFieldsPTACar, null, 2)}</code>
      </pre>
      <br />
      <h1>PTA FormBuilder Misc Lite</h1>
      <div style={{padding: '20px'}}>
        <FormBuilder
          json={fakeFormPTAMiscLite}
          onChange={fields => setStateFieldsPTAMiscLite(fields)}
        />
      </div>
      <h2>Searching by...</h2>
      <pre
        style={{
          maxHeight: '400px',
          border: '1px solid',
          margin: '5px 5px',
          overflowY: 'scroll'
        }}
      >
        <code>{JSON.stringify(stateFieldsPTAMiscLite, null, 2)}</code>
      </pre>
      <br />
      <h1>PTA FormBuilder Motor</h1>
      <div style={{padding: '20px'}}>
        <FormBuilder
          json={fakeFormPTAMotor}
          onChange={fields => setStateFieldsPTAMotor(fields)}
        />
      </div>
      <h2>Searching by...</h2>
      <pre
        style={{
          maxHeight: '400px',
          border: '1px solid',
          margin: '5px 5px',
          overflowY: 'scroll'
        }}
      >
        <code>{JSON.stringify(stateFieldsPTAMotor, null, 2)}</code>
      </pre>
    </div>
  )
}

export default DemoFormBuilder

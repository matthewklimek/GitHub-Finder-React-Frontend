import React, {useContext} from 'react'
import Alert from 'react-bootstrap/Alert'
import AlertContext from '../../context/alert/alertContext'

 const MyAlert = () => {

  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;
    return (
        alert !== null && (
            <Alert className="mt-3 mb-0" variant={alert.variant}>
            {alert.msg}
          </Alert>
        )
    )
}

export default MyAlert;

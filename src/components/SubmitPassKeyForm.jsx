import * as React from 'react';


/**
 * // TODO: Please create an HTML form component which will take in the passkey and submit it using the function below!
 */
export const SubmitPasskeyForm = () => {

    const [cptUsername,setCptUsername] = React.useState('')
    const [passkey,setPasskey] = React.useState('')
    const [classCode,setClassCode] = React.useState('')

    const submitPasskey = () => {

        fetch('http://192.168.2.51:3000/week_two',{
            method: 'POST',
            body: JSON.stringify({
                'cpt_username': cptUsername,
                'passkey': passkey,
                'class_code': classCode
            }),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then((res) => {

            if (res.status == 200) {
                alert('Code submitted - you are done!')
            } else {
                alert('Try again!')
            }

        })
        .catch((err) => {

        })
    }


    return (
        <div>
            <b>Please enter the username: </b>
            <input type="text" value={cptUsername} onChange={(e) => setCptUsername(e.target.value)} />
            <button onclick={() => submitPasskey()}>Submit</button>
        </div>
    )


}
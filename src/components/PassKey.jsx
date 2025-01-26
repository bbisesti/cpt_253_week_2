import * as React from 'react';


/**
 * This is an example of a functional component!
 * @returns HTML component
 */
export const PassKeyComponent = () => {

    /**
     * This is a common "state" variable for a React component!
     * passkey -> the variable
     * setPasskey -> the "setter" method for changing the state
     * React.useState -> Initializing the state variable with React
     * null -> setting the initial state to empty!
     */
    const [passkey,setPasskey] = React.useState(null)
    const [loaded,setLoaded] = React.useState(false); // boolean to show page has loaded!


    // Variable and color for showing messages.  for now just red but I like to use
    // red/green for bad/good messages!
    const [message,setMessage] = React.useState(null);
    const [color,setColor] = React.useState('red');


    /**
     * This is a "useEffect" method which
     * will change based on the variables in the array in the second parameter
     * Because the array is empty it means it will run ONCE on component initialization!
     */
    React.useEffect(() => {

        /**
         * This is a fetch "promise" It will attempt to "fetch"
         * data (i.e. go hit another website) in this case from an 
         * API I specifically set up for this week!
         * 
         * Once the data has been fetched it will call then "then" 
         * and place the result in the "res" variable
         * 
         * If there is an error it will hit the "catch" statement
         */
        fetch('http://192.168.2.51:3000/week_two_by_ip')
        .then((res) => {

            console.log(res)

            if (res.status == 200) {
                
                res.json()
                .then((data) => {

                    if(data.succeeded) {
                        setPasskey(data.passkey)
                        setLoaded(true)
                    } else {
                        setMessage('Passkey not found')
                    }

                })
                .catch((err) => {
                    setMessage('Error on collecting JSON from API: ' + err)
                })
            } else {
                setMessage(res.status + '-' + res.text)
            }
            
        })
        .catch((err) => {

            setMessage('Error on collecting IP address: ' + err)

        })

    },[])

    return (
        <>
            { /* This next line will show a message if there is one, and if not then it will not show up! */}
            { message ? <p style={{color: color}}>{message}</p> : null } 

            {
                loaded ?
                <p>
                    Your IP address is: {String(passkey)}
                </p>
                : null
            }
        </>
    )
}
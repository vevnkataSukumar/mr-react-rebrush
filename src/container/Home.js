import React, { useEffect, useState } from 'react';

function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 3000);

        return () => clearTimeout();
    }, [])

    // if (!show) {
    //     return (
    //         <div>
    //             <h1>Not showing</h1>
    //         </div>
    //     )
    // }

    return ( 
        <div>
            {
                !show ? (<h1>Not showing</h1>) : (<h1>Showing</h1>)
            }
        </div>
    );
}

export default Home;
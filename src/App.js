import React, {useEffect, useState} from 'react';
import axios from "axios";


const App = () => {

    //1. 데이터 담을공간 설
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 네트워킹함수.
    const getData = async () => {
        return (

            await axios.get('http://www.findyourapi.com/api/posts/')
                // .then(res => console.log(res.data))
                .then(res => {
                    setDatas(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
            // await fetch("http://www.findyourapi.com/api/posts/")
            //     .then(data => data.json())
            //     .then(aaa => setDatas(aaa))
            //     // .then(aaa => console.log(aaa))
            //     .catch(err => console.log(err))
        )
    }






    //2. 자동실행함수.
    useEffect(() => {
        getData()
    },[])

    return (
        <>
        {loading ?
            <div>
                <h1>
                    loading ...
                </h1>
            </div>
        : (
                <div>
                    {datas.map(data => (
                        <>
                            <h1>{data.title}</h1>
                            <h2>{data.overview}</h2>
                        </>
                    ))}

                </div>
            )
        }
        </>

    );



};



export default App;

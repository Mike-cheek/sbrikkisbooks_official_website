import React, { useState, useEffect } from 'react'
import * as styles from './stats.module.scss'
import Separator from '../../atoms/separator/separator'
import LoadingBooks from '../../atoms/loadingBooks/loadingBooks'
import database from '../../atoms/firebase'
import { ref, get, child } from 'firebase/database'
import Qualities from '../../components/qualities/qualities'

const Stats = () => {

    const [data, setData] = useState([]);
    const [quality, setQuality] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const fetchData = async () => {
        let tmpArray = [[]];
        console.log(database);
        const dbRef = ref(database);
        get(child(dbRef, `meeting/`)).then((snapshot) => {
            if (snapshot.exists()) {
                tmpArray = JSON.stringify(snapshot.toJSON())
                    .replace('{', '').replace('}', '').replaceAll('"', '')
                    .split(/(?<=[,])/);
                for(let i = 0; i < tmpArray.length; i++){
                    tmpArray[i] = tmpArray[i].replace(',', '').split(/(?<=[:])/);
                    tmpArray[i][0] = tmpArray[i][0].replace(':', '')
                }
                setData(tmpArray);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            setFetched(false);
            console.error(error);
        });

        get(child(dbRef, `meetingQuality/`)).then((snapshot) => {
            if (snapshot.exists()) {
                tmpArray = JSON.stringify(snapshot.toJSON())
                    .replace('{', '').replace('}', '')
                    .split(/(?<=["])/);
                for(let i = 0; i < tmpArray.length; i++){
                    tmpArray[i] = tmpArray[i].replace('"', '')
                    if(tmpArray[i] === ':' || tmpArray[i] === ',' || tmpArray[i].match(/^\d+$/))
                        tmpArray[i] = ''
                }
                for(let i = 0; i < tmpArray.length; i++){
                    if(tmpArray[i] === ''){
                        for(let j = i+1; j < tmpArray.length; j++)
                            tmpArray[j-1] = tmpArray[j];
                        tmpArray.length -= 1
                        i--
                    }
                }
                for(let i = 0; i < tmpArray.length; i++)
                    tmpArray[i] = tmpArray[i].split('_')
                setQuality(tmpArray);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const setVisibility = (id) => {
        if(document.getElementById(id))
            document.getElementById(id).hidden = !document.getElementById(id).hidden;
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.tmp}>
            <h1>Sbrikki's Books SEO score</h1>
            <p>
                <strong>SEO</strong> is a very important thing <br />
                That's why I'm studying ways to <strong>improve</strong> it <br />
                See our <strong>score</strong> by clicking on the link below
            </p>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks%2F&crawltype=1">
                SEOBILITY
            </a>
            <Separator />
            {
                loaded?
                    null
                :
                    <LoadingBooks />
            }
            {
                fetched?
                    <div className={styles.lastMeetings}>
                        <p>Here there are last meetings info</p>
                        {   
                            data.map((elem, i) => {
                                return <div onClick={setVisibility("meeting"+i)}> 
                                    <p className={styles.meeting} key={i} >
                                            {"Meeting "+ elem[0] + ", Date: " + elem[1]}
                                    </p>
                                </div>
                            })
                        }
                        <Qualities quality={quality} />
                    </div>
                :
                    <p>Sorry, I can't reach the server</p>

            }
            <Separator />
        </div>
    )
}

export default Stats

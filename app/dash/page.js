"use client"
import styles from './page.module.scss'
import StatsCard, {LoadingStatsCard} from "data/components/StatsCard";
import CardButton, {LoadingCardButton} from "data/components/CardButton";
import TextInput from "data/components/TextInput";
import Button from "@/data/components/Button";
import {useContext, useState} from "react";
import {AccountContext} from "@/data/context/context";

export default function Dash() {

    const [rstPwd_isSending, rstPwd_setSending] = useState(false)

    const data = useContext(AccountContext);

    console.log(data)

    if (!data) return <LoadingDash/>

    function reset_pwd(e) {
        e.preventDefault()
        if (rstPwd_isSending) return
        rstPwd_setSending(true)

        const http = new XMLHttpRequest();
        http.open('POST', '/api/user/pwd', true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/json');

        http.onreadystatechange = async function () {//Call a function when the state changes.
            rstPwd_setSending(false)
        }
        http.send();
    }

    return (
        <>
            <section>
                <div className={styles.Title}>資源</div>
                <div className={styles.Stats}>
                    <StatsCard name={'伺服器'} used={data.used_res.servers} max={data.local.res.servers} unit={'個'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M286.882-717Q266-717 251.5-702.382q-14.5 14.617-14.5 35.5Q237-646 251.618-631.5q14.617 14.5 35.5 14.5Q308-617 322.5-631.618q14.5-14.617 14.5-35.5Q337-688 322.382-702.5q-14.617-14.5-35.5-14.5Zm0 414Q266-303 251.5-288.382q-14.5 14.617-14.5 35.5Q237-232 251.618-217.5q14.617 14.5 35.5 14.5Q308-203 322.5-217.618q14.5-14.617 14.5-35.5Q337-274 322.382-288.5q-14.617-14.5-35.5-14.5ZM154-839h651q16 0 25.5 9.5t9.5 25.813V-535q0 17.425-9.5 29.212Q821-494 805-494H154q-15 0-24.5-11.788Q120-517.575 120-535v-268.687q0-16.313 9.5-25.813T154-839Zm26 60v225h600v-225H180Zm-26 353h647q15 0 27 12.5t12 28.527V-121q0 20-12 30.5T801-80H159q-16 0-27.5-10.5T120-121v-263.973q0-16.027 9.5-28.527T154-426Zm26 60v226h600v-226H180Zm0-413v225-225Zm0 413v226-226Z"/>
                        </svg>
                    </StatsCard>
                    <StatsCard name={'CPU'} used={data.used_res.cpus} max={data.local.res.cpus} unit={'%'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"></path>
                        </svg>
                    </StatsCard>
                    <StatsCard name={'記憶體'} used={data.used_res.memories} max={data.local.res.memories} unit={'mb'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"></path>
                        </svg>
                    </StatsCard>
                    <StatsCard name={'磁碟'} used={data.used_res.disks} max={data.local.res.disk} unit={'mb'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M840-683v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h503l157 157Zm-60 27L656-780H180v600h600v-476ZM479.765-245Q523-245 553.5-275.265q30.5-30.264 30.5-73.5Q584-392 553.735-422.5q-30.264-30.5-73.5-30.5Q437-453 406.5-422.735q-30.5 30.264-30.5 73.5Q376-306 406.265-275.5q30.264 30.5 73.5 30.5ZM233-584h358v-143H233v143Zm-53-72v476-600 124Z"/>
                        </svg>
                    </StatsCard>
                </div>
            </section>

            <section>
                <div className={styles.Title}>所有伺服器</div>
                <div className={styles.Servers}>
                    {data.servers.length !== 0 ? data.servers.map((e, i) => {
                        const limit = e.limits
                        return <CardButton desc={`${limit.cpu}% cpu, ${limit.memory}mb 記憶體, ${limit.disk}mb 磁碟`}
                                           name={e.name} url={`/dash/server/${e.id}`}
                                           buttons={[{name: "控制面板", href: e.url}]} key={i}/>
                    }) : <>什麼也沒有</>}
                </div>
            </section>

            <section>
                <div className={styles.Title}>使用者</div>
                <div className={styles.User}>
                    <TextInput readonly={true} props={{value: data.ptero.username}}/>
                    <TextInput readonly={true} props={{value: data.local.pass}}/>
                    <Button onClick={reset_pwd} isLoading={rstPwd_isSending}
                            className={`button ${styles.Button}`}>重設密碼</Button>
                </div>
            </section>
        </>
    )
}

const loading = {
    opacity: .5
}

function LoadingDash() {

    return (
        <>
            <section style={loading}>
                <div className={styles.Title}>資源</div>
                <div className={styles.Stats}>
                    <LoadingStatsCard/>
                    <LoadingStatsCard/>
                    <LoadingStatsCard/>
                    <LoadingStatsCard/>
                </div>
            </section>

            <section style={loading}>
                <div className={styles.Title}>所有伺服器</div>
                <div className={styles.Servers}>
                    <LoadingCardButton/>
                    <LoadingCardButton/>
                    <LoadingCardButton/>
                </div>
            </section>

            <section style={loading}>
                <div className={styles.Title}>使用者</div>
                <div className={styles.User}>
                    <TextInput readonly={true}/>
                    <TextInput readonly={true}/>
                    <Button isLoading={true} className={`button ${styles.Button}`}/>
                </div>
            </section>
        </>
    )
}
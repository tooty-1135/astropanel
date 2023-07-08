import styles from "./style.module.scss"
import {motion} from "framer-motion";
import {MotionLink} from "@/data/components/MotionLink/MotionLink";
import Link from "next/link";

const buttons = [
    {'name': '面板', 'type': 'local', 'href': 'edit'},
    {'name': '編輯', 'type': 'local', 'href': 'edit'},
    {'name': '刪除', 'type': 'local', 'href': 'edit'},
]

const item = {
    close: {
        y:"100%",
        opacity:0,
    },
    open: {
        y:0,
        opacity:1,
        transition:{
            duration:.1,
            opacity:{
                duration: 0
            }
        }
    }
}

export default function ServerLink({name, id}) {

    return (
        <motion.div
            initial={"close"}
            whileHover={"open"}
            className={styles.ServerLink}>
            <div className={styles.Name}>{name}</div>
            <span className={`material-icon ${styles.Arrow}`}> arrow_forward_ios</span>

            <motion.div
                variants={item}
                className={styles.Buttons}>
                {buttons && buttons.map((e, i) => {
                    return <MotionLink
                        whileHover={{scale:1.03}}
                        href={`/dash/server/${id}`}
                        className={styles.Button}
                        key={i}>
                        {e.name}
                    </MotionLink>
                })}
            </motion.div>
        </motion.div>
    )
}
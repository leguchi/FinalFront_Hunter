export function Week({week}){
    //return a list of td elements with class based on if prev, current or next month including the date
    return(
        <tr>
            {week.map(e => {return(<td className={e.type}>{e.date}</td>)})}
        </tr>
    )
}
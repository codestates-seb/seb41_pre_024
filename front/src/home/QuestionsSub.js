import styled from "styled-components"
import { ImPencil, ImBubble, ImCommand } from "react-icons/im";


const Layout = styled.div`
    text-align: left;
    border: 1px solid rgb(206,207,212);
    

    .title{
        background-color: rgba(251, 243, 213, 0.939);
        padding: 11px;
        font-size: 14px;
        font-weight: bolder;
        border-bottom: 1px solid rgb(206,207,212);
    }

    .list{
        display: flex;
        background-color: hsl(47,87%,94%);
        padding: 12px;
        font-size: 14px;
        
        span{
            margin-right: 8px;
        }
    }
`

export const QuestionsSub = ()=>{
    return(
        <Layout>
           <ul>
            <li className="title">The Overflow Blog</li>
            <li className="list"><span><ImPencil size="12"/></span><a>Best practices to increase the speed for Next.js apps</a></li>
            <li className="list"><span><ImPencil size="12"/></span>I spent two years trying to do what Backstage does for free</li>
            <li className="title">Featured on Meta</li>
            <li className="list"><span><ImBubble size="12"/></span>Navigation and UI research starting soon</li>
            <li className="list"><span><ImCommand size="12"/></span>2022 Community Moderator Election Results - now with two more mods!</li>
            <li className="list"><span><ImCommand size="12"/></span>Temporary policy: ChatGPT is banned</li>
            <li className="list"><span><ImCommand size="12"/></span>I'm standing down as a moderator</li>
            <li className="list"><span><ImCommand size="12"/></span>Proposing a Community-Specific Closure Reason for non-English content</li>
           </ul>
        </Layout>
    )
}
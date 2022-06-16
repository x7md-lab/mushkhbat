import React, {useState, useEffect, Suspense} from "react";

export default function UsersComments(){
    const [useComment, setComment] = useState([])
    useEffect(()=>{
        (async()=>{
            try {
            const comments = await (await fetch(
				`https://mushkhbat.com/api/get-comment/${document.body.dataset?.url}`
			)).json();
                comments.reverse()
                setComment(comments);
            } catch(err) {
                setComment([]);
            } 
        })()
    }, []) 
    const Comments = () => (
        useComment.map((comment, idx)=> {
        const [, commentText, user, date] = comment;
        return (
        <div className="comment-box" key={idx}>
            <div className="user">
                <img className="user-pic" 
                crossOrigin="Anonymous" 
                src={user.pic} />
                <span>
                    {user.name}
                </span>
            </div>
            <div dir="auto" className="comment-text">
                <p>{commentText}</p>
            </div>
        </div>)
        }
        )
    )
    return (
        <Suspense fallback={<h1>جاري تحميل التعليقات...</h1>}>
            <Comments />
        </Suspense>
    )
   
}

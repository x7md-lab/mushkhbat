import React, {useState, Suspense} from "react";
const Auth = React.lazy(() => import("./Auth"));
const UsersComments = React.lazy(() => import("./UsersComments"));

export default function Comment(prop){
    return (
    <div>
        <Suspense fallback={<div>الرجاء الإنتظار</div>}>
            <Auth />
        </Suspense>
        <Suspense fallback={<h1>جاري تحميل التعليقات...</h1>}>
        <div id="commentsList">
            <UsersComments />
        </div>
        </Suspense>
    </div>
    )
}
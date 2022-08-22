// import { initializeApp } from 'firebase/app';
// import { Fragment, useEffect, useState } from 'react';
// import { getAuth, signInWithRedirect, GoogleAuthProvider, TwitterAuthProvider, onAuthStateChanged } from "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDIt9d_QOutwM7HM00NCueWKVHm_W9lNqQ",
//     authDomain: "mushkhbat-comment.firebaseapp.com",
//     projectId: "mushkhbat-comment",
//     storageBucket: "mushkhbat-comment.appspot.com",
//     messagingSenderId: "385603853271",
//     appId: "1:385603853271:web:02d74e043ad0b3d6e4c992",
//     measurementId: "G-8GYLDCFYCR"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default function Auth(props){
//     const [loading, setLoading] = useState("Test");
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user)=>{
//             console.log(user);
//             setLoading("Test!!");
//         })
//     }, [auth])
//     return (
//         <Fragment>
//         <div id="commentBox" className="comment-box">
//         <div id="login">
//             {loading}
// 				<p>سجل دخولك، لتتمكن من ترك تعليق</p>
// 				<button id="gmail" className="login-btn">
// 					<span>سجل دخول باستخدام قوقل</span>
// 					<svg aria-hidden="true" focusable="false"role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
// 					<path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
// 					</svg>
// 				</button>
// 				<button id="twitter" className="login-btn">
// 					<span>سجل دخول باستخدام تويتر</span>
// 					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 22 22">
// 					<path fill="currentColor" d="M8.283 20.263c7.547 0 11.676-6.259 11.676-11.677c0-.176 0-.352-.008-.528A8.36 8.36 0 0 0 22 5.928a8.317 8.317 0 0 1-2.36.649a4.129 4.129 0 0 0 1.808-2.273a8.163 8.163 0 0 1-2.61.993A4.096 4.096 0 0 0 15.847 4a4.109 4.109 0 0 0-4.106 4.106c0 .32.04.632.104.936a11.654 11.654 0 0 1-8.46-4.29a4.115 4.115 0 0 0 1.273 5.482A4.151 4.151 0 0 1 2.8 9.722v.056a4.113 4.113 0 0 0 3.29 4.026a4.001 4.001 0 0 1-1.08.144c-.265 0-.521-.024-.77-.072a4.104 4.104 0 0 0 3.834 2.85a8.231 8.231 0 0 1-5.098 1.76c-.328 0-.656-.016-.976-.056a11.674 11.674 0 0 0 6.283 1.833"></path>
// 					</svg>
// 				</button>
// 		</div>
//         </div>
//         </Fragment>	
//     )
// }
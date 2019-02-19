import React from 'react'

function ErrorPage(props) {
    
    let int = setInterval(() => {
        if(document.getElementById("timer")){
            let t = parseInt(document.getElementById("timer").innerHTML);
            document.getElementById("timer").innerHTML = t-1;

            if(t===1){
                clearInterval(int);
                props.history.push("/");
            }
        }
    }, 1000);

  return (
    <div className="container">
    <p className="center font25">Oops! Page not found. You will be redirected to homepage in <span id="timer">5</span> seconds.<br /><img className="errorpage-img" alt="" src="images/nojs.png" /></p>
    </div>
  )
}

export default ErrorPage;
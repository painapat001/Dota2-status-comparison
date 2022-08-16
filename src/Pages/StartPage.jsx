import React from "react";

function StartPage() {
    const bgImgUrl = ['https://cdn.wallpapersafari.com/83/70/2Wn7pA.jpg', 'https://wallpaperaccess.com/full/1719376.jpg', 'https://cdn.wallpapersafari.com/3/10/wgUAGc.jpg', 'https://images.hdqwalls.com/wallpapers/dota-2-logo-art.jpg']
    const rndNbr = Math.round(Math.random() * bgImgUrl.length);

    const myStyle = {
        backgroundImage: `url(${bgImgUrl[rndNbr]})`,
        height: '87vh',
        backgroundPosition: 'center',
        // marginTop:'-60px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (<>
        <header>Welcome to Dota2 comparing status</header>
        <div style={myStyle}>
        </div>
        </>
    );
}
export default StartPage
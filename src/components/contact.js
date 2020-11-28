import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {

        document.getElementById("scrollable-panel").addEventListener('scroll', () => {
            const globalHeight = window.innerHeight;
            const contact = document.getElementById("contact");
            const offsetTop = contact.offsetTop;
            const scrollTop = document.getElementById('scrollable-panel').scrollTop + globalHeight;
            const isVisible = (offsetTop <= scrollTop) && (scrollTop <= offsetTop + globalHeight);
            console.log(isVisible, offsetTop, document.getElementById('scrollable-panel').scrollTop, offsetTop + globalHeight)
            if (isVisible) {
                document.getElementById("contact-inner").style.width = ((document.getElementById('scrollable-panel').scrollTop%globalHeight) / globalHeight) * document.getElementById("scrollable-panel").offsetWidth + "px";
            }
        })
    }, [])

    return (
        <div id="contact" style={{ height: "100vh", width: "100%", backgroundColor: "var(--white)" }}>
			<div id="contact-inner" style={{ height: "100vh", width: "0", backgroundColor: "var(--dark-navy)" }}></div>
	    </div>
    )
}

export default Contact;
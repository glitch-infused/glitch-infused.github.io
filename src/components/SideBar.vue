<script lang="ts">

export default {
    props: [],
}

var waitingForBar = false;
function waitForBarAndShow() {
    var t = setInterval(() => {
        waitingForBar = true;
        if (document.getElementsByClassName("bar")[0].clientHeight >= 501) {
            document.getElementsByClassName("navigation")[0].classList.remove("hide");
            document.getElementsByClassName("account")[0].classList.remove("hide");
            clearInterval(t);
            waitingForBar = false;
        }
    }, 20);
}

var waitingForIcons = false;
function waitForIconsAndHide() {
    var t = setInterval(() => {
        waitingForIcons = true;
        if (window.getComputedStyle(document.getElementsByClassName("account")[0]).opacity == "0") {
            document.getElementsByClassName("bar")[0].classList.add("hide");
            clearInterval(t);
            waitingForIcons = false;
        }
    }, 20);
}

function update() {
    if (window.scrollY <= 30) {
        document.getElementsByClassName("bar")[0].classList.remove("hide");
        /*if (document.getElementsByClassName("bar")[0].clientHeight == 501) {
            document.getElementsByClassName("navigation")[0].classList.remove("hide");
            document.getElementsByClassName("account")[0].classList.remove("hide");
        }*/
        if (!(waitingForBar || waitingForIcons)) {
            waitForBarAndShow();
        }
    } else {
        document.getElementsByClassName("navigation")[0].classList.add("hide");
        document.getElementsByClassName("account")[0].classList.add("hide");
        /*if (window.getComputedStyle(document.getElementsByClassName("account")[0]).opacity == "0") {
            document.getElementsByClassName("bar")[0].classList.add("hide");
        }*/
        if (!(waitingForIcons || waitingForIcons)) {
            waitForIconsAndHide();
        }
    }
}

window.onscroll = update;
setInterval(update, 200);

</script>

<template>
    <div class="bar">
        <div class="logo">
            <a href="/" aria-label="return to the home page">
                <img src="../assets/icn.png" alt="icon">
            </a>
        </div>
		<div class="navigation">
            <div class="home">
                <a href="?p=home" aria-label="return to the home page">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                </a>
            </div>
            <div class="search">
                <a href="?p=search" aria-label="search for something">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </a>
            </div>
            <div class="statistics">
                <a href="#" onclick="console.log('click')" aria-label="view the statistics">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                </a>
            </div>
		</div>
		<div class="account">
            <div class="settings">
                <a href="#" aria-label="change account settings">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                </a>
            </div>
            <div class="notifications">
                <a href="#" aria-label="view notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                </a>
            </div>
            <div class="login">
                <a href="#" aria-label="login">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </a>
            </div>
		</div>
	</div>
</template>
<style scoped>
.bar {
    width: 80px;
    position: fixed;
    top: 32px;
    left: 16px;
    background-color: rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    transition: height ease 0.6s;
    height: 509px;
}

.bar.hide {
    transition: height ease 0.6s;
    height: 80px;
    overflow: hidden;
}

.logo {
    position: relative;
    margin-top: 10px;
    left: 8px;
    width: 64px;
    transition: filter ease 0.3s;
}

.bar.hide > .logo > a > img {
    transition: transform ease 0.66s;
    transform: rotate(90deg);
}

.logo > a > img {
    width: 60px;
    height: 60px;
    transform: rotate(0deg);
    transition: transform ease 0.66s;
}

.logo:hover {
    filter: brightness(0.8);
}

.navigation {
    transition: opacity ease 0.25s;
    opacity: 1;
    position: relative;
    width: 64px;
    left: 6px;
    padding: 0px 2px 0px 2px;
    background-color: #242424;
    border-radius: 16px;
    margin-bottom: 6px;
}

.navigation.hide {
    opacity: 0;
}

.account {
    transition: opacity ease 0.25s;
    opacity: 1;
    position: relative;
    width: 64px;
    left: 6px;
    padding: 0px 2px 0px 2px;
    background-color: #242424;
    border-radius: 16px;
    margin-bottom: 6px;
}

.account.hide {
    opacity: 0;
}

</style>
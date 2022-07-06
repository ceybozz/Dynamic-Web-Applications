const currentURL = window.location.href.split('?')[0];
const arr = currentURL.split('/');
const host = arr[0] + '//' + arr[2];
const baseURL = host.concat('/');

const createURL = baseURL.concat('create.html');
const readURL = baseURL.concat('read.html');
const updateURL = baseURL.concat('update.html');
const deleteURL = baseURL.concat('delete.html');

const header_and_nav = `
                        <header class="page__header page__header--bg py-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <a class="col-9 col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 logo" href="https://restfulapi.net/" rel="extrernal" target="_blank" title="Läs mer om REST (Representational State Transfer)"></a>
                                </div>
                            </div>
                        </header>
                        <nav class="navbar navbar-expand-lg navbar-dark navbar-catalina-blue">
                            <div class="container-md">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse text-uppercase" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link" href="./create.html" title="Skapa nya användare"><span class="create">Create</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="./read.html" title="Se alla användare"><span class="read">Read</span> / <span class="update">Update</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="./delete.html" title="Ta bort användare"><span class="delete">Delete</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        `;

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', header_and_nav);

let createLink = document.querySelector('span.create');
let readLink = document.querySelector('span.read');
let updateLink = document.querySelector('span.update');
let deleteLink = document.querySelector('span.delete');

if (currentURL == createURL) {
    createLink.classList.add('clr-6');
} else if (currentURL == readURL) {
    readLink.classList.add('clr-6');
} else if (currentURL == updateURL) {
    updateLink.classList.add('clr-6');
} else if (currentURL == deleteURL) {
    deleteLink.classList.add('clr-6');
} else {
    //console.log("Well, what's up!?");
}

const headerSVG = `
                <div class="hill hill-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="g4">
                                <stop offset="0%" stop-color="#5e0061" />
                                <stop offset="100%" stop-color="#03b5a9" />
                            </linearGradient>
                            <filter height="200%" id="b10" y="-50%">
                                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            </filter>
                        </defs>
                        <path fill="url(#g4)" opacity="0.5" filter="url(#b10)" d="M1224.7,263.4c-65.6-55.5-132.5-124.1-250.1-124.1c-196.1,0-342.4,109.8-495,109.8s-249.1-90-340.2-90c-64.1,0-126.7,54.1-186.5,86.2v91.3h1271.9V263.4z">
                            <animate id="anim7" attributeName="opacity" 
                                from="0.5" to="0.3" dur="19s" begin="3s; anim8.end" fill="freeze"/>
                            <animate id="anim8" attributeName="opacity" 
                                from="0.3" to="0.5" dur="19s" begin="anim7.end" fill="freeze"/>
                        </path>
                    </svg>
                </div>
                <div class="hill hill-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="g3">
                                <stop offset="0%" stop-color="#e60067" />
                                <stop offset="100%" stop-color="#ff9d00" />
                            </linearGradient>
                            <filter height="200%" id="b7" y="-50%">
                                <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                            </filter>
                        </defs>
                        <path fill="url(#g3)" opacity="0.6" filter="url(#b7)" d="M1224.7,263.4c-12.3-69.7-84-20.5-201.7-20.5c-151.7,0-215.1-49.2-367.7-49.2S450.5,159,359.3,159c-116.2,0-279.6,86.6-406.5,86.2v91.3h1271.9V263.4z">
                            <animate id="anim5" attributeName="opacity" 
                                from="0.6" to="0.2" dur="17s" begin="2s; anim6.end" fill="freeze"/>
                            <animate id="anim6" attributeName="opacity" 
                                from="0.2" to="0.6" dur="17s" begin="anim5.end" fill="freeze"/>
                        </path>
                    </svg>
                </div>
                <div class="hill hill-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="g2">
                                <stop offset="0%" stop-color="#e60067" />
                                <stop offset="100%" stop-color="#1f3d75" />
                            </linearGradient>
                            <filter height="200%" id="b2" y="-50%">
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            </filter>
                        </defs>
                        <path fill="url(#g2)" opacity="0.7" filter="url(#b2)" d="M-33,293c102-10,281-98,497-83s436,62,552,61s213-55,271-44s59,151,59,151l-1367,5L-33,293z">
                            <animate id="anim3" attributeName="opacity" 
                                from="0.7" to="0.3" dur="12s" begin="1s; anim4.end" fill="freeze"/>
                            <animate id="anim4" attributeName="opacity" 
                                from="0.3" to="0.7" dur="12s" begin="anim3.end" fill="freeze"/>
                        </path>
                    </svg>
                </div>
                <div class="hill hill-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="g1">
                                <stop offset="0%" stop-color="#5e0061" />
                                <stop offset="100%" stop-color="#03b5a9" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#g1)" opacity="1" d="M878.6,243.6c-58,10.8-114.2,30.1-172,41.9c-82.4,16.7-168.2,17.7-250.5,0.4C376.2,269,293.3,228,214.3,207.2c-70-18.5-146.5-26.1-214.3-3V300h1200v-27.4C1097.5,233.8,986.4,223.7,878.6,243.6z"></path>
                    </svg>
                </div>
                `;
const restSVG = `
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 189.2 63.9" style="enable-background:new 0 0 189.2 63.9;" xml:space="preserve">
                    <linearGradient id="gradR" gradientUnits="userSpaceOnUse" x1="21.1402" y1="1076.4255" x2="21.1402" y2="1015.4836"
                        gradientTransform="matrix(1 0 0 1 0 -1014)">
                        <stop offset="0" style="stop-color:#004D70" />
                        <stop offset="1" style="stop-color:#E40066" />
                    </linearGradient>
                    <path fill="url(#gradR)" d="M1.3,58.8V5c0-2,1.6-3.6,3.6-3.6l0,0h12.4c7.6,0,13.3,1.5,17.3,4.3s5.9,7.2,5.9,12.9c0,4.2-1.1,7.7-3.4,10.3
                    c-1.7,2-3.8,3.6-6.2,4.6c-1.8,0.9-2.5,3-1.7,4.7c0.1,0.1,0.1,0.2,0.2,0.3l11,18.3c1,1.7,0.5,3.8-1.2,4.9c-0.6,0.3-1.2,0.5-1.9,0.5
                    H4.9C3,62.4,1.3,60.8,1.3,58.8C1.3,58.9,1.3,58.8,1.3,58.8z" />
                    
                    <linearGradient id="gradE" gradientUnits="userSpaceOnUse" x1="54.8596" y1="1045.9053" x2="87.7366" y2="1045.9053"
                        gradientTransform="matrix(1 0 0 1 0 -1014)">
                        <stop offset="5.583843e-04" style="stop-color:#600063" />
                        <stop offset="1" style="stop-color:#03B5AA" />
                    </linearGradient>
                    <path fill="url(#gradE)" d="M84.2,62.3H58.4c-2,0-3.6-1.6-3.6-3.6l0,0V5c0-2,1.6-3.6,3.6-3.6h25.7c2,0,3.6,1.6,3.6,3.6v53.7
                    C87.8,60.7,86.2,62.3,84.2,62.3L84.2,62.3z" />

                    <linearGradient id="gradS-top" gradientUnits="userSpaceOnUse" x1="116.4152" y1="1047.6414" x2="116.4152"
                        y2="1015.3745" gradientTransform="matrix(0.9994 3.367715e-02 -3.367715e-02 0.9994 35.2894 -1017.4449)">
                        <stop offset="0" style="stop-color:#A10048" />
                        <stop offset="1" style="stop-color:#1F3C73" />
                    </linearGradient>
                    <path fill="url(#gradS-top)" d="M115.9,32.2l18.5-20.5c1.3-1.4,1.2-3.7-0.2-5c-0.1-0.1-0.2-0.1-0.2-0.2c-1.6-1.2-3.4-2.3-5.2-3.1
                    c-3.3-1.3-6.8-2-10.4-2c-3.4-0.2-6.8,0.4-10,1.7c-2.7,1.1-5.1,3-6.9,5.4c-1.7,2.4-2.6,5.2-2.6,8.1c-0.2,4.5,1.1,8.1,3.9,10.9
                    c2.7,2.5,5.9,4.4,9.3,5.7C113.3,33.7,114.9,33.4,115.9,32.2z" />

                    <linearGradient id="gradS-bottom" gradientUnits="userSpaceOnUse" x1="121.2677" y1="1040.6086" x2="121.2677"
                        y2="1076.4255" gradientTransform="matrix(0.9994 3.367715e-02 -3.367715e-02 0.9994 35.2894 -1017.4449)">
                        <stop offset="2.663895e-07" style="stop-color:#A10048" />
                        <stop offset="1" style="stop-color:#1F3D73" />
                    </linearGradient>
                    <path fill="url(#gradS-bottom)" d="M139.1,36c-1.5-2.4-3.5-4.5-5.9-5.8c-2.1-1.2-4.4-2.2-6.6-3.2c-1.4-0.5-3-0.2-4,0.9l-21.4,23.6
                    c-1.3,1.4-1.2,3.7,0.2,5c0.1,0.1,0.1,0.1,0.2,0.2c4.7,3.6,10.4,5.5,17.2,5.7c4,0.2,8-0.4,11.7-1.9c3.1-1.3,5.8-3.4,7.7-6.2
                    c1.9-2.7,2.9-5.9,2.9-9.3C141.4,42,140.7,38.8,139.1,36z" />

                    <linearGradient id="gradT" gradientUnits="userSpaceOnUse" x1="166.2906" y1="1015.4836" x2="166.2906"
                        y2="1076.3313" gradientTransform="matrix(1 0 0 1 0 -1014)">
                        <stop offset="2.290474e-02" style="stop-color:#3A2C70" />
                        <stop offset="1" style="stop-color:#FF9F00" />
                    </linearGradient>
                    <path fill="url(#gradT)" d="M187.9,4.9L187.9,4.9c0,2-1.6,3.6-3.5,3.6c0,0,0,0-0.1,0H183c-1.8,0-3.3,1.3-3.6,3l-8.5,47.9
                    c-0.3,1.7-1.8,3-3.6,3h-2.5c-1.7,0-3.2-1.2-3.5-2.9l-9.1-48c-0.3-1.7-1.8-2.9-3.5-2.9h-0.7c-2,0-3.6-1.6-3.6-3.6l0,0
                    c0-2,1.6-3.6,3.6-3.6l0,0h36.2C186.3,1.5,187.9,3.1,187.9,4.9z" />
                </svg>
                `;
const mainSVG = `
                <div class="under_navbar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <linearGradient id="g-under">
                            <stop offset="0%" stop-color="#5e0061" />
                            <stop offset="80%" stop-color="#03b5a9" />
                        </linearGradient>
                        <path fill="url(#g-under)" d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
                    </svg>
                </div>
                `;
const pageFooter = `
                <footer>
                    <div class="over_footer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <linearGradient id="g-over">
                                <stop offset="0%" stop-color="#03b5a9" />
                                <stop offset="80%" stop-color="#5e0061" />
                            </linearGradient>
                            <path fill="url(#g-over)" d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
                        </svg>
                    </div>
                    <div class="container">
                        <a href="https://www.du.se/" rel="external" target="_blank" title="Gå till du.se"><img src="./img/svg/hda_logotype.svg" alt="Högskolan dalarnas logotyps symbol"></a>
                        <div>© 2020 Copyright: Högskolan Dalarna</div>
                        <a href="mailto:alk@du.se" title="Mejla Alexander Karlsson">alk@du.se</a>
                    </div>
                </footer>
                `;

const pageHeader = document.querySelector('.page__header');
const headerLogo = document.querySelector('.logo');
const pageMain = document.querySelector('main');

pageHeader.insertAdjacentHTML('beforeend', headerSVG);
headerLogo.insertAdjacentHTML('afterbegin', restSVG);
pageMain.insertAdjacentHTML('afterbegin', mainSVG);
pageMain.insertAdjacentHTML('afterend', pageFooter);
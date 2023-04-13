<template>
    <div class="footer">
        <div class="footer_wrapper">
            <div class="account">
                <h3>ACCOUNT <i class="arrow"></i></h3>
                <ul class="account-links">
                    <li><h4>My Account</h4></li>
                    <li><h4>My Bookshop</h4></li>
                    <li><h4>Logout</h4></li>
                </ul>
            </div>
            <div class="about_us">
                <h3>ABOUT US <i class="arrow"></i></h3>
                <ul class="about-links">
                    <li><h4>About Peekabook</h4></li>
                    <li><h4>Careers</h4></li>
                    <li><h4>Privacy Policy</h4></li>
                </ul>
            </div>
            <div class="shopping_online">
                <h3>SHOPPING ONLINE <i class="arrow"></i></h3>
                <ul class="shopping-links">
                    <li><h4>FAQ's</h4></li>
                    <li><h4>Delivery Information</h4></li>
                    <li><h4>Returns and Exchange</h4></li>
                </ul>
            </div>
            <div class="contact_us">
                <h3>CONTACT US</h3>
            </div>
            <div class="logo">
                <img src="../assets/images/PeekabookLogo_cream.svg" alt="">
            </div>
        </div>
    </div>
</template>



<style scoped>
    .footer {
        background-color: var(--book_brown);
        width: 100vw;
        display: flex;
        justify-content: center;
        
        
    }
    .footer_wrapper {display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80vw;
        /* padding: 10px; */
        
    }
    .account, .about_us, .shopping_online, .contact_us {
        padding: 20px;
    } 
    h3, h4 {
        color: var(--book_cream);
        padding: 5px;
    }
    
    .logo {
        display: flex;
        flex-direction: column;
        text-align: right;
        justify-content: space-between;
        padding-top: 2vw;
        padding-bottom: 2vw;
        /* padding: 20px; */
    }
    .logo img {
        max-width: 20vw;

    }
    .logo::after {
        content: "Copyright 2023";
        color: var(--book_cream);
        font-family: 'Quicksand_Regular';
        padding-top: 2vw;
    }
    .arrow {
        border: solid var(--book_cream);
        border-width: 0 3px 3px 0;
        display: none;
        padding: 3px;
        transform: rotate(-45deg);

    }
    
    
    
    
    
    @media screen and (max-width: 1000px) {
        .footer_wrapper {
            flex-direction: column;
            padding-top: 5vw;
            width: 70vw
        }
        .logo {
            align-items: center;
            padding-top: 7vw;
            padding-bottom: 7vw;
        }
        .logo img {
            min-width: 75vw;
        }
        .account-links, .about-links, .shopping-links {
            display: none;
        }
        .account, .about_us, .shopping_online, .contact_us {
            padding: 5px;
        }
        h4 {
            display: block;
            padding: 10px;
        }
        /* .account:hover .account-links,
        .about_us:hover .about-links,
        .shopping_online:hover .shopping-links {
            display: block;
            position: absolute;
            background-color: var(--book_brown);
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            z-index: 1;
        }
        .account:hover .account-links li,
        .about_us:hover .about-links li,
        .shopping_online:hover .shopping-links li {
            display: block;
            padding: 8px;
            border-top: 1px solid var(--book_cream);
        }*/
        .arrow {
            display: inline-block;
        } 
        .about_us:hover > .about-links{display: block;}   
        .about_us:hover > h3 .arrow{transform: rotate(45deg) !important;}
        .account:hover > .account-links{display: block;}   
        .account:hover > h3 .arrow{transform: rotate(45deg) !important;}
        .shopping_online:hover > .shopping-links{display: block;}   
        .shopping_online:hover > h3 .arrow{transform: rotate(45deg) !important;}     
    }
</style>
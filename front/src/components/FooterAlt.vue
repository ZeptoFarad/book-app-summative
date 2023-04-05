<template>
    <div class="footer">
        <div class="account">
            <h3>ACCOUNT</h3>
            <ul class="account-links">
                <li><h4>My Account</h4></li>
                <li><h4>My Bookshop</h4></li>
                <li><h4>Logout</h4></li>
            </ul>
        </div>
        <div class="about_us">
            <h3>ABOUT US</h3>
            <ul class="about-links">
                <li><h4>About Peekabook</h4></li>
                <li><h4>Careers</h4></li>
                <li><h4>Privacy Policy</h4></li>
            </ul>
        </div>
        <div class="shopping_online">
            <h3>SHOPPING ONLINE</h3>
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
</template>
<style scoped>
    .footer {
        background-color: var(--book_brown);
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
    }
    .account, .about_us, .shopping_online, .contact_us {
        padding: 20px;
    } 
    h3, h4 {
        color: var(--book_cream);
        padding: 10px;
    }
    h3 {
        font-size: 16px;
    }

    @media screen and (max-width: 460px) {
        .footer {
            flex-direction: column;
        }
        .account-links, .about-links, .shopping-links {
            display: none;
        }
        .account, .about_us, .shopping_online {
            padding: 0;
        }
        h4 {
            display: block;
            padding: 10px;
        }
        .account:hover .account-links,
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
            padding: 10px;
            border-top: 1px solid var(--book_cream);
        }
    }
</style>
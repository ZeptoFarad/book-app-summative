<template>
    <div class="footer">
        <div class="account">
            <h3>ACCOUNT</h3>
            <h4>My Account</h4>
            <h4>My Bookshop</h4>
            <h4>Logout</h4>
        </div>
        <div class="about_us">
            <h3>ABOUT US</h3>
            <h4>About Peekabook</h4>
            <h4>Careers</h4>
            <h4>Privacy Policy</h4>
        </div>
        <div class="shopping_online">
            <h3>SHOPPING ONLINE</h3>
            <h4>FAQ's</h4>
            <h4>Delivery Information</h4>
            <h4>Returns and Exchange</h4>
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
        /* align-items: center; */
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
    
</style>
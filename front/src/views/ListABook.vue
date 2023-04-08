<template>
    <div class="list_a_book">
        <div class="list_a_book_title">
            <h1>List a Book:</h1>
        </div>
        <!-- This may need to be approached with grid rather than flex? -->
        <div class="book_details">
            <h2>Book Details:</h2>
                <div class="book_details_inputs input_box">
                    <label for="listing_title">Listing Title</label>
                    <input type="text" id="listing_title" name="listingtitle" value="Enter the book title here">
                        <!-- 'dual_input' class for controlling the horizontal inputs that will collapse into a single column in mobile view -->
                        <div class="dual_input">
                            <div class="input_box">
                                <label for="author">Author</label>
                                <input type="text" id="author" name="author" value="Author of the book">
                            </div>
                            <!-- Requires number input? -->
                            <div class="input_box">
                                <label for="price">Price</label>
                                <input type="text" id="price" name="price" value="$0.00">
                            </div>
                        </div>
                        <div class="dual_input">
                            <div class="input_box">
                                <!-- Requires drop down -->
                                <label for="book_category">Book Category</label>
                                <input type="text" id="book_category" name="bookcategory" value="Select category">
                            </div>
                            <div class="input_box">
                                <!-- Requires drop down -->
                                <label for="condition">Price</label>
                                <input type="text" id="condition" name="condition" value="Select condition">
                            </div>
                        </div>
                        <div class="dual_input">
                            <!-- Number input? -->
                            <div class="input_box">
                                <label for="year_published">Year Published</label>
                                <input type="text" id="year_published" name="yearpublished" value="YYYY">
                            </div>
                            <div class="input_box">
                                <!-- Requires drop down -->
                                <label for="cover_style">Cover Style</label>
                                <input type="text" id="cover_style" name="coverstyle" value="Select cover style">
                            </div>
                        </div>
                        <div class="dual_input">
                            <div class="notable_features">
                                <label for="notable_features">Notable Features:</label>
                                <div class="first_edition">
                                    <input type="checkbox" name="firstedition" id="firstedition">
                                    <label for="firstedition">First Edition</label>
                                </div>
                                <div class="limited_edition">
                                    <input type="checkbox" name="limitededition" id="limitededition">
                                    <label for="limitededition">Limited Edition</label>
                                </div>
                                <div class="signed_by_author">
                                    <input type="checkbox" name="signedbyauthor" id="signedbyauthor">
                                    <label for="signedbyauthor">Signed by the Author</label>
                                </div>
                            </div>
                            <!-- Requires drop down -->
                            <div class="input_box">
                                <label for="language">Language</label>
                                <input type="text" id="language" name="language" value="Select Language">
                            </div>
                        </div>
                        <div class="input_box description">
                            <label for="description">Description</label>
                            <input type="text" id="description" name="description" value="Enter a helpful description of the book here">
                        </div>
                </div>
        </div>
        
        <div class="add_images">
            <h2>Add Images:</h2>
                <div class="add_images_inputs input_box">
                
                </div>   
        </div>
        <div class="search_tags">
            <h2>Search Tags:</h2>
                <div class="search_tags_inputs input_box">
                    <label for="tags">Tags</label>
                    <input type="text" id="tags" name="tags" value="#book">
                </div>
        </div>
        <div class="shipping_and_payment">
            <h2>Shipping and Payment:</h2>
                <div class="shipping_and_payment_inputs input_box">
                            <div class="payment">
                                <label for="payment">Payment:</label>
                                <div class="cash">
                                    <input type="checkbox" name="cash" id="cash">
                                    <label for="cash">Cash</label>
                                </div>
                                <div class="bank_deposit">
                                    <input type="checkbox" name="bankdeposit" id="bankdeposit">
                                    <label for="bankdeposit">Bank Deposit</label>
                                </div>
                                <div class="credit_card">
                                    <input type="checkbox" name="creditcard" id="creditcard">
                                    <label for="creditcard">Credit Card</label>
                                </div>
                            </div>
                            <div class="contact_methods">
                                <label for="contactmethods">Contact Methods:</label>
                                <div class="phone">
                                    <input type="checkbox" name="phone" id="phone">
                                    <label for="phone">Phone</label>
                                </div>
                                <div class="email">
                                    <input type="checkbox" name="email" id="email">
                                    <label for="email">Email</label>
                                </div>
                                <div class="message">
                                    <input type="checkbox" name="message" id="message">
                                    <label for="message">Message</label>
                                </div>
                            </div>
                </div>
        </div>
        <div class="list_a_book_buttons">
        
        </div>
    </div>
</template>



<style scoped>
    .list_a_book {
        /* padding: 100px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    
    
        .book_details {
            background-color: var(--book_wheat);
            display: flex;
            flex-direction: column;
            width: 80vw;
            align-items: center;
            margin: 10px;
        }
            .book_details_inputs {
                display: flex;
                flex-direction: column;
                width: 70vw;
            }
            .dual_input{
                display: flex;
            }
    
    
            
    .add_images {
        background-color: var(--book_wheat);
        display: flex;
        flex-direction: column;
        width: 80vw;
        align-items: center;
        margin: 10px;
    }
    
    
    .search_tags {
        background-color: var(--book_wheat);
        display: flex;
        flex-direction: column;
        width: 80vw;
        align-items: center;
        margin: 10px;
    }
    
    
    .shipping_and_payment {
        background-color: var(--book_wheat);
        display: flex;
        flex-direction: column;
        width: 80vw;
        align-items: center;
        margin: 10px;
    }
    
</style>
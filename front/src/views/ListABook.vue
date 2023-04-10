<template>
    <div class="list_a_book">
        <div class="list_a_book_title">
            <h1>List a Book:</h1>
        </div>
        <div class="book_details">
            <div class="book_details_header">
            <h2>Book Details:</h2>
            </div>
                <div class="book_details_inputs input_box">
                    <label for="listing_title">Listing Title</label>
                    <input type="text" id="listing_title" name="listingtitle" value="Enter the book title here">
                        <!-- 'dual_input' class for controlling the horizontal inputs that will collapse into a single column in mobile view -->
                        <div class="dual_input">
                            <div class="input_box author_input">
                                <label for="author">Author</label>
                                <input type="text" id="author" name="author" value="Author of the book">
                            </div>
                            <!-- Requires number input? -->
                            <div class="input_box price_input">
                                <label for="price">Price</label>
                                <input type="text" id="price" name="price" value="$0.00">
                            </div>
                        </div>
                        <div class="dual_input">
                            <div class="input_box book_category_input">
                                <!-- Requires drop down -->
                                <label for="bookCategory">Book Category</label>
                                <input type="text" id="bookCategory" name="bookCategory" value="Select category">
                                <ul class="book_category_links">
                                    <li><h4>Option 1</h4></li>
                                    <li><h4>Option 2</h4></li>
                                    <li><h4>Option 3</h4></li>
                                </ul>
                            </div>
                            <div class="input_box condition_input">
                                <!-- Requires drop down -->
                                <label for="condition">Condition</label>
                                <input type="text" id="condition" name="condition" value="Select condition">
                                <ul class="condition_links">
                                    <li><h4>Option 1</h4></li>
                                    <li><h4>Option 2</h4></li>
                                    <li><h4>Option 3</h4></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dual_input">
                            <!-- Number input? -->
                            <div class="input_box year_published_input">
                                <label for="yearPublished">Year Published</label>
                                <input type="text" id="yearPublished" name="yearPublished" value="YYYY">
                            </div>
                            <div class="input_box cover_style_input">
                                <!-- Requires drop down -->
                                <label for="coverStyle">Cover Style</label>
                                <input type="text" id="coverStyle" name="coverStyle" value="Select cover style">
                                <ul class="cover_style_links">
                                    <li><h4>Soft Cover</h4></li>
                                    <li><h4>Hard Cover</h4></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dual_input">
                            <div class="notable_features">
                                <label for="notable_features">Notable Features:</label>
                            <div class="dual_input">
                                <div class="first_edition">
                                    <input type="checkbox" name="firstEdition" id="firstEdition">
                                    <label for="firstEdition">First Edition</label>
                                </div>
                                <div class="limited_edition">
                                    <input type="checkbox" name="limitedEdition" id="limitedEdition">
                                    <label for="limitedEdition">Limited Edition</label>
                                </div>
                            </div>
                                <div class="signed_by_author">
                                    <input type="checkbox" name="signedByAuthor" id="signedByAuthor">
                                    <label for="signedByAuthor">Signed by the Author</label>
                                </div>
                            </div>
                            <!-- Requires drop down -->
                            <div class="input_box language_input">
                                <label for="language">Language</label>
                                <input type="text" id="language" name="language" value="Select Language">
                                <ul class="language_links">
                                    <li><h4>Option 1</h4></li>
                                    <li><h4>Option 2</h4></li>
                                    <li><h4>Option 3</h4></li>
                                </ul>
                            </div>
                        </div>
                        <div class="input_box description_input">
                            <label for="description">Description</label>
                            <input type="text" id="description" name="description" value="Enter a helpful description of the book here">
                        </div>
                </div>
        </div>
        
        <div class="add_images">
            <div class="add_images_header">
                <h2>Add Images:</h2>
            </div>
            <div class="add_images_wrapper">
                <div class="add_images_inputs input_box">
                    <img src="" alt="">
                    <label for="addImage">Image URL:</label>
                    <input type="text" name="addImage" id="addImage" value="#Book_URL">
                </div>  
                <div class="add_images_inputs input_box">
                    <img src="" alt="">
                    <label for="addImage">Image URL:</label>
                    <input type="text" name="addImage" id="addImage" value="#Book_URL">
                </div>
                <div class="add_images_inputs input_box">
                    <img src="" alt="">
                    <label for="addImage">Image URL:</label>
                    <input type="text" name="addImage" id="addImage" value="#Book_URL">
                </div>
                <div class="add_images_inputs input_box">
                    <img src="" alt="">
                    <label for="addImage">Image URL:</label>
                    <input type="text" name="addImage" id="addImage" value="#Book_URL">
                </div>
            </div> 
        </div>
        <div class="search_tags">
                <div class="search_tags_header">
                    <h2>Search Tags:</h2>
                </div>
                <div class="search_tags_inputs input_box">
                    <label for="tags">Tags</label>
                    <input type="text" id="tags" name="tags" value="#book">
                </div>
                <label for="suggested_tags">Suggested:</label>
                <div class="suggested_tags">
                <h4>Testing</h4>
                <button></button>
                </div>
        </div>
        <div class="shipping_and_payment">
                <div class="shipping_and_payment_header">
                    <h2>Shipping and Payment:</h2>
                </div>
                <div class="shipping_and_payment_inputs input_box">
                            <label for="payment">Payment:</label>
                            <div class="payment">
                                <div class="cash">
                                    <input type="checkbox" name="cash" id="cash">
                                    <label for="cash">Cash</label>
                                </div>
                                <div class="bank_deposit">
                                    <input type="checkbox" name="bankDeposit" id="bankDeposit">
                                    <label for="bankDeposit">Bank Deposit</label>
                                </div>
                                <div class="credit_card">
                                    <input type="checkbox" name="creditCard" id="creditCard">
                                    <label for="creditCard">Credit Card</label>
                                </div>
                            </div>
                            <label for="contact_methods">Contact Methods:</label>
                            <div class="contact_methods">
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
            <button class="primary_button">Post</button>
        </div>
    </div>
</template>



<style scoped>
    .list_a_book {
        padding: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .list_a_book_title {width: 80vw;}
    .book_details_header, .add_images_header, .search_tags_header, .shipping_and_payment_header {width: 80vw; margin-left: 10vw; margin-top: 4vw; margin-bottom: 2vw;}
    .book_details, .add_images, .search_tags, .shipping_and_payment {
            background-color: var(--book_wheat);
            display: flex;
            flex-direction: column;
            width: 80vw;
            align-items: center;
            margin: 10px;
            
    }
            label {padding-bottom: 5px;}
            /* .first_edition {padding-top: 10px;} */
            .list_a_book_buttons {width: 80vw; display: flex; justify-content: flex-end;}
            .book_details_inputs {
                display: flex;
                flex-direction: column;
                width: 70vw;
                /* padding: 30px; */
            }
            .author_input, .price_input, .book_category_input, .condition_input, .year_published_input, .cover_style_input, .language_input {
                display: flex;
                width: 30vw;
            }
            .dual_input {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 10px;
            }
            /* .arrow {
                border: solid var(--book_brown);
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
                transform: rotate(45deg);
            } */
            .condition_links, .book_category_links, .cover_style_links, .language_links {display: none;}
            .condition:hover > .condition_links{display: block;}
            .book_category:hover > .book_category_links{display: block;}
            .cover_style:hover > .cover_style_links{display: block;}
            .language:hover > .language_links{display: block;}
    .add_images_wrapper {
        display: flex;
        flex-direction: row;
        width: 70vw;
        justify-content: space-between;
    }
    .add_images_inputs {
        width: 16vw;
    }
    .search_tags_inputs {
        width: 70vw;
    }
    .shipping_and_payment_inputs {
        width: 70vw;
        display: flex;
    }
        
    

    @media screen and (max-width: 700px){
        .author_input, .price_input, .book_category_input, .condition_input, .year_published_input, .cover_style_input, .language_input {
                width: 70vw;
            }
        .dual_input {
                flex-direction: column;
                gap: 0;
            }
            .add_images_wrapper {
                flex-direction: column;
            }
            .add_images_inputs {
                width: 70vw;
            }    
    }


    
</style>
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
                                <select id="bookCategory" name="bookCategory">
                                    <option value="0">Option 1</option>
                                    <option value="1">Option 2</option>
                                    <option value="2">Option 3</option>
                                </select>
                            </div>
                            <div class="input_box condition_input">
                                <!-- Requires drop down -->
                                <label for="condition">Condition</label>
                                <select id="condition" name="condition" value="Select condition">
                                    <option value="0">New</option>
                                    <option value="1">Good</option>
                                    <option value="2">Poor</option>
                                </select>
                            </div>
                        </div>
                        <div class="dual_input">
                            <div class="input_box year_published_input">
                                <label for="yearPublished">Year Published</label>
                                <input type="date" id="yearPublished" name="yearPublished" value="2023-04-11"
                                min="1500-01-01" max="2023-04-11">
                            </div>
                            <div class="input_box cover_style_input">
                                <label for="coverStyle">Cover Style</label>
                                <select id="coverStyle" name="coverStyle">
                                    <option value="0">Soft Cover</option>
                                    <option value="1">Hard Cover</option>
                                </select>
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
                                <select id="language" name="language">
                                    <option value="0">English</option>
                                    <option value="1">Spanish</option>
                                    <option value="2">French</option>
                                    <option value="3">Chinese</option>
                                    <option value="4">Japanese</option>
                                    <option value="5">Turkish</option>
                                </select>
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
                    <label for="tags">Tags:</label>
                    <input type="text" id="tags" name="tags" value="#book">
                </div>
                <label for="suggested_tags">Suggested:</label>
                <div class="suggested_tags">
                    <button class="suggested_btn">SciFi</button>
                    <button class="suggested_btn">Fantasy</button>
                    <button class="suggested_btn">Romance</button>
                    <button class="suggested_btn">Science</button>
                    <button class="suggested_btn">Horror</button>
                    <button class="suggested_btn">Nature</button>
                    <button class="suggested_btn">Mystery</button>
                    <button class="suggested_btn">Poetry</button>
                    
                </div>
        </div>

        <div class="shipping_and_payment">
                <div class="shipping_and_payment_header">
                    <h2>Shipping and Payment:</h2>
                </div>
                <div class="shipping_and_payment_inputs input_box">
                    <div class="checkbox">
                        <div class="shipping_and_payment_wrapper">
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
                        </div>                            
                        <div class="shipping_and_payment_wrapper">
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
                    <div class="delivery_options">
                        <div class="shipping_and_payment_wrapper">
                            <label for="delivery_method">Delivery Method:</label>
                            <div class="delivery_method">
                                
                                    <select id="option_1" name="option_1">
                                        <option value="0">Pickup</option>
                                        <option value="1">North Island</option>
                                        <option value="2">South Island</option>
                                        <option value="3">North Island - Rural</option>
                                        <option value="4">South Island - Rural</option>
                                    </select>
                                    <select id="option_2" name="option_2">
                                        <option value="0">Pickup</option>
                                        <option value="1">North Island</option>
                                        <option value="2">South Island</option>
                                        <option value="3">North Island - Rural</option>
                                        <option value="4">South Island - Rural</option>
                                    </select>
                                    <select id="option_3" name="option_3">
                                        <option value="0">Pickup</option>
                                        <option value="1">North Island</option>
                                        <option value="2">South Island</option>
                                        <option value="3">North Island - Rural</option>
                                        <option value="4">South Island - Rural</option>
                                    </select>
                                
                            </div>
                        </div>
                        <div class="shipping_and_payment_wrapper">
                            <label for="delivery_cost">Delivery Cost:</label>
                            <div class="delivery_cost input_box">
                                    <input type="text" id="price" name="price" value="$0.00">
                                    <input type="text" id="price" name="price" value="$0.00">
                                    <input type="text" id="price" name="price" value="$0.00">
                                </div>
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

    select {
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: var(--book_brown, darkbrown);
        margin-bottom: 1.5rem;
        border: 2px var(--book_brown, darkbrown) solid;
        border-radius: 10px;
        padding: 0.5rem;
        }
    
    .list_a_book_title {width: 80vw; margin-bottom: 2vw;}
    .book_details_header, .add_images_header, .search_tags_header, .shipping_and_payment_header {width: 80vw; margin-left: 10vw; margin-top: 4vw; margin-bottom: 2vw;}
    .book_details, .add_images, .search_tags, .shipping_and_payment {
            background-color: var(--book_wheat);
            display: flex;
            flex-direction: column;
            width: 80vw;
            align-items: center;
            margin: 10px;
            border-radius: 10px;
            
    }
            
            .book_details_inputs {
                display: flex;
                flex-direction: column;
                width: 70vw;
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
    .suggested_btn {
            height: 20px; 
            border-radius: 25px;
            font-family: 'Quicksand', sans-serif;
            color: var(--book_brown, darkbrown);
            font-weight: 700;
            margin-bottom: 0.3rem;
            font-size: 1rem;
            display: flex;
            align-items: center;
            padding: 15px;
    }
    .suggested_tags {
        width: 70vw; 
        display: flex; 
        justify-content: space-between;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }
    
            
    
    .delivery_method, .delivery_cost.input_box {
        display: flex; 
        flex-direction: column;
        width: 20vw;
    }
    .checkbox {
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        gap: 2vw;
    }
    .shipping_and_payment_inputs {
        display: flex; 
        flex-direction: row; 
        width: 70vw;
    }
    .delivery_options {
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        gap: 2vw;
    }
    .delivery_cost {width: 30vw;}
    .shipping_and_payment_inputs.input_box {justify-content: space-between;}

    
    
    .list_a_book_buttons {width: 80vw; display: flex; justify-content: flex-end;}

    h1 {
        font-size: clamp(52px, 12vw, 64px);
    }
    label {
            font-family: 'Quicksand', sans-serif;
            color: var(--book_brown, darkbrown);
            font-weight: 700;
            margin-bottom: 0.3rem;
            font-size: 1rem;
            padding-bottom: 5px;
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
            .book_details, .add_images, .search_tags, .shipping_and_payment {
            border-radius: 0;
            width: 100vw;
            margin: 10px;
            }
            .list_a_book_title {display: flex; justify-content: center; }
            .list_a_book_buttons {display: flex; justify-content: center;}

              
    }
    @media screen and (max-width: 1000px){
        .shipping_and_payment_inputs {
            flex-direction: column;
            display: flex;
            align-items: center;
        
        }
        .checkbox {width: 70vw; justify-content: space-around;}
        .delivery_options {width: 70vw; justify-content: space-between;}
        .delivery_method, .delivery_cost.input_box {width: 30vw;}

        
    }
    

    
</style>
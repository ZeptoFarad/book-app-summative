<template>
    <div class="yourShoppingBasket">
        <div class="yourShoppingCard">
             <div class="item-information-display">
     
     
             </div>
             <div class="payment-value-display">
    
    
            </div>
        </div>
    </div>
</template>


<script setup>
    defineProps({
          shoppingCardObj:{
                 type: Object,
                 required: true
          }
    })
</script>    



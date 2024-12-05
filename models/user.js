const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   phone: {
      type: String,
      required: true
   },
   name: {
      type: String,
      reqгired: true
   },
   password: {
      type: String,
      required: true
   },
   cart: {
      items: [
         {
            count: {
               type: Number,
               required: true,
               default: 1
            },
            productId: {
               type: Schema.Types.ObjectId,
               ref: 'Product',
               required: true
            }
         }
      ]
   }

})
module.exports = model('User', userSchema)


// userSchema.methods.addToCart = function (product) {
//   const cartProductIndex = this.cart.items.findIndex(cp => {
//     return cp.productId.toString() === product._id.toString();
//   });

//   let newQuantity = 1;
//   const updatedCartItems = [...this.cart.items];

//   if (cartProductIndex >= 0) {
//     // Якщо товар вже є у кошику, збільшуємо його кількість
//     newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//     updatedCartItems[cartProductIndex].quantity = newQuantity;
//   } else {
//     // Якщо товар ще не додано, додаємо новий
//     updatedCartItems.push({
//       productId: product._id,
//       quantity: newQuantity
//     });
//   }

//    this.cart = { items: updatedCartItems };
//    console.log("Успіх")
//   return this.save();
// };
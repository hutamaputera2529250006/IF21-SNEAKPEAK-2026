const BASE_URL = "https://api-web-run.vercel.app/api/v1"

const productForm = document.getElementById('add-new-shoe-form')

productForm.addEventListener("submit", async (event) => {
   event.preventDefault()

   const form = event.target
   console.log(form);
   console.log(form.brand.value);

   const data = {
      "brand": form.brand.value,
      "model": form.model.value,
      "description": form.description.value,
      "price": Number(form.price.value),
      "inStock": form.inStock.checked,
      "category": form.category.value,
      "imageUrl": form.imageUrl.value,
      "color": form.color.value
   }
   console.log(data);
   
   const response = await fetch(`${BASE_URL}/shoe`, {
      method : "POST",
      headers : {
         "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
   })

   const responseJson = await response.json()

   console.log(responseJson);
   
   
})







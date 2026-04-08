const buttonCopNow = document.getElementById("button-cop-now")
const harga = document.getElementById("harga-berubah")

// cara tes apakah berjalan di gugel > inspect
buttonCopNow.addEventListener("click", () => {
    console.log("Button cop now di klik")
    // ubah tulisan cop now ketika di klik
    // perbedaan innerHTML dan innerText
    buttonCopNow.innerHTML = "<i>Jadi Italic</i>"
    harga.innerText = "3.400.000"
})

// -----------------------------------------------------------------------------------------------------------------------------------
const BASE_URL = "https://api-web-run.vercel.app/api/v1" //buka link di web tambahkan /shoe
const listSepatu = document.getElementById("list-sepatu")

// arrow function
const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/shoe`)
    const responseData = await response.json()
    console.log(responseData)

    // ----------------------------------------------------

    listSepatu.innerHTML = responseData.data.map(sepatu => {
        return `<div class="col-4">
              <div class="card rounded-5 overflow-hidden">
                <div class="img-wrapper">
                  <img
                    src="${sepatu.imageUrl}" 
                    class="img-card-top"
                    alt="Retro Dunk 'Panda'"
                  />
                </div>

                <div class="card-body">
                  <h5 class="card-title fw-bold">${sepatu.model}</h5>
                  <p class="card-text text-secondary">
                  Rp. ${sepatu.price.toLocaleString('id-ID')}
                  </p>
                  <button class="btn btn-outline-dark w-100 rounded-pill">
                    Quick View
                  </button>
                </div>
              </div>
            </div>`
    }).join("") //.join("") > untuk menghilangkan koma


}

fetchData() // cara panggil function




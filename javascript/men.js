function searchItem(search) {
    search = encodeURIComponent(search);

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let appID = 'KennethM-Scenti-PRD-3c8eaa0db-1c03fd2e';
    let url = proxy + `https://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=${appID}&siteid=0&QueryKeywords=${search}&version=1157&MaxEntries=20`;

    let result;
    fetch(url)
        .then(function (response) {
            return response.json();

        })
        .then(function (json) {
            console.log(json);
            displayData(json);

        })
}
searchItem("mens cologne");

let container = document.getElementById("mens-container");

function displayData(json) {


    for (i = 0; i < json.Product.length; i++) {
        console.log(json.Product[i].Title);

        let item_name = json.Product[i].Title;
        let item_image = json.Product[i].StockPhotoURL;

        let div = document.createElement("div");

        if (json.Product[8].DisplayStockPhotos == true){
            
        }

        if(json.Product[i].DisplayStockPhotos == true){
            let img = document.createElement("img");
            img.src = item_image;
            div.appendChild(img);

            let p = document.createElement("p");
            p.innerText = item_name;
            div.appendChild(p);
            
            container.appendChild(div);
        }
    }





        //PRODUCT 1
        // let item_name1 = json.Product[0].Title;
        // let item_image1 = json.Product[0].StockPhotoURL;

        // let img = document.createElement("img");
        // img.src = item_image1;
        // document.body.appendChild(img);

        // let div = document.createElement("div")
        // div.innerText = item_name1;
        // document.body.appendChild(div);
        // //PRODUCT 1

        // //PRODUCT 2
        // let item_name2 = json.
        // let item_image2 = json.Product[1].StockPhotoURL;
    
        // let img1 = document.createElement("img")

        // json.Product[4].DisplayStockPhotos = true
    // }

}
//rearrange the img and div so the img can come first and then the name of the product can appear//
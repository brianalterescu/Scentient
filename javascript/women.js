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
searchItem("womens perfume");

let container = document.getElementById("womens-container");

function displayData(json) {

    for (i = 0; i < json.Product.length; i++) {
        console.log(json.Product[i].Title);

        let item_name = json.Product[i].Title;
        let item_image = json.Product[i].StockPhotoURL;

        let div = document.createElement("div");

        if(i == 6){
            continue;
        }   

        if(i == 1){
            continue;
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
}

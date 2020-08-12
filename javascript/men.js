function searchItem(search) {
    search = encodeURIComponent(search);

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let appID = 'KennethM-Scenti-PRD-3c8eaa0db-1c03fd2e';
    let url = proxy + `https://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=${appID}&siteid=0&QueryKeywords=${search}&version=1157&MaxEntries=45`;

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

        if (i == 7){
            continue;
        }

        if(i == 8){
            continue;
        }
        if(i == 20){
            continue;
        }
        if(i == 39){
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

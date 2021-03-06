function searchItem(search) {
    search = encodeURIComponent(search);

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let appID = 'KennethM-Scenti-PRD-3c8eaa0db-1c03fd2e';
    let url = proxy + `https://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=${appID}&siteid=0&QueryKeywords=${search}&version=1157&MaxEntries=100`;

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
searchItem("unisex cologne");

let container = document.getElementById("unisex-container");

function displayData(json) {

    for (i = 0; i < json.Product.length; i++) {
        console.log(json.Product[i].Title);

        let item_name = json.Product[i].Title;
        let item_image = json.Product[i].StockPhotoURL;

        let div = document.createElement("div");

        if (json.Product[i].Title == "Thymes Wild Ginger 1.75oz Unisex Eau de Cologne"){
            continue;
        }
        if (json.Product[i].Title == "Bulgari Eau Parfumee Au The Vert 10.5oz Unisex Eau de Cologne") {
            continue;
        }
        if (json.Product[i].Title == "Bulgari Au The Vert 0.17oz Unisex Eau de Cologne"){
            continue;
        }
        if(json.Product[i].DisplayStockPhotos == true){
            
            let link = json.Product[i].DetailsURL;
            
            let img = document.createElement("img");
            img.src = item_image;
            div.appendChild(img);

            let p = document.createElement("a");
            p.setAttribute('href', link);
            p.setAttribute('target', "_blank");
            p.innerText = item_name;
            div.appendChild(p);
            
            container.appendChild(div);
        }
    }
}
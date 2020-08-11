
function searchItem(search) {
    search = encodeURIComponent(search);

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let appID = 'KennethM-Scenti-PRD-3c8eaa0db-1c03fd2e';
    let url = proxy + `https://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=${appID}&siteid=0&QueryKeywords=${search}&version=1119`;
    
    let result;
    fetch(url)
        .then(function(response) {
            return response.json();
            
        })
        .then(function(json) {
            console.log(json);
            // result = json;
            displayData(json);
            
        })
}

searchItem("cologne");
function displayData(json){
    let item_name = json.Product[0].Title;
    
    let item_image = json.Product[0].StockPhotoURL;
    console.log(item_name);
    
    let div = document.createElement("div")
    div.innerText = item_name;
    document.body.appendChild(div);
    let img = document.createElement("img");
    img.src = item_image;
    document.body.appendChild(img);

    //rearrange the img and div so the img can come first and then the name of the product can appear//
}

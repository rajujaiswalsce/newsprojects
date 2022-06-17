

let getData = async (url) =>{
    let res = await fetch(url);
  

    let data = await  res.json(); 
    return data.articles;
    console.log(data)
}
getData()


let append = (data,container) =>{
//    let container = document.getElementById("container")

   data.forEach((el)=>{

      let div = document.createElement("div");
       let p = document.createElement("p");
       p.innerText = el.title;
       let image = document.createElement("img");

       image.src = el.urlToImage;
       image.setAttribute("class","ima")
       let pr = document.createElement("p")
       pr.innerText = el.description;
       pr.setAttribute("class","pr2")

       div.append(image,p,pr)
       container.append(div)

   })
}

export {getData ,append}
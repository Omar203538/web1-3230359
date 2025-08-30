window.onload = function() {
    console.log("Page Loaded! Let's practice HTML, CSS, and JS.");
};

function showAlert() {
    alert("Button clicked!");
}

document.querySelectorAll("button")[1].onclick = function() {
    document.querySelector("div").textContent = "Text changed!";
};

let divBox = document.querySelector("div");
divBox.onmouseover = function() { divBox.style.backgroundColor = "lightblue"; }
divBox.onmouseout = function() { divBox.style.backgroundColor = "white"; }

document.querySelectorAll("img").forEach(img => {
    img.onclick = function() { this.style.display = "none"; }
});

document.querySelectorAll("p").forEach(p => {
    p.onmouseover = function() { this.style.color = "red"; }
    p.onmouseout = function() { this.style.color = "#333"; }
});

document.querySelector("form").onsubmit = function(e) {
    let name = document.getElementById("name").value;
    if(name === "") { alert("Enter your name"); e.preventDefault(); }
};

let addParaBtn = document.createElement("button");
addParaBtn.textContent = "Add Paragraph";
document.body.appendChild(addParaBtn);
addParaBtn.onclick = function() {
    let p = document.createElement("p");
    p.textContent = "New paragraph added!";
    document.body.appendChild(p);
};

setInterval(function() {
    let colors = ["#f0f8ff","#ffe4e1","#f5f5dc","#e6e6fa"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}, 3000);


setTimeout(function() {
    document.title = "HTML/CSS/JS Practice";
}, 5000);


document.querySelectorAll("a").forEach(a => {
    a.onclick = function() { this.style.color = "green"; }
});


let addBoxBtn = document.createElement("button");
addBoxBtn.textContent = "Add Box";
document.body.appendChild(addBoxBtn);
addBoxBtn.onclick = function() {
    let div = document.createElement("div");
    div.textContent = "I am a new box!";
    div.style.border = "1px solid black";
    div.style.padding = "5px";
    div.style.marginTop = "5px";
    document.body.appendChild(div);
};


document.querySelector("video").onmouseover = function() { this.style.border = "3px solid red"; }
document.querySelector("video").onmouseout = function() { this.style.border = "none"; }

document.querySelector("table").onmouseover = function() { this.style.backgroundColor = "#e0ffff"; }
document.querySelector("table").onmouseout = function() { this.style.backgroundColor = "white"; }

let addRowBtn = document.createElement("button");
addRowBtn.textContent = "Add Table Row";
document.body.appendChild(addRowBtn);
addRowBtn.onclick = function() {
    let table = document.querySelector("table");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.textContent = "New Subject";
    cell2.textContent = Math.floor(Math.random()*100);
    cell3.textContent = "B";
};

divBox.onclick = function() {
    if(this.style.display === "none") this.style.display = "block";
    else this.style.display = "none";
};


document.querySelector("header").onmouseover = function() { this.style.backgroundColor = "#ffdead"; }
document.querySelector("header").onmouseout = function() { this.style.backgroundColor = "#eee"; }


document.querySelector("footer").onmouseover = function() { this.style.backgroundColor = "#ffdead"; }
document.querySelector("footer").onmouseout = function() { this.style.backgroundColor = "#eee"; }

document.querySelectorAll("nav a").forEach(a => {
    a.onclick = function() { this.style.color = "#ff4500"; }
});


let addArticleBtn = document.createElement("button");
addArticleBtn.textContent = "Add Article";
document.body.appendChild(addArticleBtn);
addArticleBtn.onclick = function() {
    let article = document.createElement("article");
    article.textContent = "This is a new article added by JS!";
    article.style.border = "1px solid #ccc";
    article.style.padding = "10px";
    article.style.marginTop = "5px";
    document.body.appendChild(article);
};


document.querySelector("aside").onmouseover = function() { this.style.backgroundColor = "#fafad2"; }
document.querySelector("aside").onmouseout = function() { this.style.backgroundColor = "white"; }

// 22. تغيير نص span داخل div عند الضغط
document.querySelector("span").onclick = function() { this.textContent = "Span text changed!"; }

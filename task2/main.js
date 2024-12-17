function show(){
    
    let name =  document.getElementById("myName").value
    document.getElementById("myH1").textContent  = `${name}`

    let cmt =  document.getElementById("myComment").value
    document.getElementById("myP1").textContent  = `${cmt}`
}
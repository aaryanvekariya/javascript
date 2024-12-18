function show() {
    let name = document.getElementById("myName").value;
    let age = document.getElementById("myAge").value;
    let div = document.getElementById("myDiv").value;
    let email = document.getElementById("myMail").value;
    let rating = document.getElementById("rateSelect").value;
    let cmt = document.getElementById("myComment").value;

    let output = `
    Feedback Details:
    Name: ${name}
    Age: ${age}
    Div: ${div}
    Email ID: ${email}
    Rating: ${rating}
    Comment: ${cmt}
    `;
    console.log(output);

    document.getElementById("myH1").innerText = `Thank you ${name} for submitting feedback`;
}
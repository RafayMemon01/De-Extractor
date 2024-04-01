const extractEmails = () => {
    const inputText = document.getElementById("inputText").value;
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = inputText.match(regex);
    const uniqueEmails = [...new Set(emails)]; // Remove duplicates
    const output = document.getElementById("output");
    const count = document.getElementById("count");
    output.innerHTML = "";
    if (uniqueEmails) {
      count.textContent = `Found ${emails.length} emails.`;
      uniqueEmails.forEach((email) => {
        const emailDiv = document.createElement("div");
        emailDiv.classList.add("email");
        emailDiv.textContent = email;
        output.appendChild(emailDiv);
      });
    } else {
      output.textContent = "No emails found.";
      count.textContent = "No emails found.";
    }
  };

  const copyAll = () => {
    const output = document.getElementById("output");
    const emails = output.querySelectorAll(".email");
    let copiedEmails = "";
    emails.forEach((emailDiv, index) => {
      copiedEmails += emailDiv.textContent;
      if (index < emails.length - 1) {
        copiedEmails += "\n";
      }
    });
    navigator.clipboard.writeText(copiedEmails);
    alert("All emails copied to clipboard!");
  };
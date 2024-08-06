document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    // List of student information

    let StudentsInfoList = [
    // place your data here

    ];

    // Create and style the search container
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Enter Roll Number";
    searchInput.classList.add("search-input");
    searchContainer.appendChild(searchInput);

    StudentsInfo.insertBefore(searchContainer, StudentsInfo.firstChild);

    // Function to format the current date
    function getFormattedDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return now.toLocaleDateString(undefined, options);
    }

    // Create a student card
    function createStudentCard(student) {
        const card = document.createElement("div");
        card.classList.add("card", "student-card", "mb-3");
        card.dataset.rollNo = student.rollNo;

        const image = document.createElement("img");
        image.src = student.imageUrl;
        image.alt = student.name;
        image.classList.add("card-img-top");
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        const name = document.createElement("h5");
        name.textContent = student.name;
        name.classList.add("card-title");
        cardBody.appendChild(name);

        const rollNumber = document.createElement("p");
        rollNumber.textContent = student.rollNo;
        rollNumber.classList.add("card-text");
        cardBody.appendChild(rollNumber);

        const studentNo = document.createElement("p");
        studentNo.textContent = `Student Phone: ${student.studentNo || 'N/A'}`;
        studentNo.classList.add("card-text");
        cardBody.appendChild(studentNo);

        const parentNo = document.createElement("p");
        parentNo.textContent = `Parent Phone: ${student.parentNo || 'N/A'}`;
        parentNo.classList.add("card-text");
        cardBody.appendChild(parentNo);

        const contactDetails = document.createElement("div");
        contactDetails.classList.add("d-flex","flex-column", "justify-content-center", "mt-3");
        cardBody.appendChild(contactDetails);

        // Date and day variables
        const presentDate = getFormattedDate();

        // Call Student button
        const callStudentButton = document.createElement("button");
        callStudentButton.textContent = student.studentNo ? "Call Student" : "No Student Phone";
        callStudentButton.disabled = !student.studentNo;
        callStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            callStudentButton.classList.add("button-disabled");
        } else {
            callStudentButton.onclick = () => {
                window.location.href = `tel:+91${student.studentNo}`;
            };
        }
        contactDetails.appendChild(callStudentButton);

        // Call Parent button
        const callParentButton = document.createElement("button");
        callParentButton.textContent = student.parentNo ? "Call Parent" : "No Parent Phone";
        callParentButton.disabled = !student.parentNo;
        callParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            callParentButton.classList.add("button-disabled");
        } else {
            callParentButton.onclick = () => {
                window.location.href = `tel:+91${student.parentNo}`;
            };
        }
        contactDetails.appendChild(callParentButton);

        // Message Student button
        const messageStudentButton = document.createElement("button");
        messageStudentButton.textContent = student.studentNo ? "Message Student" : "No Student Phone";
        messageStudentButton.disabled = !student.studentNo;
        messageStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            messageStudentButton.classList.add("button-disabled");
        } else {
            messageStudentButton.onclick = () => {
                const message = `You are ${student.name} (${student.rollNo}) absent for the ${presentDate} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.studentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        contactDetails.appendChild(messageStudentButton);

        // Message Parent button
        const messageParentButton = document.createElement("button");
        messageParentButton.textContent = student.parentNo ? "Message Parent" : "No Parent Phone";
        messageParentButton.disabled = !student.parentNo;
        messageParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            messageParentButton.classList.add("button-disabled");
        } else {
            messageParentButton.onclick = () => {
                const message = `Your ward ${student.name} (${student.rollNo}) is absent for the ${presentDate} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.parentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        contactDetails.appendChild(messageParentButton);

        StudentsInfo.appendChild(card);
    }

    // Function to filter student cards based on roll number
    function filterStudents() {
        const rollNumber = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.student-card');

        cards.forEach(card => {
            const cardRollNo = card.dataset.rollNo.toLowerCase();
            card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "block" : "none";
        });
    }

    // Create all student cards
    StudentsInfoList.forEach(createStudentCard);

    // Attach real-time search functionality
    searchInput.addEventListener("input", filterStudents);
});

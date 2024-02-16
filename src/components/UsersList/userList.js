import "./userlist.css";

class UsersList {
  create(users) {
    const table = document.createElement("table");
    table.classList.add("user-table");

    const headerRow = document.createElement("tr");

    const headers = [
      "ID",
      "Name",
      "Email",
      "Street",
      "Number",
      "Zip Code",
      "City",
      "State",
    ];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    users.forEach((user) => {
      const row = document.createElement("tr");

      [
        "id",
        "name",
        "email",
        "street",
        "number",
        "zipCode",
        "city",
        "state",
      ].forEach((key) => {
        const cell = document.createElement("td");
        cell.textContent = user[key];
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    document.querySelector("body").appendChild(table);
  }
}

export default UsersList;

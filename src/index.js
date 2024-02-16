import Heading from "./components/Heading/Heading.js";
import Services from "./helpers/Services.js";
import UsersList from "./components/UsersList/userList.js";
import Stove from "./components/Stove/stove.js";

const heading = new Heading();
const services = new Services();
const usersList = new UsersList();
const stove = new Stove("black", "120x60cm", "Brastemp");

heading.create("Mentes Notáveis");

async function fetchData() {
  try {
    const response = await services.makeRequest(
      "http://localhost:8000/users",
      "GET"
    );

    usersList.create(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

stove.oven.light.turnOn();

stove.lightButton.press();

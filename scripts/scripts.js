class Activity {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity({ title, description, imgUrl }) {
    this.id++;
    const activity = new Activity({
      id: this.id,
      title: title,
      description: description,
      imgUrl: imgUrl,
    });
    this.activities.push(activity);
    return activity;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((act) => act.id !== id);
  }
}

function createActivityCard(activity) {
  const activityContainer = document.getElementById("activity-container");

  const card = document.createElement("div");
  card.classList.add("activity-card");

  const title = document.createElement("h2");
  title.textContent = activity.title;

  const description = document.createElement("p");
  description.textContent = activity.description;

  const image = document.createElement("img");
  image.src = activity.imgUrl;
  image.alt = activity.title;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    repository.deleteActivity(activity.id);
    activityContainer.removeChild(card);
  });

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(image);
  card.appendChild(deleteButton);

  activityContainer.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
  const repository = new Repository();

  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("text").value;
    const description = document.getElementById("description").value;
    const imgUrl = document.getElementById("imgUrl").value;

    if (!title || !description || !imgUrl) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    const activity = repository.createActivity({ title, description, imgUrl });
    createActivityCard(activity);

    form.reset();
  });
});

module.exports = { Activity, Repository };

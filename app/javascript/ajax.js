function ajax() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const textData = new FormData(document.getElementById("form"));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/posts", true);
    xhr.responseType = "json";
    xhr.send(textData);
    xhr.onload = () => {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
        return null;
      }
      const item = xhr.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("text");
      const html = `
      <div class="content">
        ${item.text}
        ${item.created_at}
      </div>
      `;
      list.insertAdjacentHTML("afterend", html);
      formText.value = ""
    };
    e.preventDefault();
  });
}

window.addEventListener("load",ajax);
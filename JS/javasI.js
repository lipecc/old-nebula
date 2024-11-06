function handleSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Suponhamos que você tenha uma lista de usuários
  const users = [
    {
      username: "teste",
      password: "teste",
      // Outros dados do usuário, como avatar, podem ser adicionados aqui
    },
    {
      username: "Kaiser",
      password: "19092006Mk",
      // Outros dados do usuário
    },
    {
      username: "lipec1gamer",
      password: "black",
      // Outros dados do usuário
    },
    {
      username: "Dhyz",
      password: "naoseiasenha",
      // Outros dados do usuário
    },
    {
      username: "XxPHziinxX",
      password: "Phziin014",
      // Outros dados do usuário
    },
    {
      username: "spinoza",
      password: "dja160407",
      // Outros dados do usuário
    },
    {
      username: "fellype",
      password: "xamu",
      // Outros dados do usuário
    },
    {
      username: "vinicius",
      password: "27082006",
      // Outros dados do usuário
    },
    {
      username: "Fernado",
      password: "pao321",
      // Outros dados do usuário
    },
  ];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Usuário válido, redirecione para a página de menu
    // Você também pode salvar os dados do usuário no localStorage aqui
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "menu.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}

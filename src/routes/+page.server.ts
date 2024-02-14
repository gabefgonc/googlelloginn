import { redirect } from '@sveltejs/kit'

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email") 

    throw redirect(302, `/password?email=${email}`)
  }
}
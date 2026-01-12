"use server";

export async function submitLogin(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  console.log(formEntries);
}

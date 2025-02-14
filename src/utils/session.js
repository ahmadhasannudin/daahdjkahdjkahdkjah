"use server"

import { cookies } from "next/headers";

export async function getUserSession() {
  const cookieStore = cookies();
  return cookieStore.get("user")?.value || null;
}
import type { APIRoute } from "astro";
import { DB } from "../firebase";
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

export const prerender = false;

export interface messageSend {
  nom: string | FormDataEntryValue | null;
  telephone: string | FormDataEntryValue | null;
  entreprise: string | FormDataEntryValue | null;
  pays: string | FormDataEntryValue | null;
  ville: string | FormDataEntryValue | null;
  message: string | FormDataEntryValue | null;
  alreadyRead: boolean;
  readWhen: Date | null;
  createdAt: Date;
}

export const GET: APIRoute = async ({ request }) => {
  console.log(DB);
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const message: messageSend = {
    nom: data.get("nom"),
    telephone: data.get("telephone"),
    entreprise: data.get("entreprise"),
    pays: data.get("pays"),
    ville: data.get("ville"),
    message: data.get("message"),
    alreadyRead: false,
    readWhen: null,
    createdAt: new Date(),
  };

  const ref = doc(DB, "/message", `message-${Date.now()}`);
  await setDoc(ref, message);

  return new Response(
    JSON.stringify({
      message: "This was a POST!",
      status: true,
    })
  );
};

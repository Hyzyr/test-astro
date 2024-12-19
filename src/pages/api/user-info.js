export const prerender = false;

export const POST = async ({ request }) => {
  const data = await request.json();
  const username = data.username;

  // Respond with a script to handle the redirection
  return new Response('THANKS ' + username);
};
export async function GET({ request }) {
  return new Response('YOU are in');
}

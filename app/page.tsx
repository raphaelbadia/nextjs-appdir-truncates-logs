/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments?url=too_long&truncated=unfortunately_yes"
  );
  await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments?url=too_long&hello=false&truncated=unfortunately_yes"
  );
  return null;
}

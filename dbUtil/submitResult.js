export default async function submitResult({ name, mistakes }) {
  const res = await fetch("/api/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      mistakes: mistakes,
      time: new Date().getTime(),
    }),
  });
  if (res.status === 200) {
    let data = await fetch(`/api/user/${name}`);
    data = await data.json();
    return data.data;
  }
}

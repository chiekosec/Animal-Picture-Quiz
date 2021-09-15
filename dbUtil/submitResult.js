export default function submitResult({ name, mistakes }) {
  fetch("/api/user", {
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
}

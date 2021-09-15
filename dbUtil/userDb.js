export default function storeUser(user) {
  fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user,
      mistakes: 0,
      time: new Date().getTime(),
    }),
  });
}

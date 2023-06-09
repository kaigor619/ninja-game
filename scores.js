const isLocalhost = false;

window.MicroGame = {
  getHighScore: () => {
    const searchParams = new URLSearchParams(window.location.search);

    const token = searchParams.get("token");

    return fetch(
      isLocalhost
        ? "http://localhost:3000/score"
        : "https://ninja-gwr0.onrender.com/score",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          token,
        },
      }
    );
  },
  setHighScore: (score) => {
    const searchParams = new URLSearchParams(window.location.search);

    const token = searchParams.get("token");

    return fetch(
      isLocalhost
        ? "http://localhost:3000/score"
        : "https://ninja-gwr0.onrender.com/score",
      {
        method: "POST",
        body: JSON.stringify({ score }),
        headers: { "Content-Type": "application/json; charset=UTF-8", token },
      }
    );
  },
  shareScore: function () {
    if (!window.TelegramGameProxy) {
      return console.log("Can't find TelegramGameProxy");
    }
    window.TelegramGameProxy.shareScore();
  },
};

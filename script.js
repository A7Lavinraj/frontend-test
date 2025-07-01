const el = document.querySelector("button");
el.onclick = async function () {
  const res = await fetch(
    "https://api-dev.mentorsity.com/api/v1/public/program",
  );
  console.log(await res.json());
};

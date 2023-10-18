const getData = async (url) => {
  if (url) {
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("Xatolik yuz berdi");
    }
    const data = await req.json();
    return data;
  } else {
    throw new Error("Wrong URL!");
  }
};
export default getData;

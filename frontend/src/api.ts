export const getVideos = async (params: string | undefined) => {
  const data = await await (
    await fetch(`http://localhost:4000/api/videos/${params}`)
  ).json();
  console.log(data);
};

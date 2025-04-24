import { IoCaretForward } from "react-icons/io5";
import LoadingPage from "../components/loading-page";
import { Masonry } from "@mui/lab";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { usePhoto } from "../hooks/usePhotos";

const PhotoPage = () => {
  const params = useParams();

  if (params.photoId === undefined) return <div>Something went wrong!</div>;

  const { photo } = usePhoto(params.photoId);

  if (photo === undefined) return <LoadingPage />;

  const links = photo.description?.split("videos:")[1]?.split(",") ?? undefined;
  // const links = linksRaw.split("videos:")[1]?.split(",") ?? undefined;

  return (
    <div className="w-screen flex flex-col px-8 pb-8 gap-8">
      <Navbar />
      <div className="w-full h-auto flex flex-col md:h-screen md:flex-row gap-8 mt-[4rem]">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <img className="max-h-full max-w-full" src={photo.mainPhoto} alt="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-center" id="title">
            {photo.title}
          </h1>
          <p className="text-center" id="description">
            {photo.description}
          </p>
          <a
            href="#photoshoot"
            className="flex items-center semibold mt-5 group"
          >
            <p className="w-full transition-all">VOIR PHOTOSHOOT</p>
            <IoCaretForward className="scale-0 group-hover:scale-100 transition-all" />
          </a>
        </div>
      </div>
      {links &&
        links.length !== 0 &&
        links.map((link, key) => (
          <div key={key} className="w-full md:w-full aspect-video">
            <iframe className="w-full h-full" src={link} allowFullScreen />
          </div>
        ))}
      {photo.photoshoot.length !== 0 && (
        <div id="photoshoot">
          <Masonry className="" columns={{ xs: 2, sm: 2, md: 3 }} spacing={1}>
            {photo.photoshoot.map((photo, key) => (
              <img key={key} className="w-full h-auto" src={photo.url} />
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;

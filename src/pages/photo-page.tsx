import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

import LoadingPage from "../components/loading-page";
import { Masonry } from "@mui/lab";
import { usePhoto } from "../hooks/usePhotos";

const PhotoPage = () => {
  const params = useParams();

  if (params.photoId === undefined) return <div>Something went wrong!</div>;

  const { photo } = usePhoto(params.photoId);

  if (photo === undefined) return <LoadingPage />;

  return (
    <div className="w-screen">
      <div className="h-screen md:flex">
        <div className="md:w-1/2 py-8 px-8 flex flex-col items-center justify-center">
          <img className="max-h-full max-w-full" src={photo.mainPhoto} alt="" />
        </div>
        <div className="md:w-1/2 px-20 flex flex-col justify-center items-center">
          <h1 id="title">{photo.title}</h1>
          <p id="description">{photo.description}</p>
          <a
            href="#photoshoot"
            className="flex items-center semibold mt-5 group"
          >
            <p className="transition-all">VOIR PHOTOSHOOT</p>
            <IoCaretForward className="scale-0 group-hover:scale-100 transition-all" />
          </a>
        </div>
      </div>
      <div id="photoshoot">
        <Masonry className="px-8" columns={{ xs: 2, sm: 2, md: 3 }} spacing={1}>
          {photo.photoshoot.map((photo, key) => (
            <img key={key} className="w-full h-auto" src={photo.url} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PhotoPage;

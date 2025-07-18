import type { Album } from "../../types/albumsType";

const SingleAlbum = ({ album }: { album: Album }) => {
    // console.log('Album from SingleAlbum page:', album);
    const { userId, id, title } = album;

    return (
        <div className="border border-gray-200 hover:ring-2 ring-gray-200 rounded-md p-2 hover:shadow-lg">
            <h1 className="text-slate-700 font-medium">UserID: <span className="text-gray-500">{userId}</span></h1>
            <p className="text-slate-700 font-medium">ID: <span className="text-gray-500">{id}</span></p>
            <p className="text-slate-700 font-medium">Title: <span className="text-gray-500">{title}</span></p>
        </div>
    );
};

export default SingleAlbum;
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleAlbum from "../../../components/SingleAlbum/SingleAlbum";
import useAllAlbums from "../../../hooks/useAllAlbums";

const Albums = () => {
    const { albums, status, message, isPending } = useAllAlbums();
    // console.log("Albums from home page:", albums);
    // console.log("Status from home page:", status);
    // console.log("Message from home page:", message);

    // isPending
    if(isPending){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // isError
    if(status === 500){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{message}</h1>
            </div>
        )
    }

    return (
        <div className="albums w-full">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="All Albums" />

                {
                    albums ?
                    <div className="grid gap-5 grid-cols-1 sm:grid-cosl-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                        {
                            albums?.map(album => <SingleAlbum key={album.id} album={album} />)
                        }
                    </div>
                    : undefined
                }
            </div>
        </div>
    );
};

export default Albums;
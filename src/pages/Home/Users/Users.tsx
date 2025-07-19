import SingleUser from "../../../components/SingleUser/SingleUser";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllUsers from "../../../hooks/useAllUsers";

const Users = () => {
    const { users, isPending, isError, error } = useAllUsers();
    // console.log("useAllUsers hook return value from home page:", users, status, message, isPending, isError, error, error?.message);

    // loading
    if(isPending){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // isError
    if(isError){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{error?.message}</h1>
            </div>
        )
    }


    return (
        <div className="users w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="All Users" />

                {
                    users ?
                    <div className="grid gap-5 grid-cols-1 sm:grid-cosl-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                        {
                            users?.map(user => <SingleUser key={user?.id} user={user} />)
                        }
                    </div>
                    : undefined
                }
            </div>
        </div>
    );
};

export default Users;
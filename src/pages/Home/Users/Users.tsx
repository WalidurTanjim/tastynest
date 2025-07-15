import { useEffect, useState } from "react";
import type { User } from "../../../types/usersType";
import { fetchUser } from "../../../hooks/useAllUsers";
import SingleUser from "../../../components/User/SingleUser";

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // console.log(users);

    // fetching data
    useEffect(() => {
        const loadUsers = async() => {
            try{
                setLoading(true);
                const res = await fetchUser();
                if(res.status === 200){
                    setUsers(res.data);
                }else{
                    setError(res.message);
                }
            }catch(err){
                setError(err instanceof Error ? err.message : 'An Error Occured');
            }finally{
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    // loading
    if(loading){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // error
    if(error){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{error}</h1>
            </div>
        )
    }


    return (
        <div className="users w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 text-center">All Users</h1>

                {
                    users ?
                    <div className="grid gap-5 grid-cols-1 sm:grid-cosl-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                        {
                            users?.map(user => <SingleUser key={user.id} user={user} />)
                        }
                    </div>
                    : undefined
                }
            </div>
        </div>
    );
};

export default Users;
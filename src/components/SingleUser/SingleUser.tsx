import type { User } from "../../types/usersType";

const SingleUser = ({ user }: {user: User}) => {
    
    return (
        <div className="border border-gray-200 hover:ring-2 ring-gray-200 rounded-md p-2 hover:shadow-lg">
            <h1 className="text-slate-700 font-medium">ID: <span className="text-gray-500">{user?.id}</span></h1>
            <p className="text-slate-700 font-medium">Name: <span className="text-gray-500">{user?.name}</span></p>
            <p className="text-slate-700 font-medium">Email: <span className="text-gray-500">{user?.email}</span></p>
        </div>
    );
};

export default SingleUser;
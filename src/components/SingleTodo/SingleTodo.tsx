import type { Todo } from "../../types/todosType";

const SingleTodo = ({ todo }: { todo: Todo }) => {
    const { userId, id, title, completed } = todo;
    // console.log(todo);

    return (
        <div className="border border-gray-200 hover:ring-2 ring-gray-200 rounded-md p-2 hover:shadow-lg">
            <h1 className="text-slate-700 font-medium">User ID: <span className="text-gray-500">{userId}</span></h1>
            <h1 className="text-slate-700 font-medium">ID: <span className="text-gray-500">{id}</span></h1>
            <p className="text-slate-700 font-medium">title: <span className="text-gray-500">{title}</span></p>
            {/* <p className="text-slate-700 font-medium">Body: <span className="text-gray-500">{body}</span></p> */}
            {
                completed ? <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-sm mt-2 inline-block cursor-pointer">Active</span> : <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-sm mt-2 inline-block cursor-pointer">Unavailable</span>
            }
        </div>
    );
};

export default SingleTodo;
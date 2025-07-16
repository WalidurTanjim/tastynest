import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import type { Todo } from "../../../types/todosType";
import fetchTodo from "../../../hooks/useAllTodos";
import SingleTodo from "../../../components/SingleTodo/SingleTodo";

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                setLoading(true);
                const res = await fetchTodo();
                if (res?.status === 200) {
                    setTodos(res?.data);
                } else {
                    setError(res?.message)
                }
            } catch (err) {
                setError(err instanceof Error ? err?.message : 'An Error Occured');
            } finally {
                setLoading(false);
            }
        }

        loadTodos();
    }, []);

    // loading
    if (loading) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // error
    if (error) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{error}</h1>
            </div>
        )
    }

    return (
        <div className="todos w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="All Todos" />

                {
                    todos ?
                        <div className="grid gap-5 grid-cols-1 sm:grid-cosl-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                            {
                                todos?.map(todo => <SingleTodo key={todo.id} todo={todo} />)
                            }
                        </div>
                        : undefined
                }
            </div>
        </div>
    );
};

export default Todos;
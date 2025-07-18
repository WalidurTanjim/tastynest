import type { Food } from "../../types/foodsType";

const SingleFood = ({ food }: { food: Food }) => {
    // console.log("Food from SingleFood page:", food);

    return (
        <div className="border border-gray-200 hover:ring-2 ring-gray-200 rounded-md p-2 hover:shadow-lg">
            <h1 className="text-slate-700 font-medium">Username: <span className="text-gray-500">{}</span></h1>
        </div>
    );
};

export default SingleFood;
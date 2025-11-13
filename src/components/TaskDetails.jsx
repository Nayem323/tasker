import { FaStar } from "react-icons/fa";

export default function TaskDetails({
    task,
    onEditClick,
    onDeleteClick,
    onFavClick,
}) {
    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                {task.isFavorite ? (
                    <button onClick={() => onFavClick(task.id)}>
                        <FaStar color="yellow" />
                    </button>
                ) : (
                    <button onClick={() => onFavClick(task.id)}>
                        <FaStar color="gray" />
                    </button>
                )}
            </td>
            <td>{task.title}</td>
            <td>
                <div>{task.description}</div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                        <li key={tag}>
                            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                {tag}
                            </span>
                        </li>
                    ))}
                </ul>
            </td>
            <td className="text-center">{task.priority}</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button
                        className="text-red-500"
                        onClick={() => onDeleteClick(task.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="text-blue-500"
                        onClick={() => onEditClick(task)}
                    >
                        Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}

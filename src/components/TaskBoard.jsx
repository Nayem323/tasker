import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    function handleAddTask() {
        setShowAddModal(true);
    }

    function handleCloseModal() {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    function handleSaveTask(newTask, isAdd) {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        }

        handleCloseModal();
    }

    function handleDeleteTask(taskId) {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter((task) => task.id !== taskId));
        }
    }

    function handleDeleteAll() {
        if (window.confirm("Are you sure you want to delete all tasks?")) {
            setTasks([]);
        }
    }

    function handleEditTask(editTask) {
        setTaskToUpdate(editTask);
        setShowAddModal(true);
    }

    function handleFavorite(taskId) {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isFavorite: !task.isFavorite };
                }
                return task;
            })
        );
    }

    function handleSearch(searchText) {
        if (searchText) {
            setTasks(
                tasks.filter(
                    (task) =>
                        task.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        task.description
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        task.tags
                            .join(" ")
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                )
            );
        }
    }

    return (
        <section className="mb-20 px-4" id="tasks">
            <div className="container m-auto">
                <div className="p-2 flex justify-end">
                    <SearchTask onSearch={handleSearch} />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions
                        onAddClick={handleAddTask}
                        onDeleteAll={handleDeleteAll}
                    />
                    {tasks.length ? (
                        <TaskList
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFav={handleFavorite}
                        />
                    ) : (
                        <div className="text-center">No task found.</div>
                    )}
                </div>
                {showAddModal && (
                    <AddTaskModal
                        onCloseModal={handleCloseModal}
                        onSave={handleSaveTask}
                        taskToUpdate={taskToUpdate}
                    />
                )}
            </div>
        </section>
    );
}

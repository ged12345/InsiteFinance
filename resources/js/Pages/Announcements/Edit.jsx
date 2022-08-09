import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const { announcement } = usePage().props;
    const { data, setData, put, errors } = useForm({
        title: announcement.title || "",
        content: announcement.content || "",
        startDate: announcement.startDate || "",
        endDate: announcement.endDate || "",
        active: announcement.active || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("announcements.update", announcement.id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Announcement
                </h2>
            }
        >
            <Head title="Announcements" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("announcements.index")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Content</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="content"
                                            name="content"
                                            errors={errors.content}
                                            value={data.content}
                                            onChange={(e) =>
                                                setData(
                                                    "content",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Start Date</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="start-date"
                                            name="end-date"
                                            errors={errors.startDate}
                                            value={data.startDate}
                                            onChange={(e) =>
                                                setData(
                                                    "startDate",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">End Date</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="end-date"
                                            name="end-date"
                                            errors={errors.endDate}
                                            value={data.endDate}
                                            onChange={(e) =>
                                                setData(
                                                    "endDate",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Active</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="active"
                                            name="active"
                                            errors={errors.active}
                                            value={data.active}
                                            onChange={(e) =>
                                                setData(
                                                    "active",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.body}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

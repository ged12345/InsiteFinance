import React from "react";
import ExternalPublic from "@/Layouts/ExternalPublic";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const { announcements } = usePage().props;
    const announcementsCopy = announcements.map((x) => x).reverse();

    return (
        <ExternalPublic auth={props.auth} errors={props.errors} header={<></>}>
            <Head title="Announcements" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Content</th>
                                        <th className="px-4 py-2">
                                            Start Date
                                        </th>
                                        <th className="px-4 py-2">End Date</th>
                                        <th className="px-4 py-2">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {announcementsCopy.map(
                                        ({
                                            id,
                                            title,
                                            content,
                                            startDate,
                                            endDate,
                                            active,
                                        }) => (
                                            <tr>
                                                <td className="border px-4 py-2">
                                                    {id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {content}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {startDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {endDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {active === 1
                                                        ? "true"
                                                        : "false"}
                                                </td>
                                            </tr>
                                        )
                                    )}

                                    {announcements.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No announcements found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ExternalPublic>
    );
}

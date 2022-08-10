import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? <></> : <></>}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="shrink-0 flex justify-center items-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                        </Link>
                    </div>
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                Register
                            </Link>
                            <Link
                                href={route("announcements.main-index2")}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                Public Announcements
                            </Link>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}

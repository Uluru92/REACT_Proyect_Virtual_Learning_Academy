import Link from "next/link";
import React from "react";

function MenuComponent()
{
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page"><li className="md:px-4 md:py-2 text-yellow-300">
                                        <Link href="/">Tienda eSport</Link>
                                    </li></a>
                                    <a  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-yellow-100 hover:text-white"><li className="md:px-4 md:py-2 hover:text-indigo-400">
                                        <Link href="/login">Login</Link>
                                    </li></a>
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-green-100 hover:text-white"><li className="md:px-4 md:py-2 hover:text-indigo-400">
                                        <Link href="/juegos">Juegos</Link>
                                    </li></a>
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-100 hover:text-white"><li className="md:px-4 md:py-2 hover:text-indigo-400">
                                        <Link href="/suscripcion">Suscripciones</Link>
                                    </li></a>
                                </div>
                            </div>
                        </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="relative ml-3">
                        <div>
                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default MenuComponent;

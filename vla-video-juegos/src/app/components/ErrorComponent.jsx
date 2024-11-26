import Link from "next/link";
import React from "react";

function ErrorComponent() {
    return (
        <div>
            <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                    <Link href="/inicio">
                        <button className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">Ir al inicio</button>
                     </Link>
                </div>
            </div>
        </div>
    );

}


export default ErrorComponent;
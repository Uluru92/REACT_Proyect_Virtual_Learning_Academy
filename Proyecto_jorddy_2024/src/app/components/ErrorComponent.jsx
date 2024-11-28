import Link from "next/link";
import React from "react";
import Image from "next/image";

function ErrorComponent() {
    return (
        <div>
            <div class="min-h-screen flex flex-grow items-center justify-center bg-yellow-200">
                <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                    <Link href="/login">
                        <Image
                            className="rounded-t-lg "
                            src="/Error.jpg" alt="Error50"
                            width={800} height={800} />
                        
                        <button className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">Por favor ingresa tu cuenta admin</button>
                     </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;
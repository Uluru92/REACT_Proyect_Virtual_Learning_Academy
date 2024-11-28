import React from "react";

const ListaComponent = () => {
    const items = [" - Small business proudly based in Costa Rica, with a physical store located in San José.",
        "- Specialized in offering the best video games and related products, both in -store and through online orders.",
        "- Provide fast and reliable home delivery services, so you can enjoy your favorite games without leaving the comfort of your home.",
        "- Operation hours are Monday to Friday from 11:00 a.m.to 7:00 p.m. and Saturdays from 7:00 a.m.to 12:00 p.m."
    ];

    return (
        <div>
            <h1 className="text-center block py-2 px-8 text-lg text-red-700">Welcome to Uluru's eSport Store</h1>
            <br /><br />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <br />
            <h2 className="text-end block py-5 px-8 text-lg text-gray-500">At Urulu Gaming, your next adventure is just a click away!</h2>
        </div>
    );
};

export default ListaComponent;
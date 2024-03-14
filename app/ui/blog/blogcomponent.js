'use client';
import Image from "next/image";
import { useState } from "react";


function BlogCard({ title, imageUrl, alt, content }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="flex-1 px-10  xl:w-3/4 md:p-2 hover:bg-amber-300   hover:rounded-3xl " onClick={toggleModal}>
            <Image loading="lazy" src={imageUrl} alt={alt} width={500} height={500} className="grow object-cover aspect-[2] rounded-3xl  max-md:mt-10 max-md:max-w-full" />
            <div className="mt-5 text-xl font-semibold text-black">{title}</div>
            {showModal && <BlogModal title={title} content={content} onClose={toggleModal} />}
        </div>
    );
};
function BlogModal({ title, content, onClose }) {
    const splitContentIntoParagraphs = (content) => {
        return content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
        ));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-90">
            <div className="bg-white p-7 md:p-20 mx-4 rounded-3xl md:w-8/12 overflow-y-auto max-h-full">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 p-3">{title}</h2>
                <div className="">{splitContentIntoParagraphs(content)}</div>
                <button onClick={onClose} className="mt-4 bg-slate-950 hover:bg-slate-900 text-white font-regular py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close</button>
            </div>
        </div>
    );
};


export default BlogCard;
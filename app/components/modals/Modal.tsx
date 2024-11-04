"use client"

import { useCallback, useEffect, useState } from "react";


interface ModalProps {
    label: string;
    close: () => void;
    content: React.ReactElement;
    isOpen: boolean;

}

const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false)

        setTimeout(() => {
            close();
        }, 300)
    }, [close])

    if (!isOpen) {
        return null;
    }


    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/80">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto mx-auto">
                <div className={`translate duration-500 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}  opacity-100`}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        <header className="flex items-center p-6 rounded-t justify-center relative border-b">
                            <div
                                onClick={handleClose}
                                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                                </svg>
                            </div>

                            <h2 className="text-lg font-bold">{label}</h2>
                        </header>
                        <section className="p-6">
                            {content}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
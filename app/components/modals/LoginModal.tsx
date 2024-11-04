"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";


const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <h2 className="mb-6 text-2xl">Welcome to AirBnB, please log in</h2>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal
"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";


const SignupModal = () => {
    const signupModal = useSignupModal();

    const content = (
        <>
            <form className="space-y-4">
                <input type="text" placeholder="email address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input type="password" placeholder="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input type="password" placeholder="repeat password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    the error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('test')}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal
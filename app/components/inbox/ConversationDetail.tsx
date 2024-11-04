"use client";

import CustomButton from "../forms/CustomButton"

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptates doloribus, unde vitae sequi distinctio amet quo tenetur ipsum minima molestias facilis recusandae ad, provident reprehenderit delectus ducimus repudiandae sunt.</p>
        </div>

        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Jane Doe</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptates doloribus, unde vitae sequi distinctio amet quo tenetur ipsum minima molestias facilis recusandae ad, provident reprehenderit delectus ducimus repudiandae sunt.</p>
        </div>
      </div>

      <div className="mt-4 flex py-4 px-6 border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="type your message"
          className="w-full p-2 bg-gray-200 rounded-xl"
        />
        <CustomButton
          onClick={() => console.log('clicked')}
          label="send"
          className="w-[100px]"
        />
      </div>
    </>
  )
}

export default ConversationDetail
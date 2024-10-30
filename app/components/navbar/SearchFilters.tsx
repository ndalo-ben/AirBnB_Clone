
const SearchFilters = () => {
  return (
    <div className="lg:h-[64px] h-[48px] flex flex-row items-center justify-center border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-between">
            <div className="cursor-pointer w-[250px] h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">where</p>
              <p className="text-sm">Wanted location</p>
            </div>

            <div className="cursor-pointer h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">check in</p>
              <p className="text-sm">Add dates</p>
            </div>

            <div className="cursor-pointer h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">check out</p>
              <p className="text-sm">Add dates</p>
            </div>

            <div className="cursor-pointer h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">who</p>
              <p className="text-sm">Add guests</p>
            </div>
          </div>
        </div>

      </div>
      <div className="p-2">
        <div className="lg:p-4 p-2 bg-airbnb rounded-full text-white hover:bg-airbnb-dark transition hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 112 112">
            <path fill="#fff" d="M108.9,108.9L108.9,108.9c-2.3,2.3-6.1,2.3-8.5,0L87.7,96.2c-2.3-2.3-2.3-6.1,0-8.5l0,0c2.3-2.3,6.1-2.3,8.5,0l12.7,12.7C111.2,102.8,111.2,106.6,108.9,108.9z"></path><path fill="#fff" d="M52.3 17.299999999999997A35 35 0 1 0 52.3 87.3A35 35 0 1 0 52.3 17.299999999999997Z" transform="rotate(-45.001 52.337 52.338)"></path><path fill="#fff" d="M52.3 17.299999999999997A35 35 0 1 0 52.3 87.3A35 35 0 1 0 52.3 17.299999999999997Z" transform="rotate(-45.001 52.337 52.338)"></path><path fill="#71c2ff" d="M52.3 84.3c-1.7 0-3-1.3-3-3s1.3-3 3-3c6.9 0 13.5-2.7 18.4-7.6 6.4-6.4 9-15.5 6.9-24.4-.4-1.6.6-3.2 2.2-3.6 1.6-.4 3.2.6 3.6 2.2C86 55.8 82.9 67.1 75 75 68.9 81 60.9 84.3 52.3 84.3zM73 35c-.8 0-1.5-.3-2.1-.9L70.7 34c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0l.2.2c1.2 1.2 1.2 3.1 0 4.2C74.5 34.7 73.8 35 73 35z"></path><path fill="#444b54" d="M52.3 90.3c-9.7 0-19.5-3.7-26.9-11.1-14.8-14.8-14.8-38.9 0-53.7 14.8-14.8 38.9-14.8 53.7 0h0C94 40.3 94 64.4 79.2 79.2 71.8 86.6 62.1 90.3 52.3 90.3zM52.3 20.4c-8.2 0-16.4 3.1-22.6 9.4-12.5 12.5-12.5 32.8 0 45.3C42.2 87.4 62.5 87.4 75 75c12.5-12.5 12.5-32.8 0-45.3C68.7 23.5 60.5 20.4 52.3 20.4zM111 98.3L98.3 85.6c-1.7-1.7-4-2.6-6.4-2.6-1.4 0-2.7.3-3.9.9l-2.5-2.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l2.5 2.5c-.6 1.2-.9 2.5-.9 3.9 0 2.4.9 4.7 2.6 6.4L98.3 111c1.8 1.8 4.1 2.6 6.4 2.6s4.6-.9 6.4-2.6l0 0C114.5 107.5 114.5 101.8 111 98.3zM106.8 106.8c-1.2 1.2-3.1 1.2-4.2 0L89.8 94.1c-.6-.6-.9-1.3-.9-2.1s.3-1.6.9-2.1c.6-.6 1.3-.9 2.1-.9s1.6.3 2.1.9l12.7 12.7C108 103.7 108 105.6 106.8 106.8z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters
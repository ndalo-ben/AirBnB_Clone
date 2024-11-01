
const ReservationSidebar = () => {
    return (
        <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl mt-6">
            <h2 className="mb-5 text-2xl">$200 per night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs mb-2">Guests</label>
                <select name="" id="" className="w-full -ml-1 text-sm">
                    <option value="">1 guest</option>
                    <option value="">2 guests</option>
                    <option value="">3 guests</option>
                    <option value="">4 guests</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">Book</div>
            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 3 nights</p>
                <p>$600</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>AirBnB fee</p>
                <p>$40</p>
            </div>

            <hr />
            <div className="mt-4 font-bold flex justify-between align-center">
                <p>Total</p>
                <p>$640</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar